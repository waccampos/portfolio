"use client";

import { Button } from "@/components/ui/button";
import { EducationSection } from "@/components/ui/education/education-section";
import { ExperienceSection } from "@/components/ui/experence/experience-section";
import { Hero } from "@/components/ui/hero";
import { ProjectsSection } from "@/components/ui/projects/projects-section";
import { SkillsSection } from "@/components/ui/skill/skill-section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Vamos trabalhar juntos?</h2>
            <p className="text-muted-foreground mb-8">
              Estou disponível para projetos freelance, posições full-time ou parcerias.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Entre em contato <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
