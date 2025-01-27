import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CircleCheckBig, ClipboardType, KeySquare } from "lucide-react";
const AuctionProcessWorks = () => {
  return (
    <section className="div-cont mb-0  pt-10  ">
      {/* <!-- headings  --> */}
      <div className="flex flex-col justify-center items-center gap-2 mb-12 ">
        <h1 className="text-4xl max-w-3xl text-center font-semibold">
          Hvordan fungerer det å selge bil hos Økern Bilauksjon?
        </h1>
      </div>

      {/* <!-- cards --> */}
      <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-8 justify-between md:flex-row ">
        {/* <!-- card1 --> */}
        <div className="relative flex flex-col gap-2 justify-center items-center text-center">
          <span className="text-4xl text-primary px-5 py-5 bg-orange-100 rounded-3xl">
            <ClipboardType color="red" size={36} />
          </span>
          <h2 className="text-xl font-semibold">lorem ipsum </h2>
          <p className="font-light text-sm">
            Search inventory of more than salvage used vehicles. Aliquam
            sagittis pellentesque turpis
          </p>
        </div>

        {/* <!-- card2 --> */}
        <div className="relative flex flex-col gap-2 justify-center items-center text-center mt-5">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-4xl text-primary px-5 py-5 bg-orange-100 rounded-3xl"
          />
          <h2 className="text-xl font-semibold">Lorem, ipsum dolor.</h2>
          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            laboriosam perferendis sunt,
          </p>
        </div>

        {/* <!-- card3 --> */}
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <span className="text-4xl text-primary px-5 py-5 bg-orange-100 rounded-3xl">
            <KeySquare color="red" size={36} />
          </span>
          <h2 className="text-xl font-semibold">Lorem3, ipsum dolor</h2>
          <p className="font-light text-sm">
            Search inventory of more than salvage used vehicles.Lorem ipsum n
            salvage used vehicl
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <span className="text-4xl text-primary px-5 py-5 bg-orange-100 rounded-3xl">
            <CircleCheckBig color="red" size={36} />
          </span>

          <h2 className="text-xl font-semibold">than salvage used</h2>
          <p className="font-light text-sm">
            More than salvage used vehicles. Aliquam sagittis pellentesque
            turpis egestas tincidunt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuctionProcessWorks;
