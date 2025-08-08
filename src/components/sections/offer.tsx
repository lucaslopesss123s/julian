import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HeartPulse, Siren, Video } from "lucide-react";

const offerItems = [
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: "Minha Preparação",
    points: ["Treino cardio", "Dieta, refeições e suplementação"],
  },
  {
    icon: <Siren className="h-10 w-10 text-primary" />,
    title: "Minha Rotina",
    points: ["Trabalho na polícia", "Como concilio turno noturno e dieta", "Dicas sobre rotina policial e concursos"],
  },
  {
    icon: <Video className="h-10 w-10 text-primary" />,
    title: "Criação de Conteúdo",
    points: ["Como cresci na internet", "Como começar a postar e horários", "Bastidores das gravações"],
  },
];

export function Offer() {
  return (
    <section id="offer" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">O que você vai encontrar no Close Friends?</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Um olhar exclusivo sobre os pilares que sustentam minha performance e crescimento.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {offerItems.map((item, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-background hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-4">
                {item.icon}
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold font-headline mb-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 text-muted-foreground">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
