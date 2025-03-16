"use client";
import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, []);

  useEffect(() => {
    // Блокируем прокрутку, если меню открыто
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen font-sans">
        <header className="p-5 flex justify-between items-center max-w-5xl mx-auto w-full z-40">
          <a href="/" className="z-50 text-xl font-bold">Артур Сороколіт</a>
          <nav
            className={`md:flex justify-end gap-6 text-lg font-medium absolute md:static top-0 left-0 w-full h-full bg-white dark:bg-gray-700 md:bg-transparent md:dark:bg-transparent px-12 shadow-lg md:shadow-none transition-all transform ${
              isOpen ? "translate-x-0 w-full h-full" : "-translate-x-full w-0"
            } md:translate-x-0 md:flex-row md:w-auto md:h-auto md:space-x-6 transition-transform ease-in-out duration-500`}>
            <div className="flex flex-col justify-center items-center h-full w-full space-y-6 z-40">
              {["Обо мне", "Мой опыт", "Мои проекты"].map((text, i) => (
                <a
                  key={i}
                  href={["/about", "/experience", "/projects"][i]}
                  className="text-3xl md:text-lg hover:text-gray-500 transition-colors p-2">
                  {text}
                </a>
              ))}
            </div>
          </nav>
          <button onClick={toggleTheme} className="absolute right-12 md:right-4 top-4 md:top-7 p-2 rounded bg-gray-200 dark:bg-gray-700 transition">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button className="z-50 md:hidden text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </header>
        <main className="flex-1 mx-auto p-10 max-w-3xl text-center">{children}</main>
        <footer className="p-6 text-gray-500 text-center border-t border-gray-200">
          © 2025 Артур Сороколіт
        </footer>
      </body>
    </html>
  );
}
