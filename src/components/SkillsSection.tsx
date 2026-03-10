import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const deviconUrl = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}`;

interface Skill {
  name: string;
  rating: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  // Back-End
  {
    name: "Node.js",
    rating: 5,
    category: "Back-End",
    icon: deviconUrl("nodejs/nodejs-original.svg"),
  },
  {
    name: "NestJS",
    rating: 5,
    category: "Back-End",
    icon: deviconUrl("nestjs/nestjs-original.svg"),
  },
  {
    name: "TypeScript",
    rating: 5,
    category: "Back-End",
    icon: deviconUrl("typescript/typescript-original.svg"),
  },
  {
    name: "JavaScript",
    rating: 5,
    category: "Back-End",
    icon: deviconUrl("javascript/javascript-original.svg"),
  },
  {
    name: "PHP",
    rating: 4,
    category: "Back-End",
    icon: deviconUrl("php/php-original.svg"),
  },
  {
    name: "Java",
    rating: 3,
    category: "Back-End",
    icon: deviconUrl("java/java-original.svg"),
  },
  {
    name: "Python",
    rating: 3,
    category: "Back-End",
    icon: deviconUrl("python/python-original.svg"),
  },
  // Front-End
  {
    name: "React",
    rating: 5,
    category: "Front-End",
    icon: deviconUrl("react/react-original.svg"),
  },
  {
    name: "Vue.js",
    rating: 4,
    category: "Front-End",
    icon: deviconUrl("vuejs/vuejs-original.svg"),
  },
  {
    name: "Vue CLI",
    rating: 4,
    category: "Front-End",
    icon: deviconUrl("vuejs/vuejs-original.svg"),
  },
  {
    name: "HTML",
    rating: 5,
    category: "Front-End",
    icon: deviconUrl("html5/html5-original.svg"),
  },
  {
    name: "CSS",
    rating: 5,
    category: "Front-End",
    icon: deviconUrl("css3/css3-original.svg"),
  },
  {
    name: "Bootstrap",
    rating: 5,
    category: "Front-End",
    icon: deviconUrl("bootstrap/bootstrap-original.svg"),
  },
  // Banco de Dados
  {
    name: "MySQL",
    rating: 5,
    category: "Banco de Dados",
    icon: deviconUrl("mysql/mysql-original.svg"),
  },
  {
    name: "PostgreSQL",
    rating: 5,
    category: "Banco de Dados",
    icon: deviconUrl("postgresql/postgresql-original.svg"),
  },
  {
    name: "MongoDB",
    rating: 4,
    category: "Banco de Dados",
    icon: deviconUrl("mongodb/mongodb-original.svg"),
  },
  {
    name: "Redis",
    rating: 4,
    category: "Banco de Dados",
    icon: deviconUrl("redis/redis-original.svg"),
  },
  {
    name: "Cassandra",
    rating: 4,
    category: "Banco de Dados",
    icon: deviconUrl("cassandra/cassandra-original.svg"),
  },
  // Infra / DevOps
  {
    name: "Docker",
    rating: 4,
    category: "DevOps",
    icon: deviconUrl("docker/docker-original.svg"),
  },
  {
    name: "Linux",
    rating: 5,
    category: "DevOps",
    icon: deviconUrl("linux/linux-original.svg"),
  },
  {
    name: "RabbitMQ",
    rating: 4,
    category: "DevOps",
    icon: deviconUrl("rabbitmq/rabbitmq-original.svg"),
  },
  // Ferramentas
  {
    name: "Git",
    rating: 5,
    category: "Ferramentas",
    icon: deviconUrl("git/git-original.svg"),
  },
  {
    name: "GitHub",
    rating: 4,
    category: "Ferramentas",
    icon: deviconUrl("github/github-original.svg"),
  },
  {
    name: "API REST",
    rating: 5,
    category: "Ferramentas",
    icon: deviconUrl("swagger/swagger-original.svg"),
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={12}
        className={
          star <= rating
            ? "fill-primary text-primary"
            : "text-muted-foreground/30"
        }
      />
    ))}
  </div>
);

const SkillCard = ({
  skill,
  index,
  inView,
}: {
  skill: Skill;
  index: number;
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="glass-card p-4 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 group hover:glow-primary"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors p-1.5">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="min-w-0">
        <h4 className="font-display font-semibold text-sm text-foreground">
          {skill.name}
        </h4>
        <StarRating rating={skill.rating} />
        <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
          // {skill.category}
        </p>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref}>
      <div className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-sm mb-2">
              02. // habilidades
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
              Stack Atual<span className="text-primary">.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
