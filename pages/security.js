import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Security = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to standalone HTML
    window.location.href = '/portfolio/security-full.html'
  }, [])

  return null
}

export default Security
