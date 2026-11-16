"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import brandLogo from "../../logo/logo-brand-lockup-light.svg";
import styles from "./site-header.module.css";

const links = [
  { label: "About Us", href: "https://www.rivantagreen.com/about" },
  { label: "Our Businesses", href: "/#silicon-description" },
  { label: "Sustainability", href: "https://www.rivantagreen.com/sustainability" },
  { label: "Projects", href: "https://www.rivantagreen.com/projects" },
  { label: "Contact Us", href: "https://www.rivantagreen.com/contact" },
] as const;

type SiteHeaderProps = {
  onExploreVentures?: (event: MouseEvent<HTMLAnchorElement>) => void;
  onMenuOpenChange?: (open: boolean) => void;
  onReturnHome?: () => void;
};

export function SiteHeader({ onExploreVentures, onMenuOpenChange, onReturnHome }: SiteHeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const toggleRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => {
    if (menuRef.current) menuRef.current.open = false;
    setMenuOpen(false);
    onMenuOpenChange?.(false);
  }, [onMenuOpenChange]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 961px)");
    const onResize = () => { if (desktop.matches) closeMenu(); };
    const onPointerDown = (event: PointerEvent) => {
      if (menuRef.current?.open && event.target instanceof Node && !headerRef.current?.contains(event.target)) closeMenu();
    };
    desktop.addEventListener("change", onResize);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      desktop.removeEventListener("change", onResize);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [closeMenu]);

  const renderLinks = () => links.map(link => (
    <Link key={link.href} href={link.href} className={link.label === "Contact Us" ? styles.contact : undefined} onClick={event => {
      closeMenu();
      if (link.label === "Our Businesses") onExploreVentures?.(event);
    }}>{link.label}</Link>
  ));

  return (
    <header ref={headerRef} className={styles.header} onBlur={event => {
      if (menuRef.current?.open && !event.currentTarget.contains(event.relatedTarget)) closeMenu();
    }} onKeyDown={event => {
      if (event.key === "Escape" && menuRef.current?.open) {
        event.preventDefault();
        event.stopPropagation();
        closeMenu();
        toggleRef.current?.focus();
      }
    }}>
      <Link href="/" className={styles.brand} aria-label="Rivanta Green home" onClick={event => {
        closeMenu();
        if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) onReturnHome?.();
      }}>
        <Image src={brandLogo} alt="Rivanta Green" width={2160} height={520} unoptimized loading="eager" />
      </Link>
      <nav className={styles.desktopNav} aria-label="Main navigation">{renderLinks()}</nav>
      <details ref={menuRef} className={styles.mobileMenu} onToggle={event => {
        const open = event.currentTarget.open;
        setMenuOpen(open);
        onMenuOpenChange?.(open);
      }}>
        <summary ref={toggleRef} className={styles.menuToggle} role="button" aria-label="Menu" aria-expanded={menuOpen} aria-controls="mobile-navigation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 17h16"} />
          </svg>
        </summary>
        <nav id="mobile-navigation" className={styles.mobileNav} aria-label="Main navigation">{renderLinks()}</nav>
      </details>
      <noscript><nav className={styles.noScriptNav} aria-label="Main navigation">{renderLinks()}</nav></noscript>
    </header>
  );
}
