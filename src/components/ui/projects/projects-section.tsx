import project1Img from "@/assets/project1.png";
import project2Img from "@/assets/project2.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../button";
import { ProjectItem, ProjectItemProps } from "./project-item";

export function ProjectsSection() {
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
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Projetos Recentes</h2>
          <p className="text-muted-foreground mt-4">
            Uma seleção dos meus trabalhos mais recentes em desenvolvimento de software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectItem key={`${project.title}-${i}`} {...project} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              Ver todos os projetos <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
