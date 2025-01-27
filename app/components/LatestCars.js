import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faClock, faGasPump, faCar, faRoad, faCalendar } from "@fortawesome/free-solid-svg-icons";

const LatestCars = () => {
  const latestCars = [
    {
      id: 1,
      name: "Mercedes-Benz AMG GT",
      image: "/images/amg.jpg",
      year: 2023,
      mileage: "5,000 km",
      engine: "4.0L V8",
      type: "Petrol",
      price: "€125,000"
    },
    {
      id: 2,
      name: "BMW M4 Competition",
      image: "/images/2car.jpg",
      year: 2023,
      mileage: "8,500 km",
      engine: "3.0L I6",
      type: "Petrol",
      price: "€95,000"
    },
    {
      id: 3,
      name: "Audi RS e-tron GT",
      image: "/images/c.png",
      year: 2023,
      mileage: "3,200 km",
      engine: "Electric",
      type: "Electric",
      price: "€135,000"
    }
  ];

  return (
    <section className="bg-white">
      <div className="div-cont">
        <div className="flex flex-col items-center mb-8 md:mb-12 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">
            Latest Arrivals
          </h2>
          <p className="text-gray-600 text-center max-w-2xl text-sm md:text-base">
            Discover our newest additions - premium vehicles that have just
            arrived at our showroom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {latestCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-medium shadow-lg">
                    New Arrival
                  </span>
                </div>
                <Link
                  href={`/cars/${car.id}`}
                  className="absolute bottom-4 right-4 bg-black/70 hover:bg-primary rounded-lg p-2 md:p-3 text-white transition-colors duration-300 shadow-lg"
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-sm md:text-base"
                  />
                </Link>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <Link
                    href={`/cars/${car.id}`}
                    className="text-lg md:text-xl font-bold hover:text-primary transition-colors duration-200"
                  >
                    {car.name}
                  </Link>
                  <p className="text-primary font-bold text-sm md:text-base">
                    {car.price}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-gray-400"
                    />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faRoad} className="text-gray-400" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCar} className="text-gray-400" />
                    <span>{car.engine}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faGasPump}
                      className="text-gray-400"
                    />
                    <span>{car.type}</span>
                  </div>
                </div>

                <div className="flex items-center text-xs md:text-sm text-gray-500 pt-3 md:pt-4 border-t">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  <span>Added 2 days ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <Link
            href="/vare-biler"
            className="btn-primary hover:scale-105 text-sm md:text-base w-full md:w-auto mx-4 md:mx-0 text-center"
          >
            View All Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCars;