import { HeartHandshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface ElementItem {
  icon: React.ElementType;
  label: string;
  color: string;
}

const elements: ElementItem[] = [
  {
    icon: HeartHandshake,
    label: "service_types",
    color: "primary",
  },
  {
    icon: HeartHandshake,
    label: "photos",
    color: "primary",
  },
  {
    icon: HeartHandshake,
    label: "test",
    color: "primary",
  },
];

const Content = () => {
  const { t } = useTranslation();
  const [selectedBlock, setSelectedBlock] = useState("");

  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const isClickInsideAny = Object.values(buttonRefs.current).some((ref) =>
        ref?.contains(target)
      );

      const adminNav = document.getElementById("admin-nav");
      const clickedInsideAdminNav = adminNav?.contains(target);

      let clickedInsideAdminNavHider = false;
      if (event.target instanceof HTMLElement) {
        clickedInsideAdminNavHider = event.target.id == "admin-nav-hider";
      }

      if (
        !isClickInsideAny &&
        !clickedInsideAdminNav &&
        !clickedInsideAdminNavHider
      ) {
        setSelectedBlock("");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 text-foreground">
      {elements.map((element) => {
        const Icon = element.icon;
        const selected = selectedBlock == element.label;
        return (
          <button
            key={element.label}
            id={element.label}
            ref={(el) => {
              buttonRefs.current[element.label] = el;
            }}
            onClick={() => setSelectedBlock(element.label)}
            className={`block h-44 border rounded-xl group transition-all duration-300  hover:border-${
              element.color
            } hover:shadow-glow-${element.color} ${
              selected
                ? `w-full lg:w-3/4 shadow-glow-${element.color} border-${element.color}`
                : `w-3/4 lg:w-1/4 border-${element.color}/30`
            }`}
          >
            <div
              className={`group-hover:text-${element.color} ${
                selected ? `text-${element.color}` : `text-foreground `
              }`}
            >
              <span
                className={`w-20 h-20 flex justify-center rounded-lg border-primary shadow-glow-primary items-center ${
                  selected ? `bg-primary/30` : ``
                }`}
              >
                <Icon className="w-12 h-12" />
              </span>
              <p>{t(`pages.content.${element.label}`)}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Content;
