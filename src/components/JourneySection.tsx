import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Building2 } from "lucide-react";

const timeline = [
  {
    year: "2022",
    title: "Início da Graduação",
    description:
      "Iniciei o curso de Bacharelado em Ciência da Computação pela Universidade Federal de Alfenas (UNIFAL-MG).",
    icon: GraduationCap,
    image: "/unifal.jpg",
    imageFit: "cover",
    imageBg: "bg-secondary/50",
  },
  {
    year: "2025",
    title: "Estágio em Desenvolvimento — Grupo Glorium",
    description:
      "Desenvolvimento de plataforma web com TypeScript, Node.js, React e MySQL. Manutenção de sistemas em produção integrados ao WhatsApp e boletos bancários, além de administração de servidores Linux com Docker.",
    icon: Building2,
    image: "/images.png",
    imageFit: "contain",
    imageBg: "bg-[#1a1a1a]",
  },
  {
    year: "2025",
    title: "Desenvolvedor FullStack — Grupo Awtech",
    description:
      "Desenvolvimento e suporte de aplicações SaaS críticas com NestJS, PHP, React e Vue.js. Investigação de bugs em produção, otimização de queries MySQL/MongoDB e gerenciamento de filas com RabbitMQ.",
    icon: Briefcase,
    current: true,
    image: "/awtech.jpeg",
    imageFit: "contain",
    imageBg: "bg-[#003166]",
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="jornada" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">
            01.1 // jornada
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Minha Jornada<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-14">
            De estudante universitário a desenvolvedor — uma trajetória
            construída com paixão por tecnologia, dedicação e busca constante
            por evolução.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/60 md:-translate-x-px" />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-start mb-12 last:mb-0 ${isLeft
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
                  } flex-row`}
              >
                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"
                    }`}
                >
                  <div className="glass-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-primary">
                    <div className={`w-full aspect-[2.5/1] border-b border-border/50 flex items-center justify-center overflow-hidden ${item.imageBg}`}>
                      <img
                        src={item.image}
                        alt={`Preview de ${item.title}`}
                        className={`transition-all duration-500 hover:scale-105 opacity-80 hover:opacity-100 ${item.imageFit === "contain"
                          ? "h-full w-full object-contain p-4"
                          : "w-full h-full object-cover"
                          }`}
                      />
                    </div>
                    <div className="p-6">
                      <span className="font-mono text-primary text-sm font-semibold">
                        {item.year}
                      </span>
                      <h3 className="font-display text-lg font-bold mt-1 mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          Atual
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Center icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary/40 z-10">
                  <item.icon size={18} className="text-primary" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
