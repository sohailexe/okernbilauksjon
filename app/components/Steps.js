import React from "react";
import Image from "next/image";
const Steps = () => {
  return (
    <section className="div-cont mt-0 ">
      {/* <!-- headings  --> */}
      <div className="flex flex-col justify-center items-center gap-3 md:gap-4 mb-12 md:mb-16 px-4 md:px-0">
        <span className="text-primary font-semibold text-base md:text-lg">
          Start now
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          How it Works
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
            Registration and Account
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Search inventory of more than salvage used vehicles. Get started by
            creating your account in just a few simple steps.
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
          <h2 className="text-xl md:text-2xl font-bold">Browse and Bid</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Explore our extensive collection of vehicles and place your bids on
            the ones that interest you most.
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
          <h2 className="text-xl md:text-2xl font-bold">Win and Purchase</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Win the auction and complete your purchase with our secure and
            straightforward process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
