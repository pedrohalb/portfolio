import { useRef } from "react";

const deviconUrl = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}`;

const skills = [
  { name: "Node.js", icon: deviconUrl("nodejs/nodejs-original.svg") },
  { name: "NestJS", icon: deviconUrl("nestjs/nestjs-original.svg") },
  {
    name: "TypeScript",
    icon: deviconUrl("typescript/typescript-original.svg"),
  },
  {
    name: "JavaScript",
    icon: deviconUrl("javascript/javascript-original.svg"),
  },
  { name: "PHP", icon: deviconUrl("php/php-original.svg") },
  { name: "Java", icon: deviconUrl("java/java-original.svg") },
  { name: "Python", icon: deviconUrl("python/python-original.svg") },
  { name: "React", icon: deviconUrl("react/react-original.svg") },
  { name: "Vue.js", icon: deviconUrl("vuejs/vuejs-original.svg") },
  { name: "HTML", icon: deviconUrl("html5/html5-original.svg") },
  { name: "CSS", icon: deviconUrl("css3/css3-original.svg") },
  { name: "Bootstrap", icon: deviconUrl("bootstrap/bootstrap-original.svg") },
  { name: "MySQL", icon: deviconUrl("mysql/mysql-original.svg") },
  {
    name: "PostgreSQL",
    icon: deviconUrl("postgresql/postgresql-original.svg"),
  },
  { name: "MongoDB", icon: deviconUrl("mongodb/mongodb-original.svg") },
  { name: "Redis", icon: deviconUrl("redis/redis-original.svg") },
  { name: "Cassandra", icon: deviconUrl("cassandra/cassandra-original.svg") },
  { name: "Docker", icon: deviconUrl("docker/docker-original.svg") },
  { name: "Linux", icon: deviconUrl("linux/linux-original.svg") },
  { name: "Nginx", icon: deviconUrl("nginx/nginx-original.svg") },
  { name: "RabbitMQ", icon: deviconUrl("rabbitmq/rabbitmq-original.svg") },
  { name: "Git", icon: deviconUrl("git/git-original.svg") },
  { name: "GitHub", icon: deviconUrl("github/github-original.svg") },
];

const SkillsMarquee = () => {
  return (
    <div className="gradient-bar border-y border-border/30 py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="mx-6 text-foreground/60 font-mono text-sm font-medium flex items-center gap-2"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-4 h-4"
              loading="lazy"
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
