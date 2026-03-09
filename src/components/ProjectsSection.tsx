import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hotel Management Application",
    description: "Sistema de gerenciamento de hotel desenvolvido em Java com foco em arquitetura limpa e boas práticas de POO.",
    tags: ["Java", "OOP", "Management"],
    github: "https://github.com/pedrohalb/hotel-management-application",
    emoji: "🏨",
    image: "/placeholder.svg",
  },
  {
    title: "Artificial Intelligence",
    description: "Modelos de IA supervisionada aplicados à identificação de câncer de mama e aprovação de crédito.",
    tags: ["Python", "Jupyter", "Machine Learning"],
    github: "https://github.com/pedrohalb/artificial-intelligence",
    emoji: "🤖",
    image: "/placeholder.svg",
  },
  {
    title: "API REST",
    description: "API RESTful construída com JavaScript para exploração de conceitos de backend e integração de serviços.",
    tags: ["JavaScript", "Node.js", "REST API"],
    github: "https://github.com/pedrohalb/api",
    emoji: "⚡",
    image: "/placeholder.svg",
  },
  {
    title: "Elasticsearch",
    description: "Projeto explorando funcionalidades do Elasticsearch para busca e indexação de dados.",
    tags: ["JavaScript", "Elasticsearch", "Search"],
    github: "https://github.com/pedrohalb/elasticsearch",
    emoji: "🔍",
    image: "/placeholder.svg",
  },
  {
    title: "COAP",
    description: "Implementação do protocolo CoAP (Constrained Application Protocol) para IoT e dispositivos embarcados.",
    tags: ["JavaScript", "IoT", "Protocol"],
    github: "https://github.com/pedrohalb/COAP",
    emoji: "📡",
    image: "/placeholder.svg",
  },
  {
    title: "UI/UX",
    description: "Estudos e projetos focados em design de interfaces e experiência do usuário.",
    tags: ["Design", "UI/UX", "Figma"],
    github: "https://github.com/pedrohalb/UIUX",
    emoji: "🎨",
    image: "/placeholder.svg",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">03. // projetos</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Meus Projetos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass-card group hover:border-primary/40 transition-all duration-300 hover:glow-primary cursor-pointer overflow-hidden"
            >
              <div className="w-full aspect-video bg-secondary/50 border-b border-border/50 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={`Preview de ${project.title}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <div className="flex gap-3 text-muted-foreground">
                    <Github size={18} className="group-hover:text-primary transition-colors" />
                    <ExternalLink size={18} className="group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-primary/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
