import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

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

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-1">
              <User size={18} className="text-primary" />
            </div>
            <div className="glass-card p-5 rounded-tl-none max-w-lg">
              <p className="text-secondary-foreground leading-relaxed mb-4">
                Olá! Eu sou <span className="text-primary font-semibold">Pedro Henrique Alves Barbosa</span>, 
                estudante de Ciência da Computação na Universidade Federal de Alfenas (UNIFAL-MG).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aspiro me tornar um grande desenvolvedor de software e trabalho duro para isso. 
                Sou muito proativo e aprendo rápido. Tenho experiência com diversas linguagens e 
                tecnologias, desde desenvolvimento backend com Java e Python até ferramentas como 
                Docker e Git.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Busco constantemente novos desafios e oportunidades para crescer como profissional, 
                contribuindo com projetos que fazem diferença.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
