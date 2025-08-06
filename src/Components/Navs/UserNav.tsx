import { useState, useEffect, useRef } from "react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: "home", label: "Accueil" },
    { id: "events", label: "Événements" },
    { id: "options", label: "Options+" },
    { id: "packs", label: "Packs DJ" },
    { id: "artists", label: "Artistes" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const currentSection = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <nav
        className="fixed w-full md:w-max md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 z-40  md:bg-background/80 md:backdrop-blur-md md:border md:border-neon-purple/30 rounded-full md:px-6 md:py-3 transition-all duration-300"
        ref={mobileMenuRef}
      >
        <ul className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 animated-underline ${
                  activeSection === item.id
                    ? "text-neon-pink"
                    : "text-foreground hover:text-neon-blue"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div
          className={`md:hidden flex flex-col ${
            menuOpen
              ? " bg-background/80 border-b border-neon-purple/30 backdrop-blur-md"
              : ""
          }`}
        >
          <div className="px-2 py-3">
            <div className="bg-background overflow-hidden w-10 h-10 rounded-lg ">
              <button
                className={`flex w-full h-full flex-col justify-center items-center rounded-lg ${
                  menuOpen
                    ? "bg-foreground/0"
                    : "bg-background border border-neon-pink/30"
                }`}
                aria-label="Open navigation menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-foreground my-1 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
          {menuOpen && (
            <ul className="py-4 text-center">
              {navItems.map((item) => (
                <li key={item.id} className="mb-4">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-foreground px-6 rounded-md py-2 border font-medium transition-colors duration-300 animated-underline ${
                      activeSection === item.id
                        ? "bg-neon-pink border-neon-pink"
                        : " hover:bg-neon-blue hover:border-neon-blue"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden block w-screen h-screen z-10 bg-background/10 backdrop-blur-xs fixed top-0 left-0"></div>
      )}
    </>
  );
};

export default Navigation;
