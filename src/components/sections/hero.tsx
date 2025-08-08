import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080"
        alt="Influencer in police uniform with a gym bag"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="policeman fitness"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10" />
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
        <Badge variant="secondary" className="mb-4 bg-white/10 text-white backdrop-blur-sm">
          Conteúdo 100% exclusivo no Close Friends
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 max-w-4xl text-shadow-lg">
          Descubra como eu mantenho minha performance no trabalho e no treino!
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Acesso exclusivo aos bastidores da minha rotina como policial e atleta.
        </p>
        <Button asChild size="lg" className="text-lg font-bold bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg">
          <Link href="#checkout">
            Garantir Acesso — R$57,90
          </Link>
        </Button>
      </div>
    </section>
  );
}
