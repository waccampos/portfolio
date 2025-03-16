"use client";
import { useMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: string;
  description?: string;
  index: number;
}

export function EducationItem(props: EducationItemProps) {
  const { institution, degree, period, location, status, description, index } = props;
  const isMobile = useMobile();
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex mb-10">
        {!isMobile && (
          <div className="mr-4 flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
              <GraduationCap size={20} />
            </div>
          </div>
        )}

        <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-bold text-xl">{institution}</h3>
              <p className="text-primary font-medium">{degree}</p>
            </div>
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium">
              {status}
            </span>
          </div>

          {description && <p className="text-muted-foreground mt-2">{description}</p>}

          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" /> {period}
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" /> {location}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
