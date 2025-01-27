import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
function Car(props) {
    return (

    <div className="car-card w-full rounded-xl overflow-hidden bg-slate-100 shadow-xl">
        <div id="img" className="overflow-hidden relative">
            <img
                className="w-full border hover:scale-105 transition ease-linearl object-cover"
                src="images/2car.jpg"
                alt=""
            />
            <a
                href=""
            >
                <FontAwesomeIcon className="rounded-lg hover:bg-primary py-3 px-3 text-white absolute bottom-2 right-2" icon={faEye} />
            </a>
        </div>

        <div className="pl-4 pt-3">
            <a className="font-semibold text-xl hover:text-primary">Audi RS3</a>
            <p>2020 · 18 175 km · 1 598 cm3 · Hibrid</p>
            <p className="font-light mt-5 mb-14 md:mb-5">Auction Ended</p>
        </div>
    </div>

    );
}

export default Car;