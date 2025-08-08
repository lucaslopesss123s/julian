import { Hero } from "@/components/sections/hero";
import { Offer } from "@/components/sections/offer";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/footer";
import { AiMotivator } from "@/components/sections/ai-motivator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Offer />
        <Testimonials />
        <AiMotivator />
        <About />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
