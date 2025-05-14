"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 s items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/30 text-primary rounded-full text-sm font-medium">
                Full-Stack Developer
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
                Willams Campos
              </h1>

              <p className="text-xl text-muted-foreground mt-4 max-w-xl">
                Desenvolvedor de software especializado em tecnologias modernas para criar soluções web e
                mobile.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Entre em contato <ArrowRight size={16} />
                </Link>
              </Button>

              <div className="flex items-center space-x-4">
                <a
                  href="mailto:willamscampos.dev@gmail.com"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="/cv-willams.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Currículo"
                >
                  <FileDown />
                </a>
                <a
                  href="https://github.com/waccampos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/willams-campos-05aaa11bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-3xl blur-lg opacity-75"></div>
              <div className="relative bg-background rounded-3xl p-8 shadow-xl border border-primary/20">
                <h2 className="text-2xl font-bold mb-6">Experiência & Habilidades</h2>

                <div className="space-y-5">
                  <div>
                    <h3 className="font-medium text-lg">Frontend</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        "HTML (Bootstrap)",
                        "CSS (Tailwind CSS e Sass)",
                        "Javascript/TypeScript",
                        "React (Next.js)",
                        "React Native (Expo)",
                      ].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Backend</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Node.js (Nest.js, Express e Fastify)", "Java (Spring Boot)", "Python (Django)"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Banco de Dados</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["PostgreSQL", "MySQL", "MongoDB"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Localização: <span className="font-medium text-foreground">Olinda, PE - Brasil</span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Experiência:{" "}
                      <span className="font-medium text-foreground">
                        2+ anos de desenvolvimento de software
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/projects">Ver Projetos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
