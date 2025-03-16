"use client";
import { motion } from "framer-motion";
import { EducationItem } from "./education-item";

export function EducationSection() {
  const educationItems = [
    {
      institution: "Faculdade Maurício de Nassau - UNINASSAU",
      degree: "Bacharelado em Ciência da Computação",
      period: "Março 2025 - Dezembro 2028",
      location: "Recife, PE",
      status: "Em andamento",
      description:
        "Focado em algoritmos avançados, estruturas de dados, desenvolvimento de software e teoria da computação.",
    },
    {
      institution: "Faculdade Maurício de Nassau - UNINASSAU",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      period: "Março 2022 - Dezembro 2023",
      location: "Recife, PE",
      status: "Concluído",
      description:
        "Desenvolvimento de software, modelagem de sistemas, banco de dados, programação orientada a objetos e web.",
    },
    {
      institution: "Grau Técnico",
      degree: "Técnico em Administração",
      period: "Março 2020 - Outubro 2022",
      location: "Olinda, PE",
      status: "Concluído",
      description:
        "Fundamentos de administração, gestão de processos, empreendedorismo e organização empresarial.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Formação Acadêmica</h2>
          <p className="text-muted-foreground mt-4">Meu histórico educacional e qualificações formais.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, i) => (
            <EducationItem key={`${i}-${item.institution}`} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
