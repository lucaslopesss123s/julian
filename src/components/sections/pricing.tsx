import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const benefits = [
  "Conteúdo novo toda semana",
  "Acesso imediato e vitalício",
  "Acesso ao grupo exclusivo",
  "Dicas práticas e diretas",
  "Lives mensais para tirar dúvidas",
  "Planilhas de treino e dieta"
];

export function Pricing() {
  return (
    <section id="checkout" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-card border border-border/50 p-6 md:p-10 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Acesso Vitalício por apenas 12x de <span className="text-primary">R$5,79</span></h2>
              <p className="text-muted-foreground mb-6">Ou R$57,90 à vista. Um único pagamento para transformar sua rotina para sempre.</p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full">
                <Card className="bg-background border-border/80 rounded-lg">
                    <CardHeader>
                        <CardTitle>Complete seu Pagamento</CardTitle>
                        <CardDescription>Insira seus dados para garantir o acesso.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input id="name" type="text" placeholder="Seu nome completo" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="seu.melhor@email.com" />
                            </div>
                             <div>
                                <Label htmlFor="card-number">Número do Cartão</Label>
                                <Input id="card-number" type="text" placeholder="**** **** **** ****" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="expiry">Validade</Label>
                                    <Input id="expiry" type="text" placeholder="MM/AA" />
                                </div>
                                <div>
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" type="text" placeholder="123" />
                                </div>
                            </div>
                            <Button size="lg" className="w-full text-lg font-bold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                                <Lock className="mr-2"/>
                                QUERO ACESSO AGORA
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                 <p className="text-xs text-muted-foreground mt-4 text-center flex items-center justify-center gap-2">
                    <Lock className="h-3 w-3" /> Pagamento 100% seguro.
                </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
