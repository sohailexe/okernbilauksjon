import React from "react";
import Image from "next/image";
const Steps = () => {
  return (
    <section className="div-cont mt-0 ">
      {/* <!-- headings  --> */}
      <div className="flex flex-col justify-center items-center gap-3 md:gap-4 mb-12 md:mb-16 px-4 md:px-0">
        <span className="text-primary font-semibold text-base md:text-lg">
          Start nå
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Hvordan det fungerer
        </h1>
      </div>

      {/* <!-- cards --> */}
      <div className="flex flex-col gap-8 justify-between md:flex-row pb-24 ">
        {/* <!-- card1 --> */}
        <div className="relative flex flex-col gap-2 justify-center items-center text-center group">
          <img
            className="w-44 hidden md:inline-block absolute top-[-14%] right-[-10%] -rotate-6"
            src="images/arrow.png"
            alt=""
          />
          <div className="bg-gray-50 p-4 md:p-6 rounded-full mb-3 md:mb-4 group-hover:bg-primary/10 transition-colors duration-300">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/images/1.svg"
                alt="Step 1"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold">
            Oppdag ditt neste kjøretøy
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Utforsk vårt bredte utvalg av biler på auksjonen. Med alt fra brukte biler til salgsbiler, finner du garantert noe som passer dine behov og budsjett.
          </p>
        </div>

        {/* <!-- card2 --> */}
        <div className="relative flex flex-col gap-2 justify-center items-center text-center group">
          <img
            className="w-44 hidden md:inline-block absolute bottom-[-30%] transform -scale-y-100 right-[-20%] rotate-12"
            src="images/arrow.png"
            alt=""
          />
          <div className="bg-gray-50 p-4 md:p-6 rounded-full mb-3 md:mb-4 group-hover:bg-primary/10 transition-colors duration-300">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/images/2.svg"
                alt="Step 2"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold">Legg inn ditt bud</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Når du har funnet bilen du ønsker, er det enkelt å legge inn et bud. Vår plattform gjør det sikkert og oversiktlig å delta på auksjonen.
          </p>
        </div>

        {/* <!-- card3 --> */}
        <div className="flex flex-col gap-2 justify-center items-center text-center group">
          <div className="bg-gray-50 p-4 md:p-6 rounded-full mb-3 md:mb-4 group-hover:bg-primary/10 transition-colors duration-300">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/images/3.png"
                alt="Step 3"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold">Bli den heldige vinneren</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Vinn auksjonen og fullfør kjøpet ryddig og trygt. Vi sørger for at alt går smidig, slik at du kan glede deg til din nye bil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;