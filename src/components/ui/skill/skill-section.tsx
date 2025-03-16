"use client";
import { motion } from "framer-motion";
import { Code, Database, Server, Terminal } from "lucide-react";
import { SectionTitle } from "../section-title";
import { SkillItem } from "./skill-item";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      iconColor: "bg-blue-500/10 text-blue-500",
      skills: [
        "HTML",
        "CSS (Tailwind CSS, Sass)",
        "TypeScript/JavaScript",
        "React (Next.js)",
        "React Native (Expo)",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-purple-500" />,
      iconColor: "bg-purple-500/10 text-purple-500",
      skills: ["Node.js (Nest.js, Express, Fastify)", "Python (Django)", "Java (Spring Boot)"],
    },
    {
      title: "Banco de Dados",
      icon: <Database className="w-6 h-6 text-amber-500" />,
      iconColor: "bg-amber-500/10 text-amber-500",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Modelagem de Dados"],
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      iconColor: "bg-green-500/10 text-green-500",
      skills: ["Git & GitHub", "Docker", "GCP", "Testing (Jest, Cypress)"],
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
          <SectionTitle
            title="Habilidades Técnicas"
            description="Tecnologias e ferramentas que domino para criar soluções eficientes."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillItem
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              iconColor={category.iconColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
