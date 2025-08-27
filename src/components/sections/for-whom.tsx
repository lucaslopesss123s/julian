import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const questions = [
    { text: "Você está começando e quer resultados notáveis?" },
    { text: "Já treina há algum tempo, mas não vê progresso?" },
    { text: "Quer melhorar sua alimentação e hábitos diários?" },
    { text: "Busca motivação e um plano estruturado?" },
    { text: "Quer descobrir como é a rotina de alguém que tem resultados notáveis há tanto tempo?" },
    { text: "Quer aprender as estratégias e técnicas que realmente funcionam?" },
]

export function ForWhom() {
    return (
        <section id="for-whom" className="py-16 md:py-24 bg-background text-white">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <Badge variant="outline" className="text-sm py-2 px-4 rounded-full border-primary/50 text-primary mb-6">
                    <User className="w-4 h-4 mr-2" />
                    Para quem é?
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto mb-12">O Close Friends é para você se você tiver qualquer uma das dúvidas a seguir:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                    {questions.map((q, i) => (
                        <div key={i} className="flex items-center gap-4 text-left p-4 rounded-lg bg-card">
                            <div className="flex-shrink-0 bg-primary/20 text-primary font-bold text-2xl rounded-md h-12 w-12 flex items-center justify-center">
                                {i + 1}
                            </div>
                            <p className="text-lg text-muted-foreground">{q.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ForWhomCta() {
    return (
        <section className="py-8 md:py-12 bg-background text-white">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <Button size="lg" className="text-lg font-bold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_hsl(var(--primary))]">
                    QUERO ACESSO IMEDIATO
                </Button>
            </div>
        </section>
    )
}
