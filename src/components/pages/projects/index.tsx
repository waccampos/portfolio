"use client";
import project1Img from "@/assets/project1.png";
import project2Img from "@/assets/project2.png";
import { AnimatedTransition } from "@/components/ui/animated-transition";
import { Button } from "@/components/ui/button";
import { ProjectItem, ProjectItemProps } from "@/components/ui/projects/project-item";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects: Omit<ProjectItemProps, "index">[] = [
    {
      image: project1Img,
      title: "Portfólio",
      description: "Um site pessoal para apresentar meus projetos e habilidades.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/waccampos/portfolio",
    },
    {
      image: project2Img,
      title: "SkyFile",
      description: "Um aplicativo desktop para de armazenamento de arquivos de forma segura.",
      technologies: ["React", "Tailwind CSS", "Electron", "Supabase", "TypeScript"],
      github: "https://github.com/waccampos/skyFile",
    },
  ];
  return (
    <AnimatedTransition>
      <div className="pt-28">
        <section className="container mx-auto px-4 md:px-6 mb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className=" bg-primary/10 text-primary px-2 py-1 rounded-md">Portfólio</span>
            <h1 className="text-4xl font-bold mb-4">Meus Projetos</h1>
            <p className="text-muted-foreground">
              Uma seleção dos meus trabalhos recentes em desenvolvimento de software, demonstrando minhas
              habilidades técnicas e capacidade de resolução de problemas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectItem key={`${project.title}-${index}`} {...project} index={index} />
            ))}
          </div>
        </section>

        <section className="py-14 ">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="section-title mb-4">Mais Projetos no GitHub</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Veja mais dos meus projetos, contribuições para open-source e experimentos no meu GitHub.
            </p>
            <Button size="lg" asChild>
              <a
                href="https://github.com/williamsaldsoncampos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github size={18} /> Visitar GitHub
              </a>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="section-title mb-4">Interessado em um projeto personalizado?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Se você tem uma ideia ou projeto em mente, estou disponível para discutir como posso ajudar a
              torná-lo realidade.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Entre em contato <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </AnimatedTransition>
  );
}
