import NextLink from 'next/link'

const Home = () => (
  <article>
    <h1>Matthew Vaishnav</h1>

    <p>Independent researcher in machine learning and computational pathology.</p>
    <p>I develop Paired-Acquisition Neural Factorization (PA-NF).</p>
    <p>My research studies acquisition effects on biological representations.</p>
    <p>I also work on whole-slide learning and federated pathology.</p>
    <p>I am based in Kitchener–Waterloo, Canada.</p>

    <p className="simple-links">
      <NextLink href="/research">research</NextLink><br />
      <a href="https://matthewvaishnav.github.io/computational-pathology-research/">manuscript</a><br />
      <a href="https://github.com/matthewvaishnav">GitHub</a><br />
      <a href="mailto:matthewvaishnav@gmail.com">email</a>
    </p>
  </article>
)

export default Home
