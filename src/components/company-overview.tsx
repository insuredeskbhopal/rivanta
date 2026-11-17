import Image from "next/image";
import agriculture from "../../image/overview/indian-paddy-fields.webp";
import harvest from "../../image/overview/indian-rice-harvest.webp";
import styles from "./company-overview.module.css";

const priorities = [
  {
    title: "Begin With The Resource.",
    description: "Exploring how rice husk, rice straw and other agricultural residues can support industrial applications and create opportunities across rural supply chains.",
  },
  {
    title: "Connect The Possibilities.",
    description: "Connecting materials, renewable fuels, energy and resource recovery in one industrial vision, with the aim of using resources efficiently and reducing waste.",
  },
  {
    title: "Build For India’s Future.",
    description: "Advancing engineering-led initiatives that aim to strengthen domestic manufacturing, support the Make in India vision and reduce reliance on selected imported industrial materials.",
  },
];

export function CompanyOverview() {
  return (
    <section id="company-overview" className={styles.overview} aria-labelledby="company-overview-heading" tabIndex={-1}>
      <div className={styles.introduction}>
        <h2 id="company-overview-heading">Industry, Considered<br /><em>As A Whole.</em></h2>
        <div className={styles.copy}>
          <p className={styles.lead}>Rivanta Green is an Indian industrial enterprise developing integrated initiatives across advanced materials, renewable fuels and resource recovery. We aim to turn the potential of agricultural residues into opportunities for domestic industry.</p>
          <a className={styles.profileLink} href="https://www.rivantagreen.com/about">
            About our enterprise
            <span className={styles.linkArrow} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className={styles.composition}>
        <div className={styles.visuals}>
          <figure className={styles.campus}>
            <div className={styles.campusImage}>
              <Image src={agriculture} alt="AI-generated illustration of Indian paddy fields, an irrigation channel and a farm path; not a Rivanta property" sizes="(max-width: 700px) 640px, (max-width: 1000px) 100vw, 66vw" quality={90} placeholder="blur" />
            </div>
          </figure>
          <figure className={styles.detail}>
            <div className={styles.detailImage}>
              <Image src={harvest} alt="AI-generated illustration of hand-tied rice harvest sheaves beside a field; not an actual Rivanta sourcing site" sizes="(max-width: 700px) 46vw, (max-width: 1000px) 34vw, 23vw" placeholder="blur" />
            </div>
          </figure>
          <p className={styles.visualNote}><strong>Materials. Fuels. Power.</strong><br /> <em>Connected By Purpose.</em></p>
        </div>

        <div className={styles.approach}>
          <h3>Connected Resources.<br /><em>Considered Development.</em></h3>
          <p className={styles.support}>India’s agricultural residues hold potential beyond disposal and open burning. We aim to develop that value by connecting responsible sourcing, advanced materials, renewable energy and resource recovery.</p>
          <dl className={styles.priorities}>
            {priorities.map(priority => (
              <div className={styles.priority} key={priority.title}>
                <dt><span className={styles.priorityMark} aria-hidden="true" />{priority.title}</dt>
                <dd>{priority.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
