import { useEffect } from 'react'

const Security = () => {
  useEffect(() => {
    // Redirect to the security HTML page directly
    window.location.href = '/cst-portfolio/security.html'
  }, [])

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '18px'
    }}>
      Redirecting to security portfolio...
    </div>
  )
}

export default Security
