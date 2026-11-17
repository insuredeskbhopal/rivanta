import Image from "next/image";
import residues from "../../image/challenges/indian-crop-residue.webp";
import materials from "../../image/challenges/agricultural-materials-research.webp";
import water from "../../image/challenges/industrial-water-circulation.webp";
import styles from "./india-challenges.module.css";

const fieldChallenges = [
  {
    title: "Beyond Stubble Burning",
    copy: "Short harvest-to-sowing windows and limited collection options can make residue disposal difficult. We aim to create industrial routes for suitable residues, giving farmers more alternatives to burning.",
  },
  {
    title: "The Cost Of Polluted Air",
    copy: "Open residue burning adds to particulate pollution. Responsible biomass use and appropriately controlled industrial processes can offer alternatives; our aim is to reduce avoidable burning without shifting pollution elsewhere.",
  },
  {
    title: "Value Lost After Harvest",
    copy: "Without collection and reliable markets, agricultural residues can remain underused. We are exploring rice husk, rice straw, wheat residues and other suitable biomass as inputs for materials and renewable fuels.",
  },
  {
    title: "Stronger Rural Supply Chains",
    copy: "Fragmented supply chains can limit rural earning opportunities. Our sourcing approach aims to connect farmers, aggregation businesses, logistics providers and skilled workers with industrial demand, creating routes to greater local value.",
  },
];

const industryChallenges = [
  {
    title: "Less Exposure To Material Imports",
    copy: "Overseas sourcing can expose industrial supply chains to external disruptions. Our biogenic silica and silicon pathway work aims to strengthen selected domestic capabilities, supporting the Make in India vision and a more diversified manufacturing base.",
  },
  {
    title: "A Broader Energy Mix",
    copy: "Fossil-fuel dependence makes diverse energy sources important. We are developing CBG and evaluating SAF, biomass energy, solar and wind pathways to contribute to India’s future fuel and power needs.",
  },
];

const resourceChallenges = [
  {
    title: "Recovering What Industry Loses",
    copy: "Separate industrial processes can leave heat, materials and by-products underused. Our integrated approach considers recovery and reuse across processes, aiming to keep more resource value within the industrial system.",
  },
  {
    title: "Water That Works Harder",
    copy: "Industrial growth brings freshwater demand and wastewater responsibilities. We are evaluating water recycling and zero-liquid-discharge options where technically and economically suitable, aiming to conserve water and manage effluent responsibly.",
  },
];

function ChallengeCopy({ title, copy }: { title: string; copy: string }) {
  return (
    <div className={styles.challenge}>
      <h4>{title}</h4>
      <p>{copy}</p>
    </div>
  );
}

export function IndiaChallenges() {
  return (
    <section id="india-challenges" className={styles.section} aria-labelledby="india-challenges-heading">
      <div className={styles.introduction}>
        <h2 id="india-challenges-heading">India’s Challenges.<br /><em>Resources For Change.</em></h2>
        <p>Agriculture, industry and energy face connected challenges. Rivanta aims to link the resources India already has with the materials, fuels and infrastructure its future needs.</p>
      </div>

      <article className={styles.field} aria-labelledby="field-challenges-heading">
        <div className={styles.fieldOpening}>
          <div className={`${styles.media} ${styles.fieldImage}`}>
            <div className={styles.imageInner}>
              <Image src={residues} alt="Illustrative AI-generated scene of a harvested Indian field with burnt stubble and drifting smoke; not a specific incident or Rivanta property" sizes="(max-width: 760px) 100vw, 54vw" placeholder="blur" />
            </div>
          </div>
          <div className={styles.fieldStatement}>
            <h3 id="field-challenges-heading">Value Begins<br /><em>In The Field.</em></h3>
            <p>A different route for agricultural residues starts with collection, viable markets and a dependable connection to industry.</p>
            <span className={styles.connector} aria-hidden="true">
              <svg width="70" height="25" viewBox="0 0 70 25" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M1 12.5h65M55 2l11 10.5L55 23" /></svg>
            </span>
          </div>
        </div>
        <div className={styles.fieldChallenges}>
          {fieldChallenges.map(challenge => <ChallengeCopy key={challenge.title} {...challenge} />)}
        </div>
      </article>

      <article className={`${styles.chapter} ${styles.industry}`} aria-labelledby="industry-challenges-heading">
        <div className={styles.chapterCopy}>
          <h3 id="industry-challenges-heading">More Made<br /><em>In India.</em></h3>
          <div className={styles.challengeList}>
            {industryChallenges.map(challenge => <ChallengeCopy key={challenge.title} {...challenge} />)}
          </div>
        </div>
        <div className={`${styles.media} ${styles.materialsImage}`}>
          <Image src={materials} alt="AI-generated illustration of rice husk and a white material sample on a laboratory bench; not a Rivanta laboratory or proof of a production process" sizes="(max-width: 760px) 100vw, 42vw" placeholder="blur" />
        </div>
      </article>

      <article className={`${styles.chapter} ${styles.resources}`} aria-labelledby="resource-challenges-heading">
        <div className={`${styles.media} ${styles.waterImage}`}>
          <Image src={water} alt="AI-generated illustration of industrial water-circulation pipes and treatment equipment; not a Rivanta facility or evidence of achieved water performance" sizes="(max-width: 760px) 100vw, 42vw" placeholder="blur" />
        </div>
        <div className={styles.chapterCopy}>
          <h3 id="resource-challenges-heading">Keep Resources<br /><em>In Circulation.</em></h3>
          <div className={styles.challengeList}>
            {resourceChallenges.map(challenge => <ChallengeCopy key={challenge.title} {...challenge} />)}
          </div>
        </div>
      </article>

      <div className={styles.closing}>
        <p>From Agricultural Residues<br /><em>To Industrial Possibility.</em></p>
        <a className={styles.visionLink} href="https://www.rivantagreen.com/projects">
          Explore Our Industrial Vision
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </section>
  );
}
