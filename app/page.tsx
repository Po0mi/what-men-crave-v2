import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import TheStory from "@/components/TheStory/TheStory";
import AuthorBio from "@/components/AuthorBio/AuthorBio";
import TheCravings from "@/components/TheCravings/TheCravings";
import VisionOfAfter from "@/components/VisionOfAfter/VisionOfAfter";
import ValueStack from "@/components/ValueStack/ValueStack";
import Testimonials from "@/components/Testimonials/Testimonials";
import ClosingCta from "@/components/ClosingCta/ClosingCta";
import FAQ from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <TheStory />
      <AuthorBio />
      <TheCravings />
      <VisionOfAfter />
      <ValueStack />
      <Testimonials />
      <ClosingCta />
      <FAQ />
    </>
  );
}
