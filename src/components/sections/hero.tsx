import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative text-white">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <Badge variant="destructive" className="mb-4">
              Conteúdo 100% exclusivo no Close Friends
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 max-w-xl">
              Descubra como eu mantenho minha performance no trabalho e no treino!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Acesso exclusivo aos bastidores da minha rotina como policial e atleta.
            </p>
            <Button asChild size="lg" className="text-lg font-bold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Link href="#checkout">
                Garantir Acesso — R$57,90
              </Link>
            </Button>
          </div>
          <div className="relative h-96 w-full flex items-center justify-center">
             <Image
              src="https://placehold.co/500x600"
              alt="Influencer in police uniform with a gym bag"
              width={500}
              height={600}
              className="z-10 object-cover"
              data-ai-hint="policeman fitness"
              priority
            />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
