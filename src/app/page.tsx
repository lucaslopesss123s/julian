import { Hero } from "@/components/sections/hero";
import { Offer } from "@/components/sections/offer";
import { WhatIsIt } from "@/components/sections/what-is-it";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/footer";
import { ForWhom } from "@/components/sections/for-whom";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Offer />
        <WhatIsIt />
        <Testimonials />
        <ForWhom />
        <About />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
