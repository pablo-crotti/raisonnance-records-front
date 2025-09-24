import {
  Video,
  Mic,
  Music,
  type LucideProps,
  Speaker,
  SlidersVertical,
  Cable,
} from "lucide-react";
import Card from "../Card";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface Data {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  color: string;
}

const Options = () => {
  const options: Data[] = [
    {
      icon: Speaker,
      title: "Matériel",
      description:
        "Location, livraison et installation de matériel audio et lumières",
      color: "neon-purple",
    },
    {
      icon: Cable,
      title: "Booking",
      description:
        "Mise en relation avec les artistes/DJ et booking pour une ambiance maîtrisée et sur mesure",
      color: "neon-orange",
    },
    {
      icon: SlidersVertical,
      title: "Habillage sonore",
      description:
        "Sound design, playlists et montages audio créés pour sublimer vos lancements de produit, campagnes ou événements de marque",
      color: "neon-yellow",
    },
    {
      icon: Video,
      title: "Captation sonore/vidéo",
      description:
        "Immortalisez votre soirée avec une qualité professionnelle avec un after-movie de la soirée",
      color: "neon-blue",
    },
    {
      icon: Music,
      title: "Blind test personnalisé",
      description: "Quiz musical sur mesure selon vos goûts et votre événement",
      color: "neon-pink",
    },
    {
      icon: Mic,
      title: "Karaoké interactif",
      description: "Système karaoké moderne avec milliers de titres",
      color: "neon-purple",
    },
  ];

  return (
    <section
      id="options"
      className="py-20 px-4 bg-gradient-to-br from-background via-background/5 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-disco text-4xl md:text-6xl text-center mb-4">
          <span className="bg-gradient-to-br from-primary via-neon-purple to-neon-blue bg-clip-text text-transparent">
            Options+
          </span>
        </h2>

        <p className="text-center text-foreground mb-16 text-lg">
          Services complémentaires pour une expérience unique
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <Card key={index} data={option} squareIcon={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Options;
