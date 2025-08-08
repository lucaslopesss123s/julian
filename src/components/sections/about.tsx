import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="grid grid-cols-2">
               <Image
                src="https://placehold.co/400x500"
                alt="Influencer in uniform"
                width={400}
                height={500}
                data-ai-hint="policeman uniform"
                className="object-cover w-full h-full"
              />
               <Image
                src="https://placehold.co/400x500"
                alt="Influencer in casual clothes"
                width={400}
                height={500}
                data-ai-hint="policeman casual"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Quem sou eu?</h2>
              <p className="text-muted-foreground text-lg">
                Sou policial, criador de conteúdo e atleta. Minha missão é ajudar pessoas a conciliarem saúde, uma profissão desafiadora e a vida pessoal, provando que com disciplina, tudo é possível.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
