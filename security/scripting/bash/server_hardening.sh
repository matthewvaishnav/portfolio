#!/usr/bin/env bash
# ============================================================
# Linux Server Hardening Script
# CIS Benchmark Level 1 — Ubuntu 22.04 LTS
# ============================================================
# Author  : Matthew Vaishnav — CST, Conestoga College
# Version : 1.3
# Usage   : sudo bash server_hardening.sh [--dry-run] [--skip-ssh]
#
# WARNING : Test in a non-production environment first.
#           Backup system and SSH keys before running.
# ============================================================

set -euo pipefail

# ── Colors ────────────────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; NC='\033[0m'; BOLD='\033[1m'

# ── Flags ─────────────────────────────────────────────────────────────────────
DRY_RUN=false
SKIP_SSH=false
LOG_FILE="/var/log/hardening_$(date +%Y%m%d_%H%M%S).log"

for arg in "$@"; do
  case $arg in
    --dry-run) DRY_RUN=true ;;
    --skip-ssh) SKIP_SSH=true ;;
  esac
done

# ── Helpers ───────────────────────────────────────────────────────────────────
log()   { echo -e "${GREEN}[✔]${NC} $*" | tee -a "$LOG_FILE"; }
warn()  { echo -e "${YELLOW}[!]${NC} $*" | tee -a "$LOG_FILE"; }
error() { echo -e "${RED}[✘]${NC} $*" | tee -a "$LOG_FILE"; }
info()  { echo -e "${BLUE}[→]${NC} $*" | tee -a "$LOG_FILE"; }
run()   {
  if $DRY_RUN; then
    echo -e "${YELLOW}[DRY-RUN]${NC} $*"
  else
    eval "$@" >> "$LOG_FILE" 2>&1 || warn "Command failed: $*"
  fi
}

header() {
  echo ""
  echo -e "${BOLD}${BLUE}══════════════════════════════════════${NC}"
  echo -e "${BOLD}${BLUE}  $*${NC}"
  echo -e "${BOLD}${BLUE}══════════════════════════════════════${NC}"
}

check_root() {
  if [[ $EUID -ne 0 ]]; then
    error "This script must be run as root (sudo)"
    exit 1
  fi
}

# ── Pre-flight ────────────────────────────────────────────────────────────────
check_root
info "Hardening started: $(date)"
info "Log file: $LOG_FILE"
$DRY_RUN && warn "DRY RUN MODE — no changes will be made"

# ── 1. System Updates ─────────────────────────────────────────────────────────
header "1 — System Updates"
run "apt-get update -qq"
run "apt-get upgrade -y -qq"
run "apt-get autoremove -y -qq"
log "System packages updated"

# ── 2. Disable Unused Services ────────────────────────────────────────────────
header "2 — Disable Unnecessary Services"
SERVICES_TO_DISABLE=(
  "avahi-daemon"
  "cups"
  "rpcbind"
  "nfs-server"
  "nis"
  "telnet"
  "ftp"
)

for svc in "${SERVICES_TO_DISABLE[@]}"; do
  if systemctl is-active --quiet "$svc" 2>/dev/null; then
    run "systemctl stop $svc"
    run "systemctl disable $svc"
    log "Disabled service: $svc"
  else
    info "Service not running: $svc"
  fi
done

# ── 3. SSH Hardening ──────────────────────────────────────────────────────────
if ! $SKIP_SSH; then
  header "3 — SSH Configuration"
  SSHD_CONFIG="/etc/ssh/sshd_config"
  run "cp $SSHD_CONFIG ${SSHD_CONFIG}.bak.$(date +%Y%m%d)"

  declare -A SSH_SETTINGS=(
    ["PermitRootLogin"]="no"
    ["PasswordAuthentication"]="no"
    ["PermitEmptyPasswords"]="no"
    ["X11Forwarding"]="no"
    ["MaxAuthTries"]="3"
    ["LoginGraceTime"]="30"
    ["ClientAliveInterval"]="300"
    ["ClientAliveCountMax"]="2"
    ["AllowAgentForwarding"]="no"
    ["AllowTcpForwarding"]="no"
    ["Protocol"]="2"
    ["LogLevel"]="VERBOSE"
    ["Banner"]="/etc/issue.net"
  )

  for key in "${!SSH_SETTINGS[@]}"; do
    value="${SSH_SETTINGS[$key]}"
    if grep -qE "^#?${key}" "$SSHD_CONFIG"; then
      run "sed -i 's|^#\?${key}.*|${key} ${value}|' $SSHD_CONFIG"
    else
      run "echo '${key} ${value}' >> $SSHD_CONFIG"
    fi
    log "SSH: $key = $value"
  done

  run "echo 'UNAUTHORIZED ACCESS PROHIBITED. All activity is monitored and logged.' > /etc/issue.net"
  run "systemctl reload sshd"
  log "SSH hardening complete"
fi

# ── 4. Firewall (UFW) ─────────────────────────────────────────────────────────
header "4 — Firewall Setup (UFW)"
run "apt-get install -y -qq ufw"
run "ufw --force reset"
run "ufw default deny incoming"
run "ufw default allow outgoing"
run "ufw limit ssh"
run "ufw allow 443/tcp"
run "ufw --force enable"
log "UFW firewall configured"

# ── 5. Kernel Hardening (sysctl) ─────────────────────────────────────────────
header "5 — Kernel Parameter Hardening"
SYSCTL_CONF="/etc/sysctl.d/99-hardening.conf"

