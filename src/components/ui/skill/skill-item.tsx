"use client";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  iconColor: string;
  index: number;
}

export function SkillItem(props: SkillCategoryProps) {
  const { icon, title, skills, iconColor, index } = props;
  return (
    <motion.div
      className="relative bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className={`p-3 rounded-full w-fit ${iconColor} mb-4`}>{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill, i) => (
          <div key={`${i}-${skill}`} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${iconColor.replace("bg-", "bg-")}`}></div>
            <span className="text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
