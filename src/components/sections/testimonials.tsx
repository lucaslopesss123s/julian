import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    title: "Transformação Real",
    avatar: "https://placehold.co/100x100",
    aiHint: "man portrait",
    text: "Consegui organizar minha rotina de treinos e trabalho de uma forma que nunca imaginei ser possível, mesmo com um trabalho puxado. As dicas são ouro!",
  },
  {
    name: "Juliana Pereira",
    title: "Energia Renovada",
    avatar: "https://placehold.co/100x100",
    aiHint: "woman portrait",
    text: "A dieta proposta é surpreendentemente simples e muito fácil de seguir no dia a dia. Já sinto uma grande diferença na minha energia e disposição.",
  },
  {
    name: "Marcos Andrade",
    title: "Comecei do Zero",
    avatar: "https://placehold.co/100x100",
    aiHint: "person portrait",
    text: "As dicas de criação de conteúdo me ajudaram a perder a vergonha e a crescer meu perfil no Instagram. A autenticidade é o segredo!",
  },
  {
    name: "Ana Costa",
    title: "Foco e Disciplina",
    avatar: "https://placehold.co/100x100",
    aiHint: "woman smiling",
    text: "O módulo de mentalidade foi um divisor de águas. Aprendi a ter mais disciplina e foco não só nos treinos, mas na vida.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">O que os membros <span className="text-primary">estão dizendo</span></h2>
          <p className="text-muted-foreground mt-2 text-lg">Resultados reais de pessoas que transformaram suas vidas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border border-border/50 rounded-xl p-6">
                <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle className="text-xl font-bold">{testimonial.name}</CardTitle>
                    <div className="flex text-primary">
                        <Star className="w-5 h-5 fill-primary" />
                        <Star className="w-5 h-5 fill-primary" />
                        <Star className="w-5 h-5 fill-primary" />
                        <Star className="w-5 h-5 fill-primary" />
                        <Star className="w-5 h-5 fill-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-lg italic">&quot;{testimonial.text}&quot;</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
