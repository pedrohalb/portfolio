import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const contacts = [
  {
    icon: Github,
    label: "GitHub",
    value: "@pedrohalb",
    href: "https://github.com/pedrohalb",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/pedro-henrique",
    href: "https://www.linkedin.com/in/pedro-henrique-alves-barbosa-3056aa26a/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@pedroohalb",
    href: "https://www.instagram.com/pedroohalb/",
  },
  {
    icon: Mail,
    label: "Email",
    value: "pedroohalb@gmail.com",
    href: "mailto:pedroohalb@gmail.com",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">04. // contato</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Sinta-se à vontade para entrar em contato!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card p-5 flex items-center gap-4 hover:border-primary/40 transition-all group"
            >
              <c.icon size={20} className="text-primary shrink-0" />
              <div className="text-left">
                <p className="font-mono text-xs text-muted-foreground">
                  {c.label}
                </p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors truncate">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