cat << 'EOF' | run "tee $SYSCTL_CONF"
# CST Hardening — sysctl settings
net.ipv4.ip_forward = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.conf.all.secure_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.all.log_martians = 1
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.icmp_ignore_bogus_error_responses = 1
net.ipv4.tcp_syncookies = 1
net.ipv4.conf.all.rp_filter = 1
net.ipv6.conf.all.accept_redirects = 0
net.ipv6.conf.all.accept_source_route = 0
kernel.randomize_va_space = 2
kernel.dmesg_restrict = 1
kernel.kptr_restrict = 2
fs.suid_dumpable = 0
EOF

run "sysctl --system"
log "Kernel hardening applied"

# ── 6. Password Policy ────────────────────────────────────────────────────────
header "6 — Password Policies"
run "apt-get install -y -qq libpam-pwquality"

PAM_QUALITY="/etc/security/pwquality.conf"
run "grep -q '^minlen' $PAM_QUALITY && sed -i 's/^minlen.*/minlen = 14/' $PAM_QUALITY || echo 'minlen = 14' >> $PAM_QUALITY"
run "grep -q '^dcredit' $PAM_QUALITY && sed -i 's/^dcredit.*/dcredit = -1/' $PAM_QUALITY || echo 'dcredit = -1' >> $PAM_QUALITY"
run "grep -q '^ucredit' $PAM_QUALITY && sed -i 's/^ucredit.*/ucredit = -1/' $PAM_QUALITY || echo 'ucredit = -1' >> $PAM_QUALITY"
run "grep -q '^retry' $PAM_QUALITY && sed -i 's/^retry.*/retry = 3/' $PAM_QUALITY || echo 'retry = 3' >> $PAM_QUALITY"

FAILLOCK_CONF="/etc/security/faillock.conf"
run "echo 'deny = 5' >> $FAILLOCK_CONF"
run "echo 'unlock_time = 900' >> $FAILLOCK_CONF"

log "Password policy configured"

# ── 7. Audit Daemon (auditd) ─────────────────────────────────────────────────
header "7 — Auditd Logging"
run "apt-get install -y -qq auditd audispd-plugins"

AUDIT_RULES="/etc/audit/rules.d/hardening.rules"
cat << 'EOF' | run "tee $AUDIT_RULES"
-w /etc/passwd -p wa -k identity
-w /etc/shadow -p wa -k identity
-w /etc/group -p wa -k identity
-w /etc/sudoers -p wa -k sudo_changes
-a always,exit -F path=/usr/bin/sudo -F perm=x -F auid>=1000 -F auid!=4294967295 -k privileged
-a always,exit -F path=/usr/bin/su -F perm=x -k privileged
-a always,exit -F arch=b64 -S execve -k exec
-a always,exit -F arch=b64 -S open -F exit=-EACCES -k access
-a always,exit -F arch=b64 -S open -F exit=-EPERM -k access
-w /etc/cron.d/ -p wa -k cron
-w /etc/crontab -p wa -k cron
-a always,exit -F arch=b64 -S sethostname -S setdomainname -k system_locale
EOF

run "systemctl enable auditd"
run "systemctl restart auditd"
log "Auditd configured and started"

# ── 8. File Permissions ───────────────────────────────────────────────────────
header "8 — Critical File Permissions"
declare -A FILE_PERMS=(
  ["/etc/passwd"]="644"
  ["/etc/shadow"]="000"
  ["/etc/group"]="644"
  ["/etc/gshadow"]="000"
  ["/etc/sudoers"]="440"
  ["/etc/ssh/sshd_config"]="600"
)

for file in "${!FILE_PERMS[@]}"; do
  perm="${FILE_PERMS[$file]}"
  if [[ -f "$file" ]]; then
    run "chmod $perm $file"
    log "Set $file → $perm"
  fi
done

# ── 9. Remove Dangerous Packages ──────────────────────────────────────────────
header "9 — Remove Risky Packages"
PACKAGES_TO_REMOVE=("telnet" "rsh-client" "talk" "ntalk" "xinetd")
for pkg in "${PACKAGES_TO_REMOVE[@]}"; do
  if dpkg -l "$pkg" &>/dev/null; then
    run "apt-get remove -y $pkg"
    log "Removed: $pkg"
  fi
done

# ── 10. Fail2Ban ──────────────────────────────────────────────────────────────
header "10 — Fail2Ban Installation"
run "apt-get install -y -qq fail2ban"
cat << 'EOF' | run "tee /etc/fail2ban/jail.local"
[DEFAULT]
bantime  = 3600
findtime = 600
maxretry = 5
backend  = systemd

[sshd]
enabled = true
port    = ssh
logpath = %(sshd_log)s
EOF
run "systemctl enable fail2ban"
run "systemctl restart fail2ban"
log "Fail2Ban configured"

# ── Summary ───────────────────────────────────────────────────────────────────
header "Hardening Complete"
echo ""
echo -e "${GREEN}${BOLD}  ✔ Completed successfully!${NC}"
echo -e "  📄 Full log: ${LOG_FILE}"
echo ""
echo -e "${YELLOW}  ⚠ NEXT STEPS:${NC}"
echo "  1. Verify SSH still works from another session before closing this one"
echo "  2. Review auditd rules: /etc/audit/rules.d/hardening.rules"
echo "  3. Test firewall: ufw status verbose"
echo "  4. Run: lynis audit system  (if lynis is installed)"
echo ""
