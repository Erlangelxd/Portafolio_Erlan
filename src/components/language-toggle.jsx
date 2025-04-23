
import React from "react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";

export function LanguageToggle({ className }) {
  const { language, setLanguage } = useStore();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className={className}
    >
      {language === "es" ? "EN" : "ES"}
    </Button>
  );
}
