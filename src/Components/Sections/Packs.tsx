import { Check, type LucideProps } from "lucide-react";
import Card from "../Card";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface Data {
  title: string;
  subTitle: string;
  description: string;
  color: string;
  list: string[];
  listIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  button: string;
  annotation?: string;
  label: string;
}

interface PacksProps {
  selectPack: (pack: string) => void;
}

const Packs = ({ selectPack }: PacksProps) => {
  const packs: Data[] = [
    {
      title: "Pack Essentiel",
      subTitle: "À partir de 899 CHF",
      description: "Idéal pour les evenements d'entreprise",
      color: "neon-blue",
      list: [
        "Location livraison et installation sono et matériel DJ simple",
        "Micro sans fils",
        "Booking DJ sur mesure",
        "Jusqu'à 4h de DJ set",
      ],
      listIcon: Check,
      button: "Réserver ce pack",
      label: "pack_ess",
    },
    {
      title: "Pack Ambiance",
      subTitle: "À partir de 1699 CHF",
      description: "Idéal pour les mariages et anniversaires",
      color: "neon-pink",
      list: [
        "Location, livraison et installation son et lumière",
        "Micro sans fils",
        "Activités sonores souhaités",
        "Playlists personnalisées",
        "Booking DJ sur mesure",
        "Jusqu'à 6h de DJ set",
      ],
      listIcon: Check,
      button: "Réserver ce pack",
      annotation: "Populaire",
      label: "pack_amb",
    },
    {
      title: "Pack Expérience",
      subTitle: "À partir de 2899 CHF",
      description: "Idéal pour un deal tout en un",
      color: "neon-purple",
      list: [
        "Location, livraison et installation son/lumière premium",
        "Micro sans fils",
        "Activités sonores souhaités (karaoké, blind test)",
        "Booking DJs et/ou groupe live sur mesure",
        "Captation sonore/vidéo et after-movie montage (after-movie)",
        "Photographe et traitement des photos",
      ],
      listIcon: Check,
      button: "Réserver ce pack",
      label: "pack_exp",
    },
  ];

  return (
    <section id="packs" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-disco text-4xl md:text-6xl text-center mb-4">
          <span className="bg-gradient-to-br from-primary via-neon-purple to-neon-blue bg-clip-text text-transparent">
            Packs DJ
          </span>
        </h2>

        <p className="text-center text-foreground-light dark:text-foreground-dark mb-16 text-lg">
          Choisissez la formule qui correspond à vos besoins
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packs.map((pack, index) => (
            <Card
              key={index}
              data={pack}
              onClick={() => selectPack(pack.label)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packs;
