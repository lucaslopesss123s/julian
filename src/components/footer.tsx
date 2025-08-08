import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-lg">FitCop CF</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Termos e Condições</Link>
            <Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-primary transition-colors">Suporte</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="TikTok">
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FitCop CF. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
