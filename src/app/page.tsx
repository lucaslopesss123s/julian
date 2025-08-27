import { Hero } from "@/components/sections/hero";
import { Offer } from "@/components/sections/offer";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/footer";
import { ForWhom, ForWhomCta } from "@/components/sections/for-whom";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Offer />
        <Testimonials />
        <ForWhom />
        <ForWhomCta />
        <About />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
