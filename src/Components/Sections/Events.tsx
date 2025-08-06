import { Building, Heart, type LucideProps } from "lucide-react";
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

const Events = () => {
  const eventTypes: Data[] = [
    {
      icon: Building,
      title: "Service aux entreprises",
      description: "Soupers et sorties, inauguration, évènements marketing",
      color: "neon-blue",
    },
    {
      icon: Heart,
      title: "Évènements privés",
      description:
        "Mariage tout inclus (DJ, photographe, son, lumière, et même enterrement de vie de garçon/fille et voyage de noces.)",
      color: "neon-pink",
    },
  ];

  return (
    <section id="events" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-disco text-4xl md:text-6xl text-center mb-16">
          <span className="bg-gradient-to-br from-primary via-neon-purple to-neon-blue bg-clip-text text-transparent">
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
