import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WhatIsIt() {
  return (
    <section id="what-is-it" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          O que é o <span className="text-primary">Close Friends</span> do Julian Leite?
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground text-left md:text-center">
            <p className="md:text-xl">
                Maximize os resultados dos seus treinos com as técnicas e a rotina validadas por um policial e atleta de alta performance.
            </p>
            <p>
                Através de vídeos exclusivos, você terá acesso a orientações e estratégias que eu, Julian Leite, uso no meu dia a dia. São fichas de treino, planos alimentares e dicas de mentalidade que me permitem conciliar uma rotina pesada com resultados de ponta.
            </p>
            <p>
                Você não apenas assiste à minha rotina, mas recebe um plano de ação para aplicar os mesmos princípios na sua vida, adaptando para os seus objetivos e alcançando o corpo que você deseja. Aprenda sobre nutrição, suplementação e aproveite os treinos atualizados para evoluir na forma que você treina, se alimenta e vive.
            </p>
        </div>
        <Button asChild size="lg" className="mt-10 text-lg font-bold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
          <Link href="#checkout">
            QUERO TREINAR COM O JULIAN
          </Link>
        </Button>
      </div>
    </section>
  );
}
