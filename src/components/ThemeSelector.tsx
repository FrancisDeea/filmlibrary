"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/lib/icons"

export default function ThemeSelector({
  customClass,
}: {
  customClass?: string | null;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  return (
    <button
      className={`p-1 rounded-full bg-secundary text-text ${customClass}`}
      onClick={handleTheme}
    >
      <SunIcon style={theme === "dark" ? "hidden" : "block"} />
      <MoonIcon style={theme === "light" ? "hidden" : "block"} />
    </button>
  );
}
