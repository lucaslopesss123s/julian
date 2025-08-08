"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { generateMotivationalMessage } from "@/ai/flows/motivational-message-generator";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export function AiMotivator() {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [contentDescription, setContentDescription] = useState("");
  const [motivationalMessage, setMotivationalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!photoFile || !contentDescription) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, adicione uma foto e uma descrição.",
      });
      return;
    }

    setLoading(true);
    setMotivationalMessage("");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(photoFile);
      reader.onload = async () => {
        const photoDataUri = reader.result as string;
        const result = await generateMotivationalMessage({
          photoDataUri,
          contentDescription,
        });
        setMotivationalMessage(result.motivationalMessage);
      };
      reader.onerror = (error) => {
         toast({
          variant: "destructive",
          title: "Erro ao ler o arquivo",
          description: "Não foi possível processar a imagem.",
        });
        console.error("FileReader error:", error);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro de Geração",
        description: "Falha ao gerar a mensagem motivacional.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-motivator" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">
              Gerador de Motivação com IA
            </CardTitle>
            <CardDescription>
              Enfrentou um desafio? Descreva-o, adicione uma foto e nossa IA criará uma mensagem de superação para você.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="photo-upload" className="block text-sm font-medium mb-2">Sua Foto de Desafio</label>
                  <Input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} />
                </div>
                {photoPreview && (
                  <div className="mt-4">
                    <Image src={photoPreview} alt="Preview" width={200} height={200} className="rounded-lg object-cover" />
                  </div>
                )}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">Descreva o Conteúdo</label>
                  <Textarea
                    id="description"
                    value={contentDescription}
                    onChange={(e) => setContentDescription(e.target.value)}
                    placeholder="Ex: Minha preparação para o teste de aptidão física..."
                    rows={4}
                  />
                </div>
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Gerar Mensagem
                </Button>
              </form>
              <div className="flex items-center justify-center h-full">
                {loading && (
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="text-muted-foreground">Gerando sua dose de motivação...</p>
                  </div>
                )}
                {!loading && motivationalMessage && (
                  <Card className="w-full bg-secondary">
                    <CardHeader>
                      <CardTitle>Sua Mensagem Motivacional:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg italic">&quot;{motivationalMessage}&quot;</p>
                    </CardContent>
                  </Card>
                )}
                 {!loading && !motivationalMessage && (
                  <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                    <p>Sua mensagem inspiradora aparecerá aqui.</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
