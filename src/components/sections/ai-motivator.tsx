"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
        <Card className="bg-card border border-border/50 rounded-xl p-6 md:p-10">
          <CardHeader className="text-center p-0 mb-8">
            <CardTitle className="text-3xl md:text-5xl font-bold">
              Motivação <span className="text-primary">Instantânea</span> com IA
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
              Enfrentou um desafio? Descreva-o, adicione uma foto e nossa IA criará uma mensagem de superação para você.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="photo-upload" className="text-base">Sua Foto de Desafio</Label>
                  <Input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} className="bg-background"/>
                </div>
                {photoPreview && (
                  <div className="mt-4">
                    <Image src={photoPreview} alt="Preview" width={200} height={200} className="rounded-lg object-cover aspect-square" />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base">Descreva o Conteúdo</Label>
                  <Textarea
                    id="description"
                    value={contentDescription}
                    onChange={(e) => setContentDescription(e.target.value)}
                    placeholder="Ex: Minha preparação para o teste de aptidão física..."
                    rows={4}
                    className="bg-background"
                  />
                </div>
                <Button type="submit" disabled={loading} className="w-full text-lg h-12 font-bold">
                  {loading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-5 w-5" />
                  )}
                  GERAR MENSAGEM
                </Button>
              </form>
              <div className="flex items-center justify-center h-full min-h-[300px] bg-background rounded-lg border-2 border-dashed p-4">
                {loading && (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="text-muted-foreground">Gerando sua dose de motivação...</p>
                  </div>
                )}
                {!loading && motivationalMessage && (
                  <Card className="w-full bg-card shadow-none border-none">
                    <CardHeader>
                      <CardTitle className="text-primary">Sua Mensagem Motivacional:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg italic">&quot;{motivationalMessage}&quot;</p>
                    </CardContent>
                  </Card>
                )}
                 {!loading && !motivationalMessage && (
                  <div className="text-center text-muted-foreground">
                    <Wand2 className="mx-auto h-12 w-12 mb-4" />
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
