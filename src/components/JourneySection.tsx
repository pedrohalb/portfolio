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
    image: "/placeholder.svg",
  },
  {
    year: "2024",
    title: "Estágio — Grupo Glorium",
    description:
      "Estagiei por 6 meses no Grupo Glorium, onde pude aplicar conhecimentos de desenvolvimento de software em projetos reais e aprimorar habilidades técnicas em um ambiente profissional.",
    icon: Building2,
    image: "/placeholder.svg",
  },
  {
    year: "2024",
    title: "Desenvolvedor — Grupo Awtech",
    description:
      "Comecei a trabalhar no Grupo Awtech há 8 meses, atuando como desenvolvedor e contribuindo em projetos de tecnologia com foco em qualidade e inovação.",
    icon: Briefcase,
    current: true,
    image: "/placeholder.svg",
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
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"
                  }`}
                >
                  <div className="glass-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-primary">
                    <div className="w-full aspect-[2.5/1] bg-secondary/50 border-b border-border/50 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={`Preview de ${item.title}`}
                        className="w-full h-full object-cover opacity-60 hover:opacity-80 hover:scale-105 transition-all duration-500"
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
