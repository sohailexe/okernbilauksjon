import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-50">
      <div className="div-cont">
        <div
          id="numbers"
          className="hidden md:flex w-full flex-col gap-6 md:flex-row justify-between mb-16"
        >
          <div className="flex flex-col justify-center items-center group">
            <span className="text-4xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              40K
            </span>
            <span className="text-gray-600 font-medium text-sm md:text-base">
              Registered Members
            </span>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <span className="text-4xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              25K
            </span>
            <span className="text-gray-600 font-medium text-sm md:text-base">
              Successful Auctions
            </span>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <span className="text-4xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              15K
            </span>
            <span className="text-gray-600 font-medium text-sm md:text-base">
              Active Listings
            </span>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <span className="text-4xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              95%
            </span>
            <span className="text-gray-600 font-medium text-sm md:text-base">
              Customer Satisfaction
            </span>
          </div>
        </div>
      </div>

      <div className="div-cont">
        <div className="px-4 md:px-8 py-6 md:py-7 flex flex-col gap-5 md:flex-row items-center">
          <div
            id="left"
            className="md:w-1/2 pr-0 md:pr-6 text-center md:text-left"
          >
            <p className="text-primary font-semibold text-lg md:text-xl mb-4 md:mb-6">
              Auksjonen
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
              Vi har faste Auksjonsdager
            </h1>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              Onsdag kl. <span className="font-semibold">18:00-20.00</span> og
              Sondag kl. <span className="font-semibold">115:00-17.00</span>
            </p>

            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-3 md:mb-4">
              Onsker du a legge inn forhandsbud pa bill?
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Du kan benytte vart skjema for a legge inn forhandsbud pa bill
            </p>

            <div id="btns" className="mb-8">
              <a
                href=""
                className="btn-primary inline-block hover:scale-105 transition-transform w-full md:w-auto text-center"
              >
                Gi Bud
              </a>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Kom gjerne innom i god tid for auksjonen starter. Alle biler som
              selges med 3 maneders garanti har en tilstandsrapport liggende i
              bilen, her far du god informasjon om bilens takniske stand
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
