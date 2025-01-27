import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-50">
      <div className="div-cont">
        <div
          id="left"
          className="px-4 md:px-8 py-6 md:py-7 flex flex-col gap-5 md:flex-row items-center"
        >
          <div className="md:w-1/2 pr-0 md:pr-6 text-center md:text-left">
            <p className="text-primary font-semibold text-lg md:text-xl mb-4 md:mb-6">
              Auksjonen
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
              Vi har faste auksjonsdager
            </h1>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              Onsdag kl. 18:00–20:00 og søndag kl. 15:00–17:00
            </p>

            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-3 md:mb-4">
              Ønsker du å legge inn forhåndsbud på bil?
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Du kan benytte vår skjerm for å legge inn forhåndsbud på bil under <a href="/gi-bud" className="text-primary hover:text-primary/80 font-semibold">Gi Bud</a>.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Kom gjerne innom i god tid før auksjonen starter. Alle biler som selges med 3 måneders garanti har en tilstandsrapport liggende i bilen. Her får du god informasjon om bilens tekniske stand.
            </p>
          </div>
          <div id="right" className="flex-1 hidden md:block">
            <div className="relative w-full h-[400px]">
              <Image
                className="scale-110 hover:scale-105 transition-transform duration-300"
                src="/images/thar2.png"
                alt="Car auction illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;