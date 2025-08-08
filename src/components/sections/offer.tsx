import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const offerItems = [
  {
    title: "Módulo Treinamento",
    points: ["Treinos para hipertrofia", "Cardio para resistência", "Prevenção de lesões"],
  },
  {
    title: "Módulo Nutrição",
    points: ["Dieta para ganho de massa", "Suplementação essencial", "Refeições pré e pós-treino"],
  },
  {
    title: "Módulo Mentalidade",
    points: ["Disciplina e Foco", "Conciliando turnos e treinos", "Resiliência e superação"],
  },
];

export function Offer() {
  return (
    <section id="offer" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative text-center mb-12 p-4">
          <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-primary rounded-tl-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-8 border-r-8 border-primary rounded-br-3xl opacity-50"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">O que você terá acesso no <span className="text-primary">Close Friends?</span></h2>
          <p className="text-muted-foreground mt-2 max-w-3xl mx-auto text-lg">Um guia completo para você atingir a sua melhor versão, com acesso a todos os segredos que eu uso no meu dia a dia.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerItems.map((item, index) => (
            <Card key={index} className="flex flex-col text-left p-6 bg-card border border-border/50 rounded-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3 text-muted-foreground">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3" />
                      <span>{point}</span>
                    </li>
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