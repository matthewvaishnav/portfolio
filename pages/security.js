import { useEffect } from 'react'

const Security = () => {
  useEffect(() => {
    // Redirect to standalone HTML
    window.location.replace('/portfolio/defensive-security.html')
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#07080e',
      color: '#a0a8be',
      fontFamily: 'monospace'
    }}>
      Redirecting to security portfolio...
    </div>
  )
}

export default Security
