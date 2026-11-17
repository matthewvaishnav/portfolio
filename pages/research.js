import NextLink from 'next/link'
import Head from 'next/head'

const Research = () => (
  <article>
    <Head><title>Research — Matthew Vaishnav</title></Head>
    <h1>Research</h1>

    <p>Paired-Acquisition Neural Factorization (PA-NF) — scanner effects and biological representations.</p>
    <p>TransnnMIL — whole-slide learning.</p>
    <p>PathologyFL — federated learning in computational pathology.</p>
    <p>NucleoScope — reliability of tissue measurements.</p>

    <p className="simple-links">
      <a href="https://matthewvaishnav.github.io/computational-pathology-research/">PA-NF manuscript</a><br />
      <a href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion">SCORPION experiments</a><br />
      <a href="https://github.com/matthewvaishnav/computational-pathology-research">research repository</a><br />
      <NextLink href="/">home</NextLink>
    </p>
  </article>
)

export default Research
