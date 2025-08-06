import { useEffect, useState } from "react";
// import { Instagram, Youtube, Music } from "lucide-react";
import Button from "../Button";
import Select from "../Forms/Select";
import SmallInputText from "../Forms/SmallInputText";
import InlineLoader from "../Loaders/InlineLoader";

interface ContactProps {
  selectedPack: string;
  selectedArtists: boolean;
  unsetPack: () => void;
  unsetArtists: () => void;
}

const Contact = ({
  selectedPack,
  selectedArtists,
  unsetPack,
  unsetArtists,
}: ContactProps) => {
  const [selectData, setSelectData] = useState({
    type: "",
    pack: "",
  });

  useEffect(() => {
    const type = selectedPack ? "event" : selectData.type || "";
    setSelectData({ pack: selectedPack, type: type });
  }, [selectedPack]);

  useEffect(() => {
    if (selectData.type != "event") setSelectData({ ...selectData, pack: "" });
    if (selectedPack && selectData.type != "event") unsetPack();
    if (selectedArtists && selectData.type != "artists") unsetArtists();
  }, [selectData.type]);

  useEffect(() => {
    if (selectedArtists) setSelectData({ type: "artist", pack: "" });
  }, [selectedArtists]);

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    type: "",
    pack: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const types = [
    { label: "Événement", value: "event" },
    { label: "Booking", value: "booking" },
    { label: "Artiste", value: "artist" },
    { label: "Autre", value: "other" },
  ];

  const packs = [
    { label: "Pack Essentiel", value: "pack_ess" },
    { label: "Pack Ambiance", value: "pack_amb" },
    { label: "Pack Expérience", value: "pack_exp" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const textData = new FormData(e.currentTarget);
    const data = Object.fromEntries(textData.entries());

    const err = {
      fullname: "",
      email: "",
      type: "",
      pack: "",
      message: "",
    };

    if (!data.fullname) {
      err.fullname = "Veuillez indiquer votre nom complet";
    } else if (data.fullname.toLocaleString().length <= 2) {
      err.fullname = "Votre nom ne comporte pas assez de caractères";
    } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.fullname.toLocaleString())) {
      err.fullname = "Votre nom contient des caractères invalides";
    }

    if (!data.email) {
      err.email = "Veuillez indiquer votre email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.toLocaleString())
    ) {
      err.email = "Format d'email invalide";
    }

    if (!data.message) {
      err.message = "Veuillez indiquer votre message";
    } else if (data.message.toLocaleString().length < 10) {
      err.message = "Votre message est trop court (minimum 10 caractères)";
    }

    if (!selectData.type) {
      err.type = "Veuillez sélectionner un type de demande";
    } else if (
      types.filter((type) => type.value == selectData.type).length < 1
    ) {
      err.type = "Le type de demande selectionné n'exiiste pas";
    }

    if (selectData.type == "event" && !selectData.pack) {
      err.pack = "Veuillez choisir le pack qui vous intéresse";
    }
    setErrors(err);

    if (err.fullname || err.email || err.type || err.pack || err.message) {
      return;
    }

    setLoading(true);

    const formData = {
      fullname: data.fullname.toLocaleString(),
      email: data.email.toLocaleString().toLocaleLowerCase(),
      type: selectData.type,
      pack: selectData.pack,
      message: data.message.toLocaleString(),
    };

    console.log(formData);

    setLoading(false);

    // const Da

    // Simple form validation
    // if (
    //   !formData.name ||
    //   !formData.email ||
    //   !formData.type ||
    //   !formData.message
    // ) {
    //   // toast({
    //   //   title: "Erreur",
    //   //   description: "Veuillez remplir tous les champs",
    //   //   variant: "destructive",
    //   // });
    //   return;
    // }

    // Simulate form submission
    // toast({
    //   title: "Message envoyé !",
    //   description: "Nous vous répondrons dans les plus brefs délais.",
    // });

    // Reset form
    // setFormData({ fullname: "", email: "", type: "", pack: "", message: "" });
  };

  // const socialLinks = [
  //   {
  //     icon: Instagram,
  //     label: "Instagram",
  //     url: "#",
  //     color: "neon-pink",
  //   },
  //   {
  //     icon: Music,
  //     label: "SoundCloud",
  //     url: "#",
  //     color: "neon-orange",
  //   },
  //   {
  //     icon: Youtube,
  //     label: "YouTube",
  //     url: "#",
  //     color: "neon-blue",
  //   },
  // ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-disco text-4xl md:text-6xl text-center mb-4">
            <span className="bg-gradient-to-br from-primary via-neon-purple to-neon-blue bg-clip-text text-transparent">
              Contact
            </span>
          </h2>

          <p className="text-center text-foreground mb-16 text-lg">
            Prêt à faire vibrer votre événement ? Contactez-nous !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card/50 backdrop-blur-sm border border-neon-purple/30 rounded-3xl p-8 overflow-hidden">
            <div className="w-full absolute top-0 left-0 ">
              {loading && (
                <InlineLoader color="neon-purple" />
                // <div className="w-full neon-glow-purple before:bg-neon-purple h-1 absolute top-0 left-0 loader-line"></div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <SmallInputText
                  autocomplete={"fullname"}
                  name="fullname"
                  error={errors.fullname}
                  placeholder="Votre nom"
                  disabled={loading}
                />
              </div>

              <div>
                <SmallInputText
                  autocomplete={"email"}
                  name="email"
                  error={errors.email}
                  type="text"
                  placeholder="Votre email"
                  disabled={loading}
                />
              </div>

              <div>
                <Select
                  label="Type de demande"
                  options={types}
                  error={errors.type}
                  selectedOption={selectData.type}
                  select={(value) =>
                    setSelectData({ ...selectData, type: value })
                  }
                  disabled={loading}
                />
              </div>
              <div>
                <Select
                  label="Choisissez un pack"
                  options={packs}
                  error={errors.pack}
                  disabled={selectData.type != "event" || loading}
                  selectedOption={selectData.pack}
                  select={(value) =>
                    setSelectData({ ...selectData, pack: value })
                  }
                />
              </div>
              <div>
                <SmallInputText
                  name="message"
                  error={errors.message}
                  placeholder="Votre message"
                  type="textarea"
                  disabled={loading}
                />
              </div>

              <Button
                type="submit"
                text="Envoyer"
                color="neon-purple"
                disabled={loading}
              />

              {/* <Button
                type="submit"
                className="w-full btn-neon-purple font-bold py-3 rounded-xl pulse-neon"
              >
                Envoyer
              </Button> */}
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            {/* <div className="bg-card/50 backdrop-blur-sm border border-neon-pink/30 rounded-3xl p-8">
              <h3 className="font-retro text-xl font-bold mb-6 text-neon-pink">
                Suivez-nous
              </h3>

              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center p-4 bg-background/30 rounded-xl border transition-all duration-300 group hover:scale-105 ${
                        social.color === "neon-pink"
                          ? "border-neon-pink/30 hover:border-neon-pink"
                          : social.color === "neon-orange"
                          ? "border-neon-orange/30 hover:border-neon-orange"
                          : "border-neon-blue/30 hover:border-neon-blue"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 mr-4 ${
                          social.color === "neon-pink"
                            ? "text-neon-pink"
                            : social.color === "neon-orange"
                            ? "text-neon-orange"
                            : "text-neon-blue"
                        }`}
                      />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div> */}

            <div className="bg-card/50 backdrop-blur-sm border border-neon-blue/30 rounded-3xl p-8">
              <h3 className="font-retro text-xl font-bold mb-4 text-neon-blue">
                Informations
              </h3>

              <div className="space-y-3 text-foreground">
                <p>📧 contact@raisonance-record.ch</p>
                <p>📍 Suisse Romande</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
