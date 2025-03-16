import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Badge } from "../badge";
import { Button } from "../button";
export interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  image: string | StaticImport;
  github?: string;
  demo?: string;
  index: number;
}

export function ProjectItem(props: ProjectItemProps) {
  const { title, description, technologies, image, github, demo, index } = props;

  return (
    <motion.div
      className="glass-card overflow-hidden rounded-xl border hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col h-full">
        <div className="w-full aspect-video bg-secondary/50 relative">
          <Image src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 flex flex-col flex-grow bg-secondary/50">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground mt-2 flex-grow">{description}</p>

          <div className="mt-4">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-4">
              {github && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} /> Código
                  </a>
                </Button>
              )}

              {demo && (
                <Button size="sm" asChild>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
