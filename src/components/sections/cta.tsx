import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Lock } from "lucide-react";

const benefits = [
  "Conteúdo novo toda semana",
  "Acesso imediato e vitalício",
  "Acesso ao grupo exclusivo",
  "Dicas práticas e diretas",
  "Lives mensais para tirar dúvidas",
  "Planilhas de treino e dieta"
];

export function Cta() {
  return (
    <section id="checkout" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          <Card className="relative bg-card border border-primary/20 p-6 md:p-10 rounded-xl shadow-2xl shadow-primary/10 rotating-border z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-left">
                <CardTitle className="text-3xl md:text-4xl font-bold mb-2">Acesso Vitalício por apenas 12x de <span className="text-primary">R$5,79</span></CardTitle>
                <CardDescription className="text-muted-foreground mb-6">Ou R$57,90 à vista. Um único pagamento para transformar sua rotina para sempre.</CardDescription>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full flex flex-col items-center justify-center text-center bg-background p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Garanta sua vaga agora!</h3>
                  <p className="text-muted-foreground mb-6">Clique no botão abaixo para ter acesso imediato ao conteúdo exclusivo do Close Friends.</p>
                  <Button size="lg" className="w-full text-lg font-bold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                      <Lock className="mr-2"/>
                      QUERO ACESSO IMEDIATO
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                      <Lock className="h-3 w-3" /> Pagamento 100% seguro.
                  </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
