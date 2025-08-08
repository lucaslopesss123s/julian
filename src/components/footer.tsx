import Link from "next/link"
import { Instagram, Youtube, Facebook } from "lucide-react"
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="font-bold text-xl">FitCop CF</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Instagram" className="p-2 rounded-full bg-background hover:bg-primary/20 transition-colors">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
             <Link href="#" aria-label="Facebook" className="p-2 rounded-full bg-background hover:bg-primary/20 transition-colors">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="YouTube" className="p-2 rounded-full bg-background hover:bg-primary/20 transition-colors">
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FitCop CF. Todos os direitos reservados. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
        </div>
      </div>
    </footer>
  )
}
