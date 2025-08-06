import { useState } from "react";
import Contact from "../Components/Sections/Contact";
import Events from "../Components/Sections/Events";
import Hero from "../Components/Sections/Hero";
import Options from "../Components/Sections/Options";
import Packs from "../Components/Sections/Packs";

const Index = () => {
  const [selectedPack, setSelectedPack] = useState<string>("");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full  h-[2000px]">
      <Hero scrollTo={scrollTo} />
      <Events />
      <Options />
      <Packs
        selectPack={(pack) => {
          setSelectedPack(pack);
          scrollTo("contact");
        }}
      />
      <Contact selectedPack={selectedPack} />
    </div>
  );
};

export default Index;
