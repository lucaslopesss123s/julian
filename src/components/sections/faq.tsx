import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const faqItems = [
    {
        question: "Como funciona o acesso ao Close Friends?",
        answer: "O acesso é vitalício e imediato após a confirmação do pagamento. Você receberá um link por e-mail para entrar no grupo exclusivo."
    },
    {
        question: "Por quanto tempo terei acesso?",
        answer: "O acesso é vitalício. Você paga uma única vez e pode acessar o conteúdo para sempre, incluindo todas as atualizações futuras."
    },
    {
        question: "Os treinos servem para iniciantes?",
        answer: "Sim! Os treinos são adaptáveis para todos os níveis, do iniciante ao avançado. Eu explico como ajustar a intensidade e a carga para a sua realidade."
    },
    {
        question: "Preciso de equipamentos de academia?",
        answer: "A maioria dos treinos é pensada para ser feita em uma academia convencional. No entanto, também dou dicas de adaptações e treinos que podem ser feitos em casa com o mínimo de equipamento."
    },
    {
        question: "Como são as planilhas de dieta?",
        answer: "As planilhas são guias nutricionais flexíveis, focadas em alimentos acessíveis e práticos para o dia a dia. Elas te ensinam a montar suas refeições de acordo com seus objetivos, seja ganho de massa ou perda de gordura."
    },
    {
        question: "E se eu tiver dúvidas?",
        answer: "Você poderá tirar suas dúvidas diretamente comigo nas lives mensais exclusivas para membros ou interagir com a comunidade no nosso grupo."
    }
];


export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="text-sm py-2 px-4 rounded-full border-primary/50 text-primary mb-6">
                <HelpCircle className="w-4 h-4 mr-2" />
                Dúvidas? A gente responde.
            </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Tudo o que você precisa saber antes de se juntar à elite.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50">
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
