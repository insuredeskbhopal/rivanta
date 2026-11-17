import Image from "next/image";
import residues from "../../image/challenges/indian-crop-residue.webp";
import materials from "../../image/challenges/agricultural-materials-research.webp";
import water from "../../image/challenges/industrial-water-circulation.webp";
import styles from "./india-challenges.module.css";

const fieldChallenges = [
  {
    title: "Beyond Stubble Burning",
    copy: [
      "Every harvest leaves straw and other crop residues. Tight sowing schedules, collection costs and limited access to buyers can make burning a quick way to clear fields.",
      "Rivanta aims to develop industrial uses for suitable agricultural residues, creating additional alternatives to burning.",
    ],
  },
  {
    title: "When The Air Becomes A Concern",
    copy: [
      "Winter air pollution in Delhi and northern India has many causes, including vehicles, industry, dust, weather conditions and seasonal crop burning.",
      "Reducing agricultural burning is one part of the response. We are exploring responsible biomass processing alongside emissions controls and environmental protection.",
    ],
  },
  {
    title: "Valuable Resources Left Behind",
    copy: [
      "Agricultural residues can retain value beyond the field. Yet collection, quality and reliable markets determine whether surplus biomass can support industrial use.",
      "We are exploring rice husk, rice straw and other suitable residues as inputs for advanced materials, renewable fuels and energy.",
    ],
  },
  {
    title: "Better Opportunities For Farmers",
    copy: [
      "Crop residues can be an added responsibility rather than a dependable source of income. Collection, transport and access to buyers remain practical challenges.",
      "Rivanta aims to connect farmers, local businesses and transport providers with industrial demand, opening routes to greater value across rural supply chains.",
    ],
  },
];

const industryChallenges = [
  {
    title: "Making More In India",
    copy: [
      "India imports industrial materials, including some grades of silicon. In 2025, China was its largest supplier of silicon below 99.99% purity.",
      "We are exploring biogenic silica and related advanced-material pathways to support domestic manufacturing and the Make in India vision.",
    ],
  },
  {
    title: "Growth That Creates Value At Home",
    copy: [
      "India’s growth brings demand for materials, reliable energy, infrastructure and skilled work. The opportunity is to retain more of the resulting industrial value within the country.",
      "Our initiatives aim to connect agricultural resources with advanced manufacturing, strengthening local supply chains and future industrial opportunities.",
    ],
  },
];

const resourceChallenges = [
  {
    title: "Cleaner Fuels For A Growing Nation",
    copy: [
      "India needs dependable energy for its industries, transport systems and wider economy. A more diverse fuel and power mix can help reduce exposure to conventional fossil fuels.",
      "Rivanta is developing CBG initiatives and evaluating sustainable aviation fuel, biomass power, solar and wind energy.",
    ],
  },
  {
    title: "Using Resources More Responsibly",
    copy: [
      "Industrial growth brings responsibilities for waste, water and air quality. Materials, heat, water and by-products may offer opportunities for recovery and reuse.",
      "Our development approach considers resource recovery, water recycling, pollution controls and zero-liquid-discharge options where technically and economically suitable.",
    ],
  },
];

