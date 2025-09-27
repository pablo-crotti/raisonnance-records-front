// import Button from "../Button";

const Notice = () => {
  return (
    <section id="artists" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-disco text-4xl md:text-6xl text-center mb-4">
          <span className="bg-gradient-to-br from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent">
            Votre avis compte
          </span>
        </h2>

        <p className="text-center text-foreground mb-8 text-lg">
          Vous avez déjà fait appel à l'un de nos services ?
        </p>
        <div
          className="trustpilot-widget flex justify-center w-full "
          data-locale="fr-FR"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="68d2452c86bd000b3529b2a8"
          data-style-height="52px"
          data-style-width="100%"
          data-token="9220f89e-802c-409e-8d19-d605f6e312dc"
        >
          <a
            href="https://fr.trustpilot.com/review/raisonance-record.ch"
            target="_blank"
            rel="noopener"
            className="border-2 px-4 w-max text-foreground disabled:opacity-50 disabled:hover:text-foreground rounded-xl font-bold py-2 cursor-pointer transition-all duation-300neon-glow-purple-hover  border-neon-purple hover:text-neon-purple"
          >
            Donner mon avis
          </a>
        </div>

        {/* <div className="grid md:grid-cols-4 gap-4">
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
        </div> */}
      </div>
    </section>
  );
};

export default Notice;
