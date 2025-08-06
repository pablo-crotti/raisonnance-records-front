import { useState } from "react";
import Contact from "../Components/Sections/Contact";
import Events from "../Components/Sections/Events";
import Hero from "../Components/Sections/Hero";
import Options from "../Components/Sections/Options";
import Packs from "../Components/Sections/Packs";
import Artists from "../Components/Sections/Artists";

const Index = () => {
  const [selectedPack, setSelectedPack] = useState<string>("");
  const [selectedArtists, setSelectedArtists] = useState<boolean>(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full ">
      <Hero scrollTo={scrollTo} />
      <Events />
      <Options />
      <Packs
        selectPack={(pack) => {
          setSelectedPack(pack);
          scrollTo("contact");
        }}
      />
      <Artists
        selectArtists={() => {
          setSelectedArtists(true);
          scrollTo("contact");
        }}
      />
      <Contact
        selectedPack={selectedPack}
        selectedArtists={selectedArtists}
        unsetPack={() => setSelectedPack("")}
        unsetArtists={() => setSelectedArtists(false)}
      />
    </div>
  );
};

export default Index;
