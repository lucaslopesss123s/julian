import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const benefits = [
  "Conteúdo novo toda semana",
  "Acesso imediato e vitalício",
  "Conteúdo 100% exclusivo",
  "Dicas práticas e diretas",
];

export function Pricing() {
  return (
    <section id="checkout" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-background p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-2">Apenas R$57,90 para acesso vitalício</h2>
              <p className="text-muted-foreground mb-6">Um único pagamento para transformar sua rotina para sempre.</p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full md:w-auto text-lg font-bold bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg">
                Quero meu acesso agora
              </Button>
            </div>
            
            <div className="w-full">
                <Card>
                    <CardHeader>
                        <CardTitle>Complete seu Pagamento</CardTitle>
                        <CardDescription>Insira seus dados para garantir o acesso.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input id="name" type="text" placeholder="Seu nome" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="seu@email.com" />
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
                        </form>
                    </CardContent>
                </Card>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
