import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nutrigo",
    description:
      "Aplicativo mobile de nutrição com IA integrada. Pipeline de geração de tarefas personalizadas usando BullMQ, Redis e API de IA, com backend Node.js/Express e frontend React Native.",
    tags: ["React Native", "Node.js", "TypeScript", "BullMQ", "Redis", "IA"],
    github: "https://github.com/pedrohalb/nutrigo",
    emoji: "🥗",
    image: "/nutrigo.png",
  },
  {
    title: "Bela Pedra",
    description:
      "Interface web do sistema de gestão para marmoraria. Dashboard com KPIs, controle de clientes, materiais, estoque e pedidos com painel visual completo e autenticação JWT.",
    tags: ["React", "TypeScript", "shadcn/ui", "REST API"],
    github: "https://github.com/pedrohalb/bela-pedra-front",
    emoji: "🪨",
    image: "/belapedra.png",
  },
  {
    title: "Hotel Management Application",
    description:
      "Sistema de gerenciamento de hotel desenvolvido em Java com foco em arquitetura limpa e boas práticas de POO.",
    tags: ["Java", "OOP", "Management"],
    github: "https://github.com/pedrohalb/hotel-management-application",
    emoji: "🏨",
    image: "/1 (1).jpeg",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Modelos de IA supervisionada aplicados à identificação de câncer de mama e aprovação de crédito.",
    tags: ["Python", "Jupyter", "Machine Learning"],
    github: "https://github.com/pedrohalb/artificial-intelligence",
    emoji: "🤖",
    image: "/1 (1).png",
  },
  {
    title: "Plataforma de Cursos com Editais Personalizados",
    description:
      "Projeto pessoal focado em oferecer uma plataforma de estudos estruturada por editais personalizáveis, com matérias, tópicos e arquivos para apoio ao aprendizado.",
    tags: ["JavaScript", "Node.js", "REST API"],
    github: "https://github.com/pedrohalb/api",
    live: "https://admin-psi-sage.vercel.app/login",
    emoji: "📖",
    image: "/1 (2).png",
  },
  {
    title: "Elasticsearch",
    description:
      "Projeto explorando funcionalidades do Elasticsearch para busca e indexação de dados.",
    tags: ["JavaScript", "Elasticsearch", "Search"],
    github: "https://github.com/pedrohalb/elasticsearch",
    live: "https://elastic-front.vercel.app",
    emoji: "🔍",
    image: "/1 (2).jpeg",
  },
  {
    title: "COAP",
    description:
      "COAP INFOTECH é uma aplicação web para venda e manutenção de notebooks seminovos, com foco em qualidade, transparência e facilidade de contato.",
    tags: ["JavaScript", "React"],
    github: "https://github.com/pedrohalb/COAP",
    live: "https://www.coapinfotech.com.br",
    emoji: "💻",
    image: "/1 (3).png",
  },
  {
    title: "CleanConnect",
    description:
      "O projeto desenvolvido consiste em uma aplicação que conecta usuários a profissionais de limpeza doméstica, facilitando a contratação de serviços de faxina de forma rápida e conveniente.",
    tags: ["Design", "UI/UX", "Figma"],
    github: "https://github.com/pedrohalb/UIUX",
    emoji: "🎨",
    image: "/1 (1).jpg",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
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
              <div className="w-full aspect-[4/3] bg-secondary/50 border-b border-border/50 flex items-center justify-center overflow-hidden">
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
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
                    <span
                      key={tag}
                      className="font-mono text-xs text-primary/70"
                    >
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
