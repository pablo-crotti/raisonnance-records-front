import { Building, Heart, type LucideProps } from "lucide-react";
import Card from "../Card";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface Data {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  subDescription?: string;
  color: string;
}

const Events = () => {
  const eventTypes: Data[] = [
    {
      icon: Building,
      title: "Service aux entreprises",
      description:
        "Soupers et sorties d'équipe, inaugurations & lancements de produit, événements marketing & RP, valorisation de vos évènements pour les réseaux sociaux (captation sonore et vidéo)",
      subDescription:
        "Un service complet qui valorise votre image de marque par une ambiance cohérente",
      color: "neon-blue",
    },
    {
      icon: Heart,
      title: "Évènements privés",
      description:
        "Mariages (DJ, photographe, son & lumière inclus), soirées privées & anniversaires, enterrements de vie de jeune fille/garçon & voyage de noces",
      subDescription:
        "Une offre tout-en-un qui vous libère l'esprit pour profiter pleinement du moment",
      color: "neon-pink",
    },
  ];

  return (
    <section id="events" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-disco text-4xl md:text-6xl text-center mb-16">
          <span className="bg-gradient-to-br from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent">
            Événements
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {eventTypes.map((event, index) => (
            <Card key={index} data={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
