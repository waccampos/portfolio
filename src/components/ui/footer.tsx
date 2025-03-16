import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-display">
              Willams Campos
            </Link>
            <p className="text-muted-foreground mt-3 max-w-xs">
              Desenvolvedor full-stack com experiência em criação de aplicações web e mobile.
            </p>

            <div className="flex items-center mt-6 space-x-4">
              <a
                href="mailto:willamscampos@outlook.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/waccampos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/willams-campos-05aaa11bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <address className="not-italic text-muted-foreground">
              <p>Olinda, Pernambuco</p>
              <p className="mt-2">Brasil</p>
              <p className="mt-3">
                <a
                  href="mailto:willamscampos@outlook.com"
                  className="hover:text-foreground transition-colors"
                >
                  willamscampos@outlook.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Willams Aldson. Todos os direitos reservados.
          </p>

          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Desenvolvido com Next.js, React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
