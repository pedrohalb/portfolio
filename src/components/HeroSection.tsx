import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import TypewriterText from "./TypewriterText";
import RobotScene from "./RobotScene";
import { useState } from "react";

const socials = [
  { icon: Github, href: "https://github.com/pedrohalb", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pedro-henrique-alves-barbosa-3056aa26a/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/pedroohalb/",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:pedroohalb@gmail.com", label: "Email" },
]; 

const HeroSection = () => {
  const [nameComplete, setNameComplete] = useState(false);
  const [roleComplete, setRoleComplete] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(235_70%_55%/0.08)] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-[hsl(320_65%_58%/0.06)] blur-[120px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary mb-4 text-base md:text-lg"
          ></motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
          >
            <TypewriterText
              text="Pedro Henrique"
              delay={80}
              startDelay={600}
              onComplete={() => setNameComplete(true)}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: nameComplete ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-medium mb-6"
          >
            <span className="text-gradient">
              {nameComplete && (
                <TypewriterText
                  text="desenvolvedor de software."
                  delay={50}
                  startDelay={200}
                  onComplete={() => setRoleComplete(true)}
                />
              )}
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: roleComplete ? 1 : 0,
              y: roleComplete ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-xl max-w-xl mx-auto lg:mx-0 mb-8"
          >
            Desenvolvendo e sustentando aplicações críticas com foco em
            performance, confiabilidade e evolução contínua.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: roleComplete ? 1 : 0,
              y: roleComplete ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projetos"
              className="px-8 py-4 bg-primary text-primary-foreground font-mono text-base font-semibold rounded-md hover:opacity-90 transition-opacity glow-primary"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-8 py-4 border border-primary/50 text-primary font-mono text-base font-semibold rounded-md hover:bg-primary/10 transition-colors"
            >
              Contato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: roleComplete ? 1 : 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-1"
          >
            <div className="w-8 h-px bg-border" />
            <div className="flex items-center gap-5 px-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={26} />
                </a>
              ))}
            </div>
            <div className="w-8 h-px bg-border" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative w-full h-[450px] lg:h-[620px]"
        >
          {/* Canvas maior que o robô visível: aumenta a área que "segue" o mouse
              sem mudar o tamanho aparente. Esticado pra direita/cima/baixo (espaço
              vazio) e mantido na borda esquerda pra não roubar cliques do texto. */}
          <div className="absolute left-0 -right-24 -top-20 -bottom-20 lg:-right-48 lg:-top-32 lg:-bottom-32">
            <RobotScene />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
