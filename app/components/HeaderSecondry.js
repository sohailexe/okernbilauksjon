import Image from "next/image";

export const HeaderSecondry = ({ img, heading, description }) => {
  return (
    <section id="hero" className="relative min-h-[60vh]">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={img}
            alt="Background Image"
            fill
            style={{ objectFit: "cover" }}
            className="blur-[1.5px]"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-20 blur-sm"></div>
      </div>
      <div className="absolute inset-5 sm:inset-17 md:inset-36 text-white text-center flex flex-col gap-4 md:gap-8 justify-center items-center">
        <h1 className="banner">{heading}</h1>
        <p className="uppercase">{description}</p>
      </div>
    </section>
  );
};
