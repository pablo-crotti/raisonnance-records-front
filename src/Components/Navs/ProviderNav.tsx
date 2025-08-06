import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { AuthUser } from "../../models/Auth";
import Account from "./Account";

const LINKS = [
  {
    name: "dashboard",
    paths: ["/admin"],
    path: "/admin",
  },
  {
    name: "services",
    paths: ["/admin/services"],
    path: "/admin/services",
  },
  {
    name: "Menaces actives",
    paths: ["/admin/services"],
    path: "/admin/services",
  },
  {
    name: "Besoin d'aide ?",
    paths: ["/admin/services"],
    path: "/admin/services",
  },
  {
    name: "Manque de confiance",
    paths: ["/admin/services"],
    path: "/admin/services",
  },
];

interface ProviderNavProps {
  user: AuthUser;
}

const ProviderNav = ({ user }: ProviderNavProps) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = window.location.pathname;
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 w-full flex justify-center h-24 px-10 py-10 lg:px-4 lg:py-4 bg-background-highlight-light dark:bg-background-highlight-dark border-b-4 border-primary/30">
      <button
        className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col justify-center items-center w-10 h-10"
        aria-label="Open navigation menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span
          className={`block h-0.5 w-6 bg-dark dark:bg-foreground-dark bg-foreground-light transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-dark dark:bg-foreground-dark bg-foreground-light my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-dark dark:bg-foreground-dark bg-foreground-light transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
      <Account user={user} />

      <div className="hidden lg:block border shadow-md border-primary/30 hover:border-primary w-max rounded-full px-6 py-4 hover:shadow-glow-primary duration-300">
        <ul className="flex items-center space-x-6">
          {LINKS.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  item.paths.includes(pathname)
                    ? "text-foreground-dark bg-gradient-to-r from-primary to-primary-highlight"
                    : "text-foreground-light dark:text-foreground-dark hover:text-primary"
                }`}
              >
                {t(`nav.${item.name}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-30 h-screen w-full bg-background-light/70 dark:bg-background-dark/70 flex items-start justify-end lg:hidden ">
          <div
            className="absolute inset-0"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative bg-background-light dark:bg-background-dark w-full backdrop-blur-md  shadow-lg flex flex-col space-y-4 border-b-4 border-primary/30">
            <ul className="flex flex-col space-y-4 mt-20 max-h-screen overflow-y-scroll pb-40 bg-background-light dark:bg-background-dark border-t-2 border-neon-primary/30 w-full p-6">
              {LINKS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className={`w-full block text-left px-4 py-3 text-lg font-medium  transition-all duration-300 ${
                      item.paths.includes(pathname)
                        ? "text-white bg-gradient-to-r from-primary to-primary-highlight rounded-lg"
                        : "text-foreground-light dark:text-foreground-dark hover:text-primary border-b-2 border-primary/80"
                    }`}
                  >
                    <span className="w-full flex justify-between">
                      {t(`nav.${item.name}`)}{" "}
                      <ChevronRight
                        className={`${
                          item.paths.includes(pathname)
                            ? "text-foreground-dark"
                            : "text-primary/80"
                        }`}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ProviderNav;
