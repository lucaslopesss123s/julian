import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
             <Image
              src="https://placehold.co/500x600"
              alt="Influencer in police uniform with a gym bag"
              layout="fill"
              className="object-cover"
              data-ai-hint="policeman fitness"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
          </div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quem é <span className="text-primary">Julian Leite?</span></h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Sou policial, criador de conteúdo e atleta. Minha missão é ajudar pessoas a conciliarem saúde, uma profissão desafiadora e a vida pessoal, provando que com disciplina, tudo é possível.
              </p>
              <p>
                No meu Close Friends, eu mostro na prática como aplico essa filosofia no meu dia a dia, com todos os perrengues e vitórias. É o acesso sem filtros à rotina de quem vive a alta performance 24/7.
              </p>
            </div>
             <Button asChild size="lg" className="mt-8 text-lg font-bold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              <Link href="#checkout">
                FAZER PARTE DO GRUPO
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
