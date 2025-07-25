import { useState } from "react";
import {
  Plus,
  Home,
  Settings,
  User,
  Mail,
  SlidersHorizontal,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface MenuItem {
  icon: React.ElementType;
  label: string;
  paths: string[];
  path: string;
}

const menuItems: MenuItem[] = [
  {
    icon: Home,
    label: "dashboard",
    paths: ["/admin/sudo/"],
    path: "",
  },
  {
    icon: User,
    label: "Profil",
    paths: ["/admin/sudo/test"],
    path: "",
  },
  {
    icon: Mail,
    label: "Messages",
    paths: ["/admin/sudo/test"],
    path: "",
  },
  {
    icon: SlidersHorizontal,
    label: "content",
    paths: ["/admin/sudo/content"],
    path: "content",
  },
  {
    icon: Settings,
    label: "Paramètres",
    paths: ["/admin/sudo/test"],
    path: "",
  },
];

const AdminNav = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = window.location.pathname;
  return (
    <div className="fixed bottom-6 left-[calc(50%-28px)]  z-30">
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        const angle = index * 45 + 180;
        const radius = 80;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <a
            key={item.label}
            href={`/admin/sudo/${item.path}`}
            className={`absolute w-12 h-12 rounded-full cursor-pointer  border border-primary flex justify-center items-center shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none scale-50"
            } ${
              item.paths.includes(pathname)
                ? "bg-primary text-foreground-dark"
                : "bg-background-highlight-light dark:bg-background-highlight-dark text-primary"
            }`}
            style={{
              transform: isOpen
                ? `translate(${x}px, ${y}px) scale(1)`
                : "translate(0, 0) scale(0.5)",
              transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
            }}
            aria-label={t(`nav.${item.label}`)}
          >
            <Icon className="h-5 w-5 " />
          </a>
        );
      })}
      <button
        className="w-14 h-14 flex justify-center items-center rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-primary to-primary-highlight hover:from-primary/90 hover:to-primary-highlight/90 text-foreground-dark"
        onClick={toggleMenu}
        id="admin-nav"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <div
          className={`transition-transform duration-300 ${
            isOpen && "rotate-45"
          }`}
        >
          {<Plus className="h-6 w-6" />}
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 -z-10"
          id="admin-nav-hider"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
export default AdminNav;
