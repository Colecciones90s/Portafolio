import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioData, type Project } from "@/data/portfolio";
import {
  Globe,
  Cpu,
  Database,
  GitBranch,
  Palette,
  Smartphone,
  Server,
  Code,
  Layers,
  FileText,
  Terminal,
  HardDrive,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const skills = [
  // Frontend
  { name: "HTML", icon: <Code className="h-5 w-5 text-orange-500" />, category: "Frontend", },
  { name: "CSS", icon: <Code className="h-5 w-5 text-blue-500" />, category: "Frontend", },
  { name: "JavaScript", icon: <Code className="h-5 w-5 text-yellow-500" />, category: "Frontend", },
  { name: "Angular", icon: <Globe className="h-5 w-5 text-red-500" />, category: "Frontend", },
  { name: "React", icon: <Globe className="h-5 w-5 text-sky-500" />, category: "Frontend", },
  { name: "Vue", icon: <Globe className="h-5 w-5 text-green-500" />, category: "Frontend", },
  { name: "Tailwind", icon: <Palette className="h-5 w-5 text-cyan-500" />, category: "Frontend", },
  { name: "Bootstrap", icon: <Palette className="h-5 w-5 text-purple-500" />, category: "Frontend", },

  // Backend
  { name: ".NET", icon: <Cpu className="h-5 w-5 text-purple-600" />, category: "Backend", },
  { name: "C#", icon: <Cpu className="h-5 w-5 text-indigo-600" />, category: "Backend", },
  { name: "Java", icon: <Cpu className="h-5 w-5 text-red-600" />, category: "Backend", },
  { name: "PHP", icon: <Cpu className="h-5 w-5 text-blue-600" />, category: "Backend", },
  { name: "API", icon: <Terminal className="h-5 w-5 text-gray-500" />, category: "Backend", },
  { name: "Node.js", icon: <Server className="h-5 w-5 text-green-600" />, category: "Backend", },
  { name: "Python", icon: <Cpu className="h-5 w-5 text-yellow-600" />, category: "Backend", },
  
  // Bases de datos
  { name: "SQL", icon: <Database className="h-5 w-5 text-blue-500" />, category: "Bases de datos", },
  { name: "Oracle", icon: <Database className="h-5 w-5 text-red-500" />, category: "Bases de datos", },
  { name: "MySQL", icon: <Database className="h-5 w-5 text-cyan-700" />, category: "Bases de datos", },
  { name: "PostgreSQL", icon: <Database className="h-5 w-5 text-blue-700" />, category: "Bases de datos", },
  { name: "MongoDB", icon: <Database className="h-5 w-5 text-green-500" />, category: "Bases de datos", },

  // Mobile / App
  { name: "MAUI", icon: <Smartphone className="h-5 w-5 text-indigo-500" />, category: "Mobile / App", },
  { name: "Mobile", icon: <Smartphone className="h-5 w-5 text-pink-500" />, category: "Mobile / App", },

  // Herramientas
  { name: "Visual Studio", icon: <FileText className="h-5 w-5 text-purple-500" />, category: "Herramientas", },
  { name: "VS Code", icon: <FileText className="h-5 w-5 text-blue-500" />, category: "Herramientas", },
  { name: "TFS", icon: <Layers className="h-5 w-5 text-gray-500" />, category: "Herramientas", },
  { name: "Git", icon: <GitBranch className="h-5 w-5 text-orange-500" />, category: "Herramientas", },
  { name: "Firebase", icon: <HardDrive className="h-5 w-5 text-yellow-500" />, category: "Herramientas", },

  // Diseño / UI
  { name: "UI/UX", icon: <Palette className="h-5 w-5 text-pink-500" />, category: "Diseño / UI", },
  { name: "Photoshop", icon: <Palette className="h-5 w-5 text-blue-400" />, category: "Diseño / UI", },
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Frontend");

  useEffect(() => {
    setTimeout(() => {
      setProjects(portfolioData.projects);
      setLoading(false);
    }, 600);
  }, []);

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <section className="flex flex-col items-center justify-center text-center py-12 px-6 bg-gradient-to-b from-muted/10 to-transparent">
        <h2 className="text-5xl font-extrabold tracking-tight mb-4">
          Hola, soy <span className="text-primary">{portfolioData.name}</span>{" "}
          👋
        </h2>
        <p className="text-lg text-muted-foreground mb-3 font-semibold">
          {portfolioData.title} · {portfolioData.location}
        </p>
        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-6">
          {portfolioData.bio}
        </p>
        <Button
          onClick={scrollToProjects}
          className="
                      px-6 py-3 text-lg font-semibold rounded-full border-2
                      border-primary text-primary bg-transparent
                      dark:border-white dark:text-white dark:bg-transparent
                      shadow-md transition-all duration-300
                      hover:scale-105
                      hover:bg-primary hover:text-primary-foreground
                      dark:hover:bg-primary dark:hover:text-white
                    "
        >
          Ver Proyectos
        </Button>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-6">
        <h3 className="text-2xl font-bold mb-6 text-center">Habilidades</h3>
        <div className="flex justify-center gap-3 mb-6 flex-wrap relative">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`
                px-4 py-2 rounded-full font-semibold transition
                ${
                  activeTab === cat
                    ? "bg-primary dark:bg-primary text-primary dark:text-white shadow-lg scale-105 underline decoration-primary underline-offset-4 border-4 border-primary dark:border-2"
                    : "bg-card text-card-foreground border border-border hover:bg-muted/50 dark:hover:bg-muted/30"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills
              .filter((s) => s.category === activeTab)
              .map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition"
                >
                  {s.icon}
                  <span className="text-sm">{s.name}</span>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </section>
      <section id="projects" className="max-w-6xl mx-auto px-6 py-6">
        <h3 className="text-2xl font-bold mb-6 text-center">Mis Proyectos</h3>
        {loading ? (
          <p className="text-center text-muted-foreground">
            Cargando proyectos...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Card
                key={p.id}
                className="
                            relative border-2 border-gray-200 dark:border-gray-700
                            rounded-xl shadow-md overflow-hidden 
                            hover:shadow-xl hover:scale-[1.02] transition
                          "
              >
                <div className="relative group">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white px-3 text-center">
                    <p className="text-sm">{p.description}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="
                                    px-2 py-1 text-xs rounded 
                                    border border-gray-300 dark:border-gray-600 
                                    bg-muted text-muted-foreground
                                  "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="
                                w-full px-4 py-2 font-semibold rounded-lg
                                border-2 border-primary
                                text-primary bg-white
                                shadow-md transition-all duration-300
                                hover:bg-primary hover:text-primary-foreground
                                dark:bg-primary dark:text-white dark:border-primary
                                dark:border-white dark:text-white dark:bg-transparent
                                dark:hover:bg-primary dark:hover:text-white
                              "
                  >
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      Ver más
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
      <section id="contact" className="max-w-3xl mx-auto px-6 py-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Contáctame</h3>
        <p className="text-muted-foreground mb-4">
          ¿Quieres trabajar juntos o tienes alguna consulta? Escríbeme:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="hover:text-primary transition"
          >
            📧 {portfolioData.contact.email}
          </a>
          {portfolioData.contact.linkedin && (
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              className="hover:text-primary transition"
            >
              💼 LinkedIn
            </a>
          )}
          {portfolioData.contact.github && (
            <a
              href={portfolioData.contact.github}
              target="_blank"
              className="hover:text-primary transition"
            >
              🖥 GitHub
            </a>
          )}
        </div>
      </section>
      <footer className="border-t mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {portfolioData.name}
        </div>
      </footer>
    </div>
  );
}