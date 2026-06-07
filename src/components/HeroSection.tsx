import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ChevronDown } from "lucide-react";
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

// Entrada em cascata: o container atrasa cada filho em sequência.
const revealContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const [nameComplete, setNameComplete] = useState(false);
  const [roleComplete, setRoleComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Glows de fundo com drift lento (desligado em prefers-reduced-motion). */}
      <motion.div
        aria-hidden
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 30, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(235_70%_55%/0.08)] blur-[150px] pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -25, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-[hsl(320_65%_58%/0.06)] blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col text-center lg:text-left">
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

          {/* Descrição, botões e sociais entram em cascata após o texto terminar. */}
          <motion.div
            variants={revealContainer}
            initial="hidden"
            animate={roleComplete ? "show" : "hidden"}
            className="flex flex-col"
          >
            <motion.p
              variants={revealItem}
              className="text-muted-foreground text-xl max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Desenvolvendo e sustentando aplicações críticas com foco em
              performance, confiabilidade e evolução contínua.
            </motion.p>

            <motion.div
              variants={revealItem}
              className="flex items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                href="#projetos"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-primary text-primary-foreground font-mono text-base font-semibold rounded-md hover:opacity-90 transition-opacity glow-primary"
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border border-primary/50 text-primary font-mono text-base font-semibold rounded-md hover:bg-primary/10 transition-colors"
              >
                Contato
              </motion.a>
            </motion.div>

            <motion.div
              variants={revealItem}
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
              vazio) e mantido na borda esquerda pra não roubar cliques do texto.
              A camada interna faz o float idle (parado se reduced-motion). */}
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 -right-24 -top-20 -bottom-20 lg:-right-48 lg:-top-32 lg:-bottom-32"
          >
            <RobotScene />
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#projetos"
          aria-label="Rolar para baixo"
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown size={28} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
