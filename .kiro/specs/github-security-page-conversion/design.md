# Design Document: GitHub Security Page Conversion

## Overview

This design outlines the technical approach for converting the comprehensive HTML portfolio from `pages/3d` into a standalone `security-full.html` file that can be deployed to GitHub Pages. The conversion will maintain all interactive features including terminal animations, CTF attack chain viewer, lab topology diagram with 18 nodes and 6 VLANs, while ensuring proper asset path handling and cross-browser compatibility.

The existing security page (`pages/security.js`) already implements a redirect to `/portfolio/security-full.html`, so our task is to create this target file with full functionality preserved.

## Architecture

### File Structure
```
public/
├── security-full.html          # Target standalone HTML file
├── images/                     # Existing image assets
├── fonts/                      # Existing font assets
└── .nojekyll                  # GitHub Pages configuration
```

### Conversion Strategy
The conversion follows a **single-file approach** where all CSS and JavaScript from `pages/3d` is embedded directly into the HTML file. This ensures:
- Complete self-containment
- No dependency on Next.js build system
- Direct compatibility with GitHub Pages static hosting
- Simplified deployment and maintenance

### Asset Path Resolution
All asset references will be updated to work from the `/portfolio/` base path:
- Images: `/portfolio/images/...`
- Fonts: `/portfolio/fonts/...` 
- External CDN resources: Absolute URLs (no changes needed)

## Components and Interfaces

### Core Interactive Components

#### 1. Terminal Animation System
- **Location**: Hero section right panel
- **Functionality**: Step-driven SOC terminal with typing effects
- **Key Features**:
  - Simulated command execution with realistic delays
  - Progress bar tracking through incident phases
  - Interactive "next step" button progression
  - Color-coded output (alerts, commands, results)
- **Dependencies**: Pure JavaScript (no external libraries)

#### 2. CTF Attack Chain Player
- **Location**: CTF section
- **Functionality**: Interactive attack phase visualization
- **Key Features**:
  - Tab-based lab selection (Blue, Linux PrivEsc, Active Directory)
  - Phase-based progression (Recon → Exploit → Escalate → Persist)
  - Dual-pane display (attack log + detection analysis)
  - MITRE ATT&CK technique mapping
  - Sigma rule generation display
- **Dependencies**: Pure JavaScript with embedded lab data

#### 3. Lab Topology Diagram
- **Location**: Lab section
- **Functionality**: Interactive network diagram with 18 nodes across 6 VLANs
- **Key Features**:
  - SVG-based wire drawing between components
  - Clickable nodes with detailed information panels
  - Search/filter functionality
  - Responsive mobile layout fallback
  - Real-time packet counter simulation
- **Dependencies**: SVG manipulation, CSS custom properties

#### 4. Skill Progress Bars
- **Location**: Multiple sections (About, Why Me)
- **Functionality**: Animated progress indicators
- **Key Features**:
  - Intersection Observer-triggered animations
  - Gradient-filled progress bars
  - Percentage display
  - Staggered animation timing

### Navigation and UX Components

#### 1. Side Navigation Dots
- **Functionality**: Section-aware navigation indicators
- **Features**: Auto-highlighting based on scroll position

#### 2. Custom Cursor System
- **Functionality**: Enhanced cursor with hover effects
- **Features**: Dot + ring system with size changes on hover

#### 3. Keyboard Shortcuts
- **Functionality**: Vim-style navigation shortcuts
- **Features**: Modal help system, G-key navigation mode

#### 4. Responsive Mobile Adaptations
- **Functionality**: Mobile-optimized layouts
- **Features**: Hamburger menu, card-based lab diagram, touch-friendly interactions

## Data Models

### CTF Lab Data Structure
```javascript
{
  id: string,           // Unique lab identifier
  platform: string,     // "TryHackMe", "HackTheBox", etc.
  title: string,        // Lab display name
  diff: string,         // "easy", "med", "hard"
  desc: string,         // Lab description
  github: string,       // Link to writeup
  tags: string[],       // MITRE ATT&CK techniques
  phases: [{
    label: string,      // Phase name
    type: string,       // Phase type for color coding
    log: [{             // Terminal output lines
      cls: string,      // CSS class for styling
      t: string         // Text content
    }],
    ttp: string[],      // ATT&CK techniques for this phase
    detection: string,  // Detection opportunities
    sigma: string       // Sigma rule content
  }]
}
```

