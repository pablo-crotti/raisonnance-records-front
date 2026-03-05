import { useState } from "react";
import { X } from "lucide-react";

import gallery1 from "../../assets/gallery-1.jpg";
import gallery2 from "../..//assets/gallery-2.jpg";
import gallery3 from "../..//assets/gallery-3.jpg";

const photos = [
  {
    src: gallery2,
    alt: "Organisation d'anniversaires",
    label: "Anniversaire",
    color: "neon-blue",
  },
  {
    src: gallery1,
    alt: "Location de matériel",
    label: "Lights setup",
    color: "neon-purple",
  },
  { src: gallery3, alt: "Concert live", label: "Concert", color: "neon-pink" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-disco text-4xl md:text-6xl mb-4">
            <span className="bg-gradient-to-br from-primary via-neon-purple to-neon-blue bg-clip-text text-transparent">
              Galerie
            </span>
          </h2>
          <p className="text-center text-foreground mb-16 text-lg">
            Revivez l'énergie de nos événements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`group relative w-full break-inside-avoid overflow-hidden rounded-2xl border border-muted/40 ${photo.color == "neon-pink" ? "hover:border-neon-pink/50" : photo.color == "neon-purple" ? "hover:border-neon-purple/50" : photo.color == "neon-blue" ? "hover:border-neon-blue/50" : "hover:border-neon-pink/50"} transition-all duration-500 focus:outline-none ${photos.length % 2 != 0 && i == photos.length - 1 ? "col-span-1 sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span
                  className={`font-retro text-sm tracking-wider ${photo.color == "neon-pink" ? "text-neon-pink" : photo.color == "neon-purple" ? "text-neon-purple" : photo.color == "neon-blue" ? "text-neon-blue" : "text-neon-pink"}`}
                >
                  {photo.label}
                </span>
              </div>
              <div
                className={`absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent ${photo.color == "neon-pink" ? "group-hover:ring-neon-pink/40 group-hover:shadow-[inset_0_0_30px_hsl(328_100%_54%/0.15)]" : photo.color == "neon-purple" ? "group-hover:ring-neon-purple/40 group-hover:shadow-[inset_0_0_30px_hsl(271_91%_65%/0.15)]" : photo.color == "neon-blue" ? "group-hover:ring-neon-blue/40 group-hover:shadow-[inset_0_0_30px_hsl(194_100%_50%/0.15)]" : "group-hover:ring-neon-pink/40 group-hover:shadow-[inset_0_0_30px_hsl(328_100%_54%/0.15)]"}  transition-all duration-500`}
              />
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground/60 hover:text-neon-pink transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl border border-neon-pink/30 shadow-[0_0_60px_hsl(328_100%_54%/0.2)] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-8 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === selected
                    ? "bg-neon-pink scale-125"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
