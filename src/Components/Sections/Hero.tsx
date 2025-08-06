import { PlusIcon } from "lucide-react";
import Logo from "../Logo/Logo";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";

interface HeroProps {
  scrollTo: (id: string) => void;
}

const Hero = ({ scrollTo }: HeroProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-start relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-neon-purple/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative flex flex-col pt-20  h-full justify-start z-10 text-center max-w-4xl mx-auto px-4">
        <Logo />

        <p className="text-xl md:text-2xl  text-foreground mb-12 font-light tracking-wide">
          Donnez du son à vos plus grands moments
        </p>

        <h1 className="text-foreground text-2xl font-bold mb-8">
          Non, un câble jack et une playlist Spotify ne font pas l'affaire.
        </h1>
        <div
          className="text-foreground text-xl leading-relaxed space-y-2"
          ref={ref}
        >
          <p>
            Chez{" "}
            <span className="text-neon-blue font-medium">
              Raisonance Record
            </span>
            , nous croyons qu'un son de qualité peut transformer un moment
            <span className="text-neon-pink"> ordinaire</span> en souvenir
            <span className="text-neon-green"> inoubliable</span>.
          </p>

          <div
            className={`overflow-hidden space-y-2 transition-all duration-300 ease-in-out ${
              open
                ? "max-h-[500px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            }`}
          >
            <p className="text-foreground text-xl leading-relaxed mb-4">
              C'est pourquoi nous vous accompagnons dans la création
              d'événements sur mesure, avec un son de qualité professionnelle,
              une ambiance parfaitement maîtrisée, et des solutions techniques
              adaptées à vos besoins.
            </p>
            <p className="text-foreground text-xl leading-relaxed">
              Du lancement de produit à l'inauguration, en passant par les
              soirées privées ou les actions marketing, nous créons une ambiance
              sonore à la hauteur de votre image.
            </p>
          </div>

          <button
            className="p-2 rounded-lg duration-300 hover:bg-white/10"
            onClick={() => setOpen(!open)}
          >
            <PlusIcon
              className={`transition-all hover:cursor-pointer text-foreground/50 hover:text-foreground duration-300 ${
                open ? "rotate-45" : "rotate-0"
              }`}
            />
          </button>
        </div>
        <div className="w-max mx-auto mt-12">
          <Button
            onClick={() => scrollTo("packs")}
            color="neon-pink"
            text="Découvrir nos packs"
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-10 w-4 h-4 bg-neon-green rounded-full neon-glow-green animate-pulse" />
      <div
        className="absolute bottom-20 right-16 w-3 h-3 bg-neon-yellow rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-20 right-20 w-2 h-2 bg-neon-blue rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  );
};

export default Hero;
