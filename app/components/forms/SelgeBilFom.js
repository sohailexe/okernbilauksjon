"use client";
import { CheckBox } from "@/app/components/check-box/CheckBox";
import { useState } from "react";
import { log } from "next/dist/server/typescript/utils";
import colors from "tailwindcss/colors";
export const SelgeBilFom = () => {
  const [formData, setFormData] = useState({
    regNo: "",
    kilometers: "",
    brand: "",
    model: "",
    fName: "",
    lName: "",
    email: "",
    phone: "",
    minimumPrice: "",
    desiredPrice: "",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      consent: checked,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="mx-auto w-full  bg-white ">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-x-6">
            <div className="mb-5">
              <label
                htmlFor="regNo"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Registreringsnummer
              </label>
              <input
                type="text"
                name="regNo"
                id="regNo"
                placeholder="EX32452"
                value={formData.regNo}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="kilometers"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Kilometerstand
              </label>
              <input
                type="text"
                name="kilometers"
                id="kilometers"
                placeholder=""
                value={formData.kilometers}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="brand"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Bilmerke
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                placeholder=""
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md "
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="model"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Årsmodell
              </label>
              <input
                type="text"
                name="model"
                id="model"
                placeholder=""
                value={formData.model}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <fieldset className="py-2 mb-5 mt-2">
              <legend className="block text-base font-medium text-[#07074D] ">
                Fornavn og Etternavn
              </legend>
              <div className="flex gap-6">
                <div>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Fornavn"
                    value={formData.fName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Etternavn"
                    value={formData.lName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
              </div>
            </fieldset>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                E-post
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Telefonnummer
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder=""
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="minimumPrice"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Hva er minstepris?
              </label>
              <input
                type="number"
                name="minimumPrice"
                id="minimumPrice"
                placeholder=""
                value={formData.minimumPrice}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="desiredPrice"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Hva er minstepris?
              </label>
              <input
                type="number"
                name="desiredPrice"
                id="desiredPrice"
                placeholder=""
                value={formData.desiredPrice}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
              />
            </div>
          </div>

          <div className=" flex gap-3 my-3">
            <CheckBox
              name="concent"
              isChecked={formData.consent}
              onChange={handleCheckboxChange}
            />
            <p className="text-sm text-gray-500">Ønsker du å selge?</p>
          </div>
          <div>
            <button className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-white border border-primary hover:border-black hover:shadow-xl  hover:text-black  transition ease-linear active:translate-y-0.5  active:shadow-none">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
