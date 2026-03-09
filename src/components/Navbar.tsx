import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const codeSnippets: { text: string; hasTags: boolean }[] = [
  { text: "PH /", hasTags: true },
  { text: "npm start", hasTags: false },
  { text: "git push", hasTags: false },
  { text: "console.log()", hasTags: false },
  { text: "useState()", hasTags: false },
  { text: "import React", hasTags: false },
  { text: "async/await", hasTags: false },
  { text: "fetch('/api')", hasTags: false },
  { text: "App /", hasTags: true },
  { text: ".map()", hasTags: false },
  { text: "useEffect()", hasTags: false },
  { text: "div", hasTags: true },
  { text: "npm install", hasTags: false },
  { text: "git commit -m", hasTags: false },
  { text: "Header /", hasTags: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [currentSnippet, setCurrentSnippet] = useState("PH /");
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(4);
  const [isDeleting, setIsDeleting] = useState(false);
  const [initialPause, setInitialPause] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initial 3s pause on "PH"
  useEffect(() => {
    if (!initialPause) return;
    const timeout = setTimeout(() => {
      setInitialPause(false);
      setIsDeleting(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [initialPause]);

  // Typewriter effect
  useEffect(() => {
    if (initialPause) return;
    const snippet = codeSnippets[snippetIndex].text;
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= snippet.length) {
      timeout = setTimeout(() => {
        setCurrentSnippet(snippet.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > snippet.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((c) => c - 1);
        setCurrentSnippet(snippet.slice(0, charIndex - 1));
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setSnippetIndex((i) => (i + 1) % codeSnippets.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, snippetIndex, initialPause]);

  // Track active section
  useEffect(() => {
    const sections = navItems
      .filter((item) => item.href !== "#home")
      .map((item) => item.href.slice(1));

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("#home");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2"
          : "py-4"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto px-4 transition-all duration-500 ${
          scrolled ? "mx-4 md:mx-auto" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-card/60 backdrop-blur-xl border border-border/40 shadow-lg shadow-primary/5"
              : "bg-transparent"
          }`}
        >
          {/* Logo with typewriter */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-mono text-primary font-bold text-sm tracking-tight group min-w-[140px]">
            {codeSnippets[snippetIndex].hasTags && <span className="text-muted-foreground">&lt;</span>}
            <span className="text-primary">{currentSnippet}</span>
            <span className="animate-pulse text-primary">|</span>
            {codeSnippets[snippetIndex].hasTags && <span className="text-muted-foreground">&gt;</span>}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/40 rounded-xl p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href + item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === "#home") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`relative text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-primary rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-4"
          >
            <div className="bg-card/80 backdrop-blur-xl border border-border/40 rounded-2xl p-4 flex flex-col gap-1 shadow-xl">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href + item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
