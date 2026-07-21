import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Zap } from "lucide-react";

const stack = [
  "Node.js", "TypeScript", "NestJS", "React",
  "PHP", "Vue.js", "MySQL", "MongoDB",
  "RabbitMQ", "Docker", "Linux", "Redis",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">01. // sobre mim</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            Sobre Mim
          </h2>
        </motion.div>

        {/* Balão principal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-1">
              <User size={18} className="text-primary" />
            </div>

            <div className="glass-card p-5 rounded-tl-none max-w-xl">
              <p className="text-secondary-foreground leading-relaxed mb-4">
                Sou <span className="text-primary font-semibold">Pedro Henrique Alves Barbosa</span>,
                tenho bacharelado em <span className="text-foreground font-medium">Ciência da Computação</span> pela
                Universidade Federal de Alfenas.
                Possuo <span className="text-primary font-semibold"> dois anos de atuação profissional</span> como desenvolvedor full stack.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Atualmente atuo no <span className="text-foreground font-medium">Grupo Awtech</span>,
                trabalhando com <span className="text-foreground font-medium">Node.js, TypeScript, NestJS, React, PHP, Vue.js e React Native</span> no desenvolvimento e manutenção de aplicações críticas de produção. No dia a dia investigo bugs,
                realizo análises de causa-raiz, otimizo queries em
                <span className="text-foreground font-medium"> MySQL e MongoDB</span> e gerencio filas com
                <span className="text-foreground font-medium"> RabbitMQ</span> em arquiteturas orientadas a eventos
                e sistemas distribuídos.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Anteriormente atuei na <span className="text-foreground font-medium">Glorium Cg Consultoria</span>,
                mantendo sistemas integrados ao WhatsApp e boletos bancários, além de administrar servidores
                <span className="text-foreground font-medium"> Linux</span> utilizando
                <span className="text-foreground font-medium"> Docker</span> e aaPanel. Minha trajetória acadêmica
                e profissional fortaleceu um perfil investigativo, focado em resolução de problemas,
                melhoria contínua e desenvolvimento de soluções confiáveis para ambientes de produção.
                <span className="text-foreground font-medium"> Inglês avançado.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Balão stack técnica */}
      </div>
    </section>
  );
};

export default AboutSection;