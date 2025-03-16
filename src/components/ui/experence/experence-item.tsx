import { useMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  index: number;
}

export function ExperienceItem({
  company,
  position,
  period,
  location,
  description,
  responsibilities,
  index,
}: ExperienceItemProps) {
  const isMobile = useMobile();

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {!isMobile && <div className="absolute top-0 left-4 w-0.5 h-full -mt-8 bg-primary/20"></div>}

      <div className="flex gap-6">
        {!isMobile && (
          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary">
              {index + 1}
            </div>
          </div>
        )}

        <div className="w-full p-6 bg-background rounded-xl shadow-sm border border-border mb-8 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-bold text-xl">{company}</h3>
              <p className="text-primary font-medium">{position}</p>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar size={14} className="mr-1" /> {period}
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="space-y-1.5">
            {responsibilities.map((item, i) => (
              <div key={`${i}-${item}`} className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 mr-2 rounded-full bg-primary"></span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center text-sm font-medium">
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs">
              {location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