function Challenge({ title, copy }: { title: string; copy: readonly string[] }) {
  return <div className={styles.challenge} data-challenge><h3>{title}</h3>{copy.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>;
}

export function IndiaChallenges() {
  return (
    <section id="india-challenges" className={styles.section} aria-labelledby="india-challenges-heading">
      <div className={styles.introduction}>
        <h2 id="india-challenges-heading">India’s Challenges.<br /><em>Industrial Possibilities.</em></h2>
        <div className={styles.introCopy}><p>India is growing, but connected challenges remain: crop-residue burning, polluted air and dependence on imported industrial materials.</p><p>At Rivanta Green, we see an opportunity to use India’s resources more effectively, strengthen domestic industry and create more value within the country.</p></div>
      </div>

      <div className={styles.editorialGrid}>
        <article className={styles.agriculture} aria-label="Crop residue burning and air pollution">
          <div className={styles.fieldPhoto}>
            <Image src={residues} alt="Illustrative AI-generated scene of a harvested Indian field with burnt stubble and drifting smoke; not a specific incident or Rivanta property" sizes="(max-width: 850px) 100vw, 43vw" quality={90} placeholder="blur" />
          </div>
          <div className={styles.pairedCopy}>
            {fieldChallenges.slice(0, 2).map(challenge => <Challenge key={challenge.title} {...challenge} />)}
          </div>
        </article>

        <article className={styles.resourcePanel} aria-label="India’s biomass opportunity and rural supply chains">
          <div className={styles.dataColumn}>
            <dl className={styles.nationalData} aria-label="National biomass estimates from a 2021 study commissioned by MNRE">
              <div><dt>Estimated Surplus Biomass In India</dt><dd><strong>228</strong><span>Million Tonnes / Year</span></dd></div>
              <div><dt>Assessed Biomass Power Potential</dt><dd><strong>42</strong><span>GW</span></dd></div>
            </dl>
            <a className={styles.dataSource} href="https://www.pib.gov.in/FactsheetDetails.aspx?Id=149232&amp;lang=2&amp;reg=3"><span>2021 MNRE-Commissioned Study<br />Cited By PIB, 2025</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a>
          </div>
          <div className={styles.resourceCopy}>
            {fieldChallenges.slice(2).map(challenge => <Challenge key={challenge.title} {...challenge} />)}
          </div>
        </article>

        <article className={styles.industry} aria-label="Domestic materials and economic opportunity">
          <div className={styles.supportPhoto}>
            <Image src={materials} alt="AI-generated illustration of rice husk and a white material sample on a laboratory bench; not a Rivanta laboratory or proof of a production process" sizes="(max-width: 760px) 100vw, 43vw" quality={90} placeholder="blur" />
          </div>
          <div className={styles.pairedCopy}>
            {industryChallenges.map(challenge => <Challenge key={challenge.title} {...challenge} />)}
          </div>
        </article>

        <article className={styles.resources} aria-label="Cleaner energy and responsible resource use">
          <div className={styles.supportPhoto}>
            <Image src={water} alt="AI-generated illustration of industrial water-circulation pipes and treatment equipment; not a Rivanta facility or evidence of achieved water performance" sizes="(max-width: 760px) 100vw, 43vw" quality={90} placeholder="blur" />
          </div>
          <div className={styles.pairedCopy}>
            {resourceChallenges.map(challenge => <Challenge key={challenge.title} {...challenge} />)}
          </div>
        </article>
      </div>

      <div className={styles.closing}>
        <div className={styles.closingCopy}><p className={styles.closingTitle}>India’s Resources.<br /><em>India’s Opportunity.</em></p><p className={styles.closingText}>Stronger industries can begin with the resources around us. By connecting agriculture, advanced materials, renewable fuels and responsible manufacturing, we aim to contribute to cleaner environments, stronger domestic supply chains and long-term economic opportunity.</p></div>
        <a className={styles.visionLink} href="https://www.rivantagreen.com/projects">
          Explore Our Industrial Vision
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
        </a>
      </div>
      <p className={styles.developmentNote}>Our initiatives remain subject to technical feasibility, engineering, commercial assessment and applicable regulatory approvals.</p>
      <nav className={styles.contextSources} aria-label="Sources For National Context">
        <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2198748&amp;lang=2&amp;reg=3">Air Quality Context</a>
        <a href="https://wits.worldbank.org/trade/comtrade/en/country/IND/year/2025/tradeflow/Imports/partner/ALL/product/280469">Silicon Imports · 2025</a>
        <a href="https://www.pib.gov.in/FactsheetDetails.aspx?ModuleId=16&amp;NoteId=150991&amp;id=150991&amp;lang=1&amp;reg=42">India’s Economic Context</a>
      </nav>
    </section>
  );
}
