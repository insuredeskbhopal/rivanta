"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import campus from "../../../image/hero-facility.png";
import cbg from "../../../image/Golden-Hour Mountain Industrial Complex.png";
import saf from "../../../image/Golden-Hour Sustainable Fuels Plant.png";
import energy from "../../../image/Golden-Hour Renewable Energy Campus.png";
import silicon from "../../../image/Golden-Hour Silicon Plant Panorama.png";
import { plantLabels, plantOrder } from "./registration";
import { CBG_STOP, ENERGY_STOP, journeyCamera, SAF_STOP, SILICON_STOP } from "./camera";
import { createGestureJourney } from "./gesture-journey";
import { SiteHeader } from "../site-header";
import styles from "./transition-proof.module.css";

export function TransitionProof({ children }: { children?: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);
  const jumpRef = useRef<(progress: number) => void>(() => undefined);
  const homeRef = useRef<() => void>(() => undefined);
  const returnHome = () => {
    homeRef.current();
    rootRef.current?.querySelector<HTMLElement>("[data-stage]")?.scrollIntoView({ block: "start", behavior: "instant" });
  };
  const onMenuOpenChange = useCallback((open: boolean) => {
    if (rootRef.current) rootRef.current.dataset.menuOpen = String(open);
  }, []);
  const exploreVentures = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (rootRef.current?.dataset.motion === "ready") {
      event.preventDefault();
      rootRef.current.querySelector<HTMLElement>("[data-stage]")?.focus({ preventScroll: true });
      jumpRef.current(SILICON_STOP);
    }
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let disposed = false;
    let cleanup = () => {};
    const stage = root.querySelector<HTMLElement>("[data-stage]")!;
    const master = root.querySelector<HTMLElement>("[data-master]")!;
    const layers = plantOrder.map(id => ({ id, image: root.querySelector<HTMLElement>(`[data-plant="${id}"]`)!, copy: root.querySelector<HTMLElement>(`[data-plant-copy="${id}"]`)! }));
    const intro = root.querySelector<HTMLElement>("[data-intro]")!;
    const concept = root.querySelector<HTMLElement>("[data-concept]")!;
    const progress = root.querySelector<HTMLElement>("[data-progress]")!;
    const phase = root.querySelector<HTMLElement>("[data-phase]")!;
    const error = root.querySelector<HTMLElement>("[data-error]")!;
    const skip = root.querySelector<HTMLButtonElement>("[data-skip-motion]")!;

    const initialize = async () => {
      try {
        const images = Array.from(stage.querySelectorAll("img"));
        await Promise.all(images.map((image) => image.decode()));
        if (disposed) return;
        const { gsap } = await import("gsap");
        if (disposed) return;
        const media = gsap.matchMedia();
        cleanup = () => media.revert();
        root.dataset.tools = "ready";
        const staticNavigate = (position: number) => document.getElementById(position === ENERGY_STOP ? "energy-description" : position === SAF_STOP ? "saf-description" : position === CBG_STOP ? "cbg-description" : "silicon-description")?.scrollIntoView();
        jumpRef.current = staticNavigate;

        media.add("(prefers-reduced-motion: no-preference)", () => {
          root.dataset.motion = "ready";
          let width = stage.clientWidth, height = stage.clientHeight;
          let lastPhase = "";
          const render = (p: number, direction = 1) => {
            const frame = journeyCamera(width, height, p);
            master.style.transform = `translate3d(${frame.x}px, ${frame.y}px, 0) scale(${frame.scale})`;
            for (const layer of layers) {
              const plate = frame.plates[layer.id];
              layer.image.style.transform = `translate3d(${plate.x}px, ${plate.y}px, 0) scale(${plate.scale})`;
              layer.image.style.opacity = String(plate.opacity);
              layer.copy.style.opacity = String(plate.copy);
            }
            // Keep the base opaque throughout the moving dissolve to avoid a dark dip.
            master.style.opacity = "1";
            root.dataset.shot = frame.shot;
            intro.style.opacity = String(Math.min(1, frame.intro));
            intro.style.pointerEvents = frame.intro > .5 ? "auto" : "none";
            intro.inert = frame.intro <= .5;
            if (intro.inert && intro.contains(document.activeElement)) stage.focus({ preventScroll: true });
            progress.style.transform = `scaleX(${p / ENERGY_STOP})`;
            const next = plantOrder[Math.round(p)];
            const label = Math.abs(p - Math.round(p)) > .001 || direction < 0 ? "" :
              p < .001 ? "Scroll to explore" : next ? `Scroll for ${plantLabels[next]}` : "Scroll to continue";
            if (label !== lastPhase) { phase.textContent = label; lastPhase = label; }
            const conceptLabel = frame.concept;
            if (concept.textContent !== conceptLabel) concept.textContent = conceptLabel;
            root.dataset.progress = p.toFixed(4);
          };
          const journey = createGestureJourney({ gsap, root, stage, render, skip });
          const resize = new ResizeObserver(() => {
            width = stage.clientWidth;
            height = stage.clientHeight;
            journey.render();
          });
          resize.observe(stage);
          jumpRef.current = journey.navigate;
          homeRef.current = journey.home;
          return () => {
            journey.dispose();
            resize.disconnect();
            delete root.dataset.motion;
            delete root.dataset.progress;
            delete root.dataset.shot;
            phase.textContent = "";
            progress.style.transform = "scaleX(0)";
            master.style.transform = "";
            master.style.opacity = "";
            for (const layer of layers) {
              layer.image.style.transform = "";
              layer.image.style.opacity = "";
              layer.copy.style.opacity = "";
            }
            intro.style.opacity = "";
            intro.style.pointerEvents = "";
            intro.inert = false;
            concept.textContent = "Proposed campus · Concept visualization";
            jumpRef.current = staticNavigate;
            homeRef.current = () => undefined;
          };
        });
      } catch {
        if (!disposed) {
          error.hidden = false;
          phase.textContent = "";
        }
      }
    };
    void initialize();
    return () => { disposed = true; cleanup(); jumpRef.current = () => undefined; homeRef.current = () => undefined; };
  }, []);

  return (
    <main ref={rootRef} className={styles.proof}>
      <a className={styles.skip} href="#company-overview">Skip to company overview</a>
      <SiteHeader onExploreVentures={exploreVentures} onMenuOpenChange={onMenuOpenChange} onReturnHome={returnHome} />

      <section id="campus-study" className={styles.stage} data-stage tabIndex={-1} aria-label="Rivanta Green proposed industrial campus and ventures">
        <div className={`${styles.plate} ${styles.master}`} data-master>
          <Image src={campus} alt="Concept visualization of Rivanta Green's proposed industrial campus, with facilities, solar panels and wind turbines" sizes="1692px" quality={90} loading="eager" fetchPriority="high" />
          <span className={styles.fallbackLabel}>Proposed campus · Concept visualization</span>
        </div>
        <div className={`${styles.plate} ${styles.silicon}`} data-silicon data-plant="silicon">
          <Image src={silicon} alt="Concept visualization of a proposed silicon facility at golden hour" sizes="1672px" quality={90} loading="eager" />
          <span className={styles.fallbackLabel}>Proposed Silicon · Concept visualization</span>
        </div>
        <div className={`${styles.plate} ${styles.detail}`} data-detail data-plant="cbg">
          <Image src={cbg} alt="Concept visualization of a proposed compressed biogas facility at golden hour" sizes="1774px" quality={90} loading="eager" />
          <span className={styles.fallbackLabel}>Proposed CBG · Concept visualization</span>
        </div>
        <div className={`${styles.plate} ${styles.saf}`} data-saf data-plant="saf">
          <Image src={saf} alt="Concept visualization of a proposed sustainable aviation fuel facility at golden hour" sizes="1672px" quality={90} loading="eager" />
          <span className={styles.fallbackLabel}>Proposed SAF · Concept visualization</span>
        </div>
        <div className={`${styles.plate} ${styles.energy}`} data-energy data-plant="energy">
          <Image src={energy} alt="Concept visualization of proposed renewable energy infrastructure with solar panels and wind turbines" sizes="1672px" quality={90} loading="eager" />
          <span className={styles.fallbackLabel}>Proposed Renewable Power · Concept visualization</span>
        </div>
        <div className={styles.shade} aria-hidden="true" />
        <div className={styles.intro} data-intro>
          <h1>Building industrial value.<br />From India’s resources.</h1>
          <p>Developing integrated industrial initiatives across advanced materials, renewable fuels and circular manufacturing in India.</p>
          <a href="#silicon-description" onClick={exploreVentures}>Explore our ventures <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.copy} data-silicon-copy data-plant-copy="silicon">
          <h2>Bio-silica & silicon.</h2>
          <p>Developing biogenic silica from rice husk for rubber, concrete and industrial applications. We are evaluating green silicon pathways to support India’s materials supply chains.</p>
        </div>
        <div className={styles.copy} data-copy data-plant-copy="cbg">
          <h2>Compressed biogas.</h2>
          <p>Developing compressed biogas from agricultural residues for transport, industry and city gas networks. Planned digestate recovery adds a circular route for returning nutrients to farmland.</p>
        </div>
        <div className={styles.copy} data-saf-copy data-plant-copy="saf">
          <h2>Sustainable aviation fuel.</h2>
          <p>Evaluating aviation fuel pathways from non-food biomass. Feasibility studies, feedstock planning and potential technology collaboration guide this future development area.</p>
        </div>
        <div className={styles.copy} data-energy-copy data-plant-copy="energy">
          <h2>Renewable power.</h2>
          <p>Planning solar and wind power to support future industrial energy needs. Our wider development approach also considers process efficiency and waste-heat recovery.</p>
        </div>
        <div className={styles.status}>
          <span className={styles.concept} data-concept>Proposed campus · Concept visualization</span>
          <div className={styles.motionControls}>
            <span className={styles.phase} data-phase />
            <button type="button" className={styles.skipMotion} data-skip-motion hidden>Skip animation</button>
          </div>
        </div>
        <div className={styles.track} aria-hidden="true"><span data-progress /></div>
      </section>

      <p data-error hidden role="status" className={styles.error}>You can explore our proposed ventures below.</p>

      <section id="silicon-description" className={styles.staticDescription}>
        <h2>Proposed bio-silica and silicon</h2>
        <p>Developing biogenic silica from rice husk for rubber, concrete and industrial applications. We are evaluating green silicon pathways to support India’s materials supply chains.</p>
        <noscript><p><a href={silicon.src}>View the proposed Silicon concept.</a></p></noscript>
      </section>
      <section id="cbg-description" className={styles.staticDescription}>
        <h2>Proposed compressed biogas</h2>
        <p>Developing compressed biogas from agricultural residues for transport, industry and city gas networks. Planned digestate recovery adds a circular route for returning nutrients to farmland.</p>
        <noscript><p><a href={cbg.src}>View the proposed CBG concept.</a></p></noscript>
      </section>
      <section id="saf-description" className={styles.staticDescription}>
        <h2>Proposed sustainable aviation fuel</h2>
        <p>Evaluating aviation fuel pathways from non-food biomass. Feasibility studies, feedstock planning and potential technology collaboration guide this future development area.</p>
        <noscript><p><a href={saf.src}>View the proposed SAF concept.</a></p></noscript>
      </section>

      <section id="energy-description" className={styles.staticDescription}>
        <h2>Proposed renewable power</h2>
        <p>Planning solar and wind power to support future industrial energy needs. Our wider development approach also considers process efficiency and waste-heat recovery.</p>
        <noscript><p><a href={energy.src}>View the proposed Power concept.</a></p></noscript>
      </section>

      {children}

      <footer id="company-information" tabIndex={-1} className={styles.footer}>
        <p>Rivanta Green Innovative Venture Private Limited</p>
        <nav aria-label="Company information">
          <a href="https://www.rivantagreen.com/about">About Rivanta</a>
          <a href="https://www.rivantagreen.com/contact">Contact us</a>
        </nav>
      </footer>
    </main>
  );
}
