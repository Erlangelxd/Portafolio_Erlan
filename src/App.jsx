
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { Github, Linkedin, Mail, ExternalLink, Instagram, FileText } from "lucide-react";
import { skillsData } from "@/lib/skills-data";
import { useStore } from "@/lib/store";
import { translations } from "@/lib/translations";

const projects = [
  {
    title: "Web de ventas para una Pollereria (Ropa de mujer)",
    description: "Una página web estatica para la venta de ropa de mujer de pollera.",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "https://pollereria-bella-mujer.vercel.app/"
  },
  {
    title: "Web de ventas para Pasteleria",
    description: "Una página web para la venta de una pasteleria.",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "https://pasteleria-cookey-euze.vercel.app/"
  },
  {
    title: "Calculadora para Cálculo III",
    description: "Una calculadora de ecuaciones diferenciales homogéneas de hasta cuarto grado.",
    tech: ["Python"],
    link: "https://github.com/Erlangelxd/Calculadora-de-ecuaciones-diferenciales"
  }
];

function App() {
  const { language } = useStore();
  const t = translations[language];
  let MiNombre= "{Erlan A. Carrillo Bautista}"
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Mi Portafolio
            </motion.h1>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="#proyectos">{t.nav.projects}</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#habilidades">{t.nav.skills}</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contacto">{t.nav.contact}</a>
              </Button>
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <MobileNav />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-pattern dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8 flex justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary"
              >
                <img 
                  className="w-full h-full object-cover"
                  alt="Foto de perfil"
                  src="https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2" 
                />
              </motion.div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              {t.hero.greeting} <span className="gradient-text">{MiNombre}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t.hero.role}
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="#contacto">
                  {t.hero.cta.contact}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#proyectos">
                  {t.hero.cta.projects}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {t.sections.projects.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {t.sections.projects.viewProject} <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 bg-secondary/30 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {t.sections.skills.title}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background dark:bg-gray-800 border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <img 
                  className="w-16 h-16 mb-4"
                  alt={`${skill.name} icon`}
                  src="https://images.unsplash.com/photo-1618927376995-a721da8c11db" 
                />
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">{t.sections.contact.title}</h2>
            <p className="text-muted-foreground mb-8">
              {t.sections.contact.subtitle}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto">
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="mailto:tu@email.com">
                  <Mail className="h-5 w-5" /> Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" /> GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" /> Instagram
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 col-span-2 md:col-span-1" asChild>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-5 w-5" /> CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          © {new Date().getFullYear()} Erlan A. Carrillo Bautista. {t.footer.rights}
        </div>
      </footer>
    </div>
  );
}

export default App;
