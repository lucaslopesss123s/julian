import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-background text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-red-500/10 bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]">
        {/* Desktop background */}
        <div className="hidden md:block absolute inset-0 bg-[url('/julianpc.png')] bg-cover bg-center bg-no-repeat opacity-80"></div>
        {/* Mobile background */}
        <div className="block md:hidden absolute inset-0 bg-[url('/julianmobile.png')] bg-cover bg-center bg-no-repeat opacity-80"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-4">
          O segredo da alta performance: <br /> <span className="text-primary">Policial e Atleta.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Acesso exclusivo aos bastidores da minha rotina, unindo a disciplina da polícia com a dedicação do esporte.
        </p>
        <Button asChild size="lg" className="text-lg font-bold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_hsl(var(--primary))] mt-[150px]">
          <Link href="#checkout">
            QUERO ACESSO IMEDIATO
          </Link>
        </Button>
      </div>
    </section>
  );
}