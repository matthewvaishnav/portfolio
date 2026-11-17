import NextLink from 'next/link'

const Home = () => (
  <article>
    <h1>Matthew Vaishnav</h1>

    <p>
      I am an independent researcher working on machine learning for
      computational pathology. I am interested in what digital tissue images
      can tell us about biology, and how the process of acquiring those images
      can change what a model learns.
    </p>

    <p>
      My research focuses on paired-acquisition representation learning,
      identifiability, and evaluating models under changes in scanners,
      datasets, and experimental conditions. In particular, I study whether
      tissue-related information can be retained while acquisition-dependent
      effects are separated.
    </p>

    <p>
      I developed <a href="https://matthewvaishnav.github.io/computational-pathology-research/">
        Paired-Acquisition Neural Factorization (PA-NF)
      </a>, a research programme built around matched observations of the same
      tissue across scanners. The work also includes whole-slide modelling,
      federated learning, and experiments testing the limits of these methods.
      Biological purity is a research question, not an established result.
    </p>

    <p>
      I conduct this research independently in Kitchener–Waterloo, Canada,
      while studying Computer Programming at Conestoga College.
    </p>

    <p className="links">
      <NextLink href="/research">research</NextLink>
      {' · '}
      <a href="https://matthewvaishnav.github.io/computational-pathology-research/">
        manuscript
      </a>
      {' · '}
      <a href="https://github.com/matthewvaishnav">GitHub</a>
      {' · '}
      <a href="https://www.linkedin.com/in/matthew-vaishnav-594312403/">
        LinkedIn
      </a>
      {' · '}
      <a href="mailto:matthewvaishnav@gmail.com">email</a>
    </p>
  </article>
)

export default Home
