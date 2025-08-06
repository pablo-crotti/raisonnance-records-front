import {
  Calendar,
  Star,
  TrendingUp,
  Users,
  type LucideProps,
} from "lucide-react";
import Card from "../Card";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import Button from "../Button";

interface Data {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  color: string;
}

interface ArtistsProps {
  selectArtists: () => void;
}

const Artists = ({ selectArtists }: ArtistsProps) => {
  const artists: Data[] = [
    {
      icon: Star,
      title: "Accompagnement personnalisé",
      description: "Coaching artistique et développement de votre style unique",
      color: "neon-blue",
    },
    {
      icon: Calendar,
      title: "Planification des tournées",
      description: "Organisation complète de vos dates et événements",
      color: "neon-blue",
    },
    {
      icon: Users,
      title: "Mise en réseau",
      description: "Connexions avec l'industrie musicale et autres artistes",
      color: "neon-blue",
    },
    {
      icon: TrendingUp,
      title: "Promotion digitale",
      description: "Stratégie marketing et présence sur les réseaux sociaux",
      color: "neon-blue",
    },
  ];

  return (
    <section id="artists" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-disco text-4xl md:text-6xl text-center mb-4">
          <span className="bg-gradient-to-br from-primary via-neon-purple to-neon-blue bg-clip-text text-transparent">
            Artistes
          </span>
        </h2>

        <p className="text-center text-foreground-light dark:text-foreground-dark mb-16 text-lg">
          Rejoignez notre label et bénéficiez d'un accompagnement complet pour
          développer votre carrière artistique
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {artists.map((artist, index) => (
            <Card key={index} data={artist} />
          ))}
        </div>
        <div className="w-max mx-auto mt-12">
          <Button
            text="Rejoindre le label"
            onClick={selectArtists}
            color="neon-blue"
          />
        </div>
      </div>
    </section>
  );
};

export default Artists;
