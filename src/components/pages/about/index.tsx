"use client";
import { AnimatedTransition } from "@/components/ui/animated-transition";
import { Button } from "@/components/ui/button";
import { EducationSection } from "@/components/ui/education/education-section";
import { ExperienceSection } from "@/components/ui/experence/experience-section";
import { motion } from "framer-motion";
import { ArrowRight, Book, BrainCircuit, Code, Lightbulb, Rocket, Users } from "lucide-react";
import Link from "next/link";

function AboutSection() {
  return (
    <section className="page-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-5">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-3">
              <span className=" bg-primary/10 text-primary px-2 py-1 rounded-md">Sobre Mim</span>
              <h1 className="text-3xl md:text-4xl font-bold">Minha Jornada como Desenvolvedor</h1>
              <p className="text-muted-foreground">
                Olá! Sou Willams Aldson, um desenvolvedor full-stack apaixonado por criar soluções eficientes
                e experiências de usuário intuitivas.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Como desenvolvedor de software com cerca de 2 anos de experiência, tenho me especializado em
                desenvolvimento full-stack, aplicando meu conhecimento em Java, Python, JavaScript e
                TypeScript para criar aplicações robustas e escaláveis.
              </p>

              <p>
                Minha experiência abrange desde o desenvolvimento de APIs RESTful até a criação de interfaces
                responsivas e atraentes. Sou motivado pela busca constante de aprendizado e inovação, com o
                objetivo de colaborar em equipes dinâmicas e contribuir para o sucesso de projetos
                desafiadores.
              </p>

              <p>
                Quando não estou codificando, gosto de explorar novas tecnologias, contribuir para projetos
                open-source e aprimorar constantemente minhas habilidades técnicas.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="glass-card p-8 rounded-3xl w-full max-w-md relative overflow-hidden border">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />

              <div className="relative space-y-6">
                <h2 className="text-2xl font-bold">Valores e Princípios</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <Code size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium">Código Limpo</h3>
                      <p className="text-sm text-muted-foreground">
                        Priorizo código limpo, modular e bem documentado que seja fácil de manter.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <Users size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium">Colaboração</h3>
                      <p className="text-sm text-muted-foreground">
                        Valorizo o trabalho em equipe e a troca constante de conhecimentos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <Lightbulb size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium">Inovação</h3>
                      <p className="text-sm text-muted-foreground">
                        Busco constantemente novas soluções e abordagens criativas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <BrainCircuit size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium">Aprendizado Contínuo</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprometido com o constante aprimoramento técnico e pessoal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GoalsSection() {
  return (
    <section className="page-section bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className=" bg-primary/10 text-primary px-2 py-1 rounded-md"> Objetivos</span>
          <h2 className="section-title">Metas Profissionais</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            Minha visão para os próximos anos como desenvolvedor full-stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="p-3 w-fit rounded-full bg-primary/10 text-primary mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Especialização Técnica</h3>
            <p className="text-muted-foreground">
              Aprofundar conhecimentos em arquitetura de software e padrões de design avançados para
              desenvolver soluções mais robustas.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="p-3 w-fit rounded-full bg-primary/10 text-primary mb-4">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Inovação</h3>
            <p className="text-muted-foreground">
              Contribuir para projetos inovadores que utilizem tecnologias emergentes e solucionem problemas
              reais do mercado.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="p-3 w-fit rounded-full bg-primary/10 text-primary mb-4">
              <Book size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Educação Contínua</h3>
            <p className="text-muted-foreground">
              Concluir minha formação acadêmica em Ciência da Computação e buscar certificações relevantes
              para a área.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <AnimatedTransition>
      <div className="pt-20">
        <AboutSection />
        <ExperienceSection />
        <GoalsSection />
        <EducationSection />

        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="section-title mb-4">Vamos trabalhar juntos?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Se você busca um desenvolvedor dedicado e apaixonado por criar soluções eficientes, estou à
              disposição para discutir como posso contribuir para o sucesso do seu projeto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Entre em contato <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">Ver projetos</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AnimatedTransition>
  );
}
