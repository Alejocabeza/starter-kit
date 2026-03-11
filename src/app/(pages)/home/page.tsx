import { Hero } from "@/app/features/home/section/Hero.section";
import { SocialProof } from "@/app/features/home/section/SocialProof.section";
import { Process } from "@/app/features/home/section/Process.section";
import { FeatureGrid } from "@/app/features/home/section/FeatureGrid.section";
import { Pricing } from "@/app/features/home/section/Pricing.section";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Process />
      <FeatureGrid />
    </>
  );
}
