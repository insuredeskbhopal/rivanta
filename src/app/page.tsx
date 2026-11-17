import type { Metadata } from "next";
import { TransitionProof } from "@/components/cbg-proof/transition-proof";
import { CompanyOverview } from "@/components/company-overview";
import { IndiaChallenges } from "@/components/india-challenges";
import { OurBusinesses } from "@/components/our-businesses";

export const metadata: Metadata = {
  title: "Rivanta Green | Sustainable Industrial Innovation",
  description: "Rivanta Green is developing industrial initiatives across advanced materials, renewable fuels and circular manufacturing in India. Facility visuals are conceptual.",
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return <TransitionProof><CompanyOverview /><IndiaChallenges /><OurBusinesses /></TransitionProof>;
}
