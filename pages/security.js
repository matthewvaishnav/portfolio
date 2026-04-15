import Head from 'next/head'

const Security = () => {
  return (
    <>
      <Head>
        <title>Matthew Vaishnav - Security</title>
      </Head>
      <iframe 
        src="/cst-portfolio/security.html" 
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          position: 'fixed',
          top: 0,
          left: 0
        }}
      />
    </>
  )
}

export default Security
