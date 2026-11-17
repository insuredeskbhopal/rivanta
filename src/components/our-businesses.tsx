import Image from "next/image";
import silica from "../../image/businesses/biogenic-silica.webp";
import cbg from "../../image/businesses/industrial-cbg.webp";
import aviation from "../../image/businesses/aviation-fuel.webp";
import energy from "../../image/businesses/renewable-energy.webp";
import styles from "./our-businesses.module.css";

const businesses = [
  {
    title: "Silicon & Advanced Materials",
    description: "Developing rice-husk-derived biogenic silica for industrial applications, while evaluating silicon pathways that can support India’s materials supply chains.",
    image: silica,
    alt: "AI-generated illustration of fine white biogenic silica powder in a sampling tray beside rice husks; not a Rivanta product sample or evidence of a proven process",
    href: "https://www.rivantagreen.com/bio-silica",
    link: "Explore Advanced Materials",
  },
  {
    title: "Compressed Biogas",
    description: "Developing CBG from agricultural residues for transport, industry and gas networks, with digestate recovery considered as part of a circular resource approach.",
    image: cbg,
    alt: "AI-generated illustration of a CBG plant within an industrial compound, with digestion tanks and gas-upgrading equipment; not an operating Rivanta facility or approved engineering layout",
    href: "https://www.rivantagreen.com/cbg",
    link: "Explore CBG",
  },
  {
    title: "Sustainable Aviation Fuel",
    description: "Evaluating aviation fuel pathways from non-food biomass, with feedstock planning, technical feasibility and potential technology collaboration guiding this area of development.",
    image: aviation,
    alt: "AI-generated illustration of an unbranded passenger aircraft on an airport apron; not evidence of an airline relationship or use of Rivanta fuel",
    href: "https://www.rivantagreen.com/saf",
    link: "Explore Aviation Fuel",
  },
  {
    title: "Renewable Energy",
    description: "Exploring solar, wind and biomass power alongside process efficiency and energy recovery, to support the energy needs of future industrial development.",
    image: energy,
    alt: "AI-generated illustration of solar panels and distant wind turbines in an Indian landscape; not Rivanta assets or an approved project site",
    href: "https://www.rivantagreen.com/sustainability",
    link: "Explore Our Energy Approach",
  },
];

export function OurBusinesses() {
  return (
    <section id="our-businesses" className={styles.section} aria-labelledby="our-businesses-heading">
      <div className={styles.introduction}>
        <h2 id="our-businesses-heading">Our Businesses.</h2>
        <div className={styles.introCopy}>
          <p className={styles.statement}>Materials. Fuels. Power.</p>
          <p className={styles.description}>Four connected areas of development, shaped around agricultural resources, domestic manufacturing and a more diverse energy future.</p>
        </div>
      </div>

      <div className={styles.businessGrid}>
        {businesses.map(business => (
          <article key={business.href} className={styles.business}>
            <div className={styles.media}>
              <Image src={business.image} alt={business.alt} sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 850px) 86vw, 43vw" quality={90} placeholder="blur" />
            </div>
            <div className={styles.businessContent}>
              <h3>{business.title}</h3>
              <p className={styles.businessCopy}>{business.description}</p>
              <a href={business.href} className={styles.businessLink}>
                <span className={styles.linkLabel}>{business.link}</span>
                <span className={styles.linkIcon}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg></span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.developmentNote}>Development is guided by technical feasibility, engineering and applicable regulatory approvals.</p>
    </section>
  );
}