### Lab Node Data Structure
```javascript
{
  id: string,           // Node identifier
  title: string,        // Display name
  ip: string,           // IP address
  role: string,         // One-line description
  body: string,         // Detailed description
  tags: string,         // Comma-separated service tags
  connects: string,     // Connection information
  status: string        // "online", "active", "target", "planned"
}
```

### Animation State Management
```javascript
{
  terminalStep: number,     // Current terminal animation step
  ctfActiveLab: number,     // Active CTF lab index
  ctfActivePhase: number,   // Active phase within lab
  skillBarsAnimated: Set,   // Tracks which skill bars have animated
  revealedElements: Set     // Tracks scroll-revealed elements
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Interactive Element Functionality Preservation
*For any* interactive element present in the original `pages/3d` file, the same element in the converted `security-full.html` file should maintain identical functionality and behavior.
**Validates: Requirements 1.4, 3.1, 3.2, 3.3, 3.5, 3.6, 3.7, 3.8**

### Property 2: Asset Path Resolution
*For any* asset path (image, font, or other resource) referenced in the converted file, it should resolve correctly when accessed from the `/portfolio/` base path on GitHub Pages.
**Validates: Requirements 2.1, 2.2, 2.4**

### Property 3: Responsive Layout Adaptation
*For any* viewport size (desktop, tablet, mobile), the layout should remain functional, readable, and appropriately adapted to the screen dimensions.
**Validates: Requirements 4.1, 4.4, 4.5**

### Property 4: Cross-Browser Compatibility
*For any* major browser (Chrome, Firefox, Safari, Edge), all CSS features, JavaScript functionality, animations, and interactive elements should work correctly.
**Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5, 8.6**

### Property 5: Interactive Element Responsiveness
*For any* interactive element, it should respond to user input (click, hover, keyboard) within acceptable time limits and provide appropriate visual feedback.
**Validates: Requirements 3.4, 5.4**

## Error Handling

### Asset Loading Failures
- **Graceful Degradation**: Missing images should not break layout
- **Fallback Fonts**: Web-safe font stack for external font failures
- **Error Logging**: Console warnings for missing resources (development only)

### JavaScript Execution Errors
- **Try-Catch Blocks**: Wrap animation and interaction code
- **Feature Detection**: Check for required browser APIs before use
- **Progressive Enhancement**: Core content accessible without JavaScript

### Network and Performance Issues
- **Lazy Loading**: Defer non-critical animations until needed
- **Timeout Handling**: Set reasonable timeouts for external resources
- **Bandwidth Adaptation**: Optimize for slower connections

### Browser Compatibility Issues
- **Polyfill Strategy**: Include minimal polyfills for essential features
- **Feature Detection**: Use modern features with fallbacks
- **Vendor Prefixes**: Include necessary CSS vendor prefixes

## Testing Strategy

### Dual Testing Approach
- **Unit tests**: Verify specific examples, edge cases, and error conditions
- **Integration tests**: Verify end-to-end functionality in real browser environments
- **Manual testing**: Cross-browser and device testing for user experience validation

### Test Categories

#### Example-Based Tests
- File creation and structure validation
- Specific URL accessibility testing
- Asset loading verification
- Interactive component functionality
- Performance benchmarking
- SEO meta tag validation
- GitHub Pages deployment verification

#### Integration Tests
- Full page loading in different browsers
- Interactive workflow testing (terminal → CTF → lab diagram)
- Mobile device testing
- Network condition simulation
- GitHub Pages environment testing

#### Cross-Browser Testing Matrix
- **Desktop**: Chrome 120+, Firefox 120+, Safari 17+, Edge 120+
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features**: All interactive components, animations, responsive layouts

### Performance Testing
- **Load Time**: Target <3 seconds on 3G connection
- **Animation Performance**: 60fps for all animations
- **Memory Usage**: Monitor for memory leaks in long sessions
- **Bundle Size**: Optimize embedded CSS/JS for reasonable file size

### Accessibility Testing
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader**: Semantic HTML structure for assistive technology
- **Color Contrast**: Ensure sufficient contrast ratios
- **Focus Management**: Proper focus indicators and management

The testing strategy emphasizes real-world usage scenarios and ensures the converted file maintains the high-quality user experience of the original while being fully compatible with GitHub Pages hosting constraints.