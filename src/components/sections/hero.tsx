import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-background text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-red-500/10 bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-4">
          O segredo da alta performance: <br /> <span className="text-primary">Policial e Atleta.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Acesso exclusivo aos bastidores da minha rotina, unindo a disciplina da polícia com a dedicação do esporte.
        </p>
        <Button asChild size="lg" className="text-lg font-bold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_hsl(var(--primary))]">
          <Link href="#checkout">
            QUERO ACESSO IMEDIATO
          </Link>
        </Button>
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://placehold.co/1280x720.png"
              data-ai-hint="video thumbnail"
            >
              {/* Adicione a fonte do seu vídeo aqui */}
              {/* <source src="/seu-video.mp4" type="video/mp4" /> */}
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
