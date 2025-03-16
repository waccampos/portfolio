"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "../section-title";
import { ExperienceItem } from "./experence-item";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Iventou",
      position: "Desenvolvedor Full-stack",
      period: "Julho 2024 - Presente",
      location: "Remoto",
      description: "Desenvolvimento e manutenção de aplicações web utilizando tecnologias modernas.",
      responsibilities: [
        "Desenvolvimento de APIs RESTful com NestJS e integração com frontend em Next.js",
        "Implementação de lógica de negócio eficiente e escalável",
        "Colaboração em ambiente ágil e revisão de código",
        "Criação e manutenção de testes unitários",
      ],
    },
    {
      company: "Freelancer",
      position: "Desenvolvedor Full-stack",
      period: "Novembro 2023 - Julho 2024",
      location: "Remoto",
      description:
        "Desenvolvimento de aplicações para diversos clientes, trabalhando com múltiplas tecnologias.",
      responsibilities: [
        "Criação de aplicativos móveis com React Native",
        "Desenvolvimento de aplicações desktop com Electron.js",
        "Implementação de APIs REST em JavaScript, TypeScript e Python",
        "Desenvolvimento de sites com HTML, CSS, JavaScript e Next.js",
      ],
    },
    {
      company: "Tribunal Federal da 5ª região",
      position: "Estagiário",
      period: "Março 2019 - Março 2021",
      location: "Recife, PE",
      description: "Suporte em atividades administrativas e sistemas informatizados.",
      responsibilities: [
        "Pesquisa e alimentação de dados em sistemas informatizados",
        "Tramitação física e eletrônica de documentos e processos",
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Experiência Profissional"
            description="Minha trajetória profissional como desenvolvedor full-stack."
          />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceItem key={`${i}-${exp.company}`} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
