import NextLink from 'next/link'
import Head from 'next/head'

const Research = () => (
  <article>
    <Head>
      <title>Research — Matthew Vaishnav</title>
      <meta name="description" content="Selected computational pathology research programmes, manuscripts, methods and evidence." />
    </Head>

    <p className="back-link">
      <NextLink href="/">Matthew Vaishnav</NextLink> / research
    </p>

    <h1>Research</h1>

    <p>
      I study how acquisition and computational choices influence what
      can be inferred from histopathology images. My work emphasizes
      controlled comparisons, matched observations, and evidence that
      separates predictive performance from claims about biology.
    </p>

    <section className="research-item">
      <h2>Paired-Acquisition Neural Factorization (PA-NF)</h2>
      <p>
        A neural factorization framework for observations of the same tissue
        acquired by different scanners. The primary SCORPION study uses
        48 human H&amp;E slides, 480 aligned tissue regions and five scanners.
        Registered neural comparisons found reduced recoverable scanner
        identity while retaining tissue-region retrieval. Independent
        canine experiments, simple linear baselines and follow-up audits
        place important limits on the interpretation: the results do not
        establish biologically pure representations.
      </p>
      <p className="muted">
        <a href="https://matthewvaishnav.github.io/computational-pathology-research/">
          research manuscript
        </a>
        {' · '}
        <a href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion">
          SCORPION evidence
        </a>
        {' · '}
        <a href="https://github.com/matthewvaishnav/paired-acquisition-factorization-caninescc">
          canine study
        </a>
      </p>
    </section>

    <section className="research-item">
      <h2>Whole-slide modelling</h2>
      <p>
        TransnnMIL and related multiple-instance learning experiments
        examine how patch-level representations are combined for slide
        predictions. The PANDA work includes 10,611 readable slide
        feature bags. Matched architectural superiority is not yet
        established by these experiments.
      </p>
      <p className="muted">
        <a href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/results/panda-slide-level-baselines.md">
          PANDA experiments
        </a>
      </p>
    </section>

    <section className="research-item">
      <h2>Federated pathology and institutional effects</h2>
      <p>
        PathologyFL and FAIR-WEIGHTS-H investigate learning under
        institutional differences, including client weighting and
        simulated site degradation. Related CAMELYON17 experiments
        examine the consequences of weighting real centres differently.
        Centralized held-out-centre proxies should not be mistaken for
        deployed multi-hospital validation.
      </p>
      <p className="muted">
        <a href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/federated/pathologyfl.md">
          PathologyFL
        </a>
        {' · '}
        <a href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/fair-weights-h-stress-result.md">
          FAIR-WEIGHTS-H
        </a>
        {' · '}
        <a href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/camelyon17-external-center-validation-note.md">
          CAMELYON17
        </a>
      </p>
    </section>

    <section className="research-item">
      <h2>Measurement reliability and reproducibility</h2>
      <p>
        NucleoScope and related work examine how computational context
        affects quantitative tissue measurements. Across the research
        programme I develop reproducible experiments, negative controls,
        and audits intended to test the limits of retained conclusions.
      </p>
    </section>

    <p className="muted">
      This is experimental research, not clinical validation. Papers
      and reports linked here may be working manuscripts or research
      records rather than peer-reviewed publications.
    </p>
  </article>
)

export default Research
