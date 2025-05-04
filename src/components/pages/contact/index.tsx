"use client";
import { AnimatedTransition } from "@/components/ui/animated-transition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionTitle } from "@/components/ui/section-title";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { sendEmail } from "../../../app/actions";

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(sendEmail, null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Mensagem enviada com sucesso!");
      return;
    }

    if (state.errors?.validation) {
      Object.values(state.errors.validation).forEach((error) => {
        toast.error(error[0]);
      });
      return;
    }

    toast.error("Ocorreu um erro ao enviar a mensagem.");

    return () => {
      toast.dismiss();
    };
  }, [state]);

  return (
    <AnimatedTransition>
      <div className="pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className=" bg-primary/10 text-primary px-2 py-1 rounded-md">Contato</span>
            <SectionTitle
              title="Vamos Conversar"
              description="Estou disponível para novas oportunidades, projetos freelance ou apenas para trocar ideias.
              Preencha o formulário abaixo ou utilize um dos canais de contato disponíveis."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              className="glass-card p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

              <form action={formAction} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    defaultValue={state?.data?.name}
                    aria-invalid={!!state?.errors?.validation?.name}
                  />
                  {state?.errors?.validation?.name && (
                    <span className="text-xs text-destructive">{state?.errors?.validation?.name}</span>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="seu.email@exemplo.com"
                    defaultValue={state?.data?.email}
                    aria-invalid={!!state?.errors?.validation?.email}
                  />
                  {state?.errors?.validation?.email && (
                    <span className="text-xs text-destructive">{state?.errors?.validation?.email}</span>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Assunto
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Assunto da mensagem"
                    defaultValue={state?.data?.subject}
                    aria-invalid={!!state?.errors?.validation?.subject}
                  />
                  {state?.errors?.validation?.subject && (
                    <span className="text-xs text-destructive">{state?.errors?.validation?.subject}</span>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem aqui..."
                    rows={5}
                    defaultValue={state?.data?.message}
                    aria-invalid={!!state?.errors?.validation?.message}
                  />
                  {state?.errors?.validation?.message && (
                    <span className="text-xs text-destructive">{state?.errors?.validation?.message}</span>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={pending}>
                  {pending ? (
                    <span className="flex items-center gap-2">
                      Enviando...
                      <Loader2 size={16} className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar Mensagem <Send size={16} />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

              <div className="space-y-6">
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:willamscampos.dev@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      willamscampos.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Telefone</h3>
                    <a
                      href="tel:+5581998864032"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +55 (81) 99886-4032
                    </a>
                  </div>
                </div>

                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Localização</h3>
                    <p className="text-muted-foreground">Olinda, Pernambuco - Brasil</p>
                  </div>
                </div>

                <div className="glass-card p-5">
                  <h3 className="font-medium mb-3">Redes Sociais</h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/waccampos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/willams-campos-05aaa11bb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="mailto:willamscampos.dev@gmail.com"
                      className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Horário de Disponibilidade</h3>
                <p className="text-muted-foreground mb-2">
                  Estou disponível para discussões e reuniões nos seguintes horários:
                </p>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Segunda - sabado:</span>
                    <span className="font-medium">08:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium">08:00 - 14:00</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </AnimatedTransition>
  );
}
