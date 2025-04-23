
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language } = useStore();
  const t = translations[language];

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Abrir menú</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 w-full bg-background border-b shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a
              href="#proyectos"
              className="block px-2 py-1 text-lg hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.projects}
            </a>
            <a
              href="#habilidades"
              className="block px-2 py-1 text-lg hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.skills}
            </a>
            <a
              href="#contacto"
              className="block px-2 py-1 text-lg hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.contact}
            </a>
            <div className="flex items-center gap-4 px-2 py-1">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
