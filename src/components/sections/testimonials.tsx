import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Carlos Silva",
    avatar: "https://placehold.co/100x100",
    aiHint: "person portrait",
    text: "Consegui organizar minha rotina de treinos e trabalho de uma forma que nunca imaginei ser possível, mesmo com um trabalho puxado. As dicas são ouro!",
  },
  {
    name: "Juliana Pereira",
    avatar: "https://placehold.co/100x100",
    aiHint: "person portrait",
    text: "A dieta proposta é surpreendentemente simples e muito fácil de seguir no dia a dia. Já sinto uma grande diferença na minha energia e disposição.",
  },
  {
    name: "Marcos Andrade",
    avatar: "https://placehold.co/100x100",
    aiHint: "person portrait",
    text: "As dicas de criação de conteúdo me ajudaram a perder a vergonha e a crescer meu perfil no Instagram. A autenticidade é o segredo!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">O que os membros estão dizendo</h2>
          <p className="text-muted-foreground mt-2">Resultados reais de pessoas como você.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full bg-card">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.aiHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="text-muted-foreground italic mb-4">&quot;{testimonial.text}&quot;</p>
                      <p className="font-bold font-headline text-primary">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
