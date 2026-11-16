import styles from "./company-overview.module.css";

const priorities = [
  {
    title: "Feedstock planning",
    description: "Assessing agricultural resources and the sourcing networks needed to bring them into industry.",
  },
  {
    title: "Industrial integration",
    description: "Considering materials, energy and resource recovery together during project planning.",
  },
  {
    title: "Phased development",
    description: "Advancing proposed initiatives through feasibility, engineering and regulatory preparation.",
  },
];

export function CompanyOverview() {
  return (
    <section id="company-overview" className={styles.overview} aria-labelledby="company-overview-heading" tabIndex={-1}>
      <div className={styles.introduction}>
        <h2 id="company-overview-heading">An integrated<br />industrial approach.</h2>
        <div className={styles.copy}>
          <p className={styles.lead}>Rivanta Green is an Indian industrial enterprise developing a portfolio across advanced materials, renewable fuels and resource recovery.</p>
          <p className={styles.support}>We consider feedstock, infrastructure and responsible resource use together, with feasibility and engineering guiding each initiative’s development.</p>
          <a className={styles.profileLink} href="https://www.rivantagreen.com/about">
            About our enterprise
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
      <dl className={styles.priorities}>
        {priorities.map(priority => (
          <div key={priority.title}>
            <dt>{priority.title}</dt>
            <dd>{priority.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
