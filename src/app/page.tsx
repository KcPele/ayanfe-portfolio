import { About } from "@/components/sections/About";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { ContactCta } from "@/components/sections/ContactCta";
import { FeaturedTalks } from "@/components/sections/FeaturedTalks";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Practice } from "@/components/sections/Practice";
import { Stats } from "@/components/sections/Stats";
import { Writing } from "@/components/sections/Writing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Practice />
      <FeaturedTalks />
      <Gallery />
      <BlogTeaser />
      <Writing />
      <ContactCta />
    </>
  );
}
