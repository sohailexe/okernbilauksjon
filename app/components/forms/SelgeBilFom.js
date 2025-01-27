"use client";
import { CheckBox } from "@/app/components/check-box/CheckBox";
import { useState } from "react";

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

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'kilometers':
        return !value || /^\d+$/.test(value) ? '' : 'Må kun inneholde tall';
      case 'model':
        return !value || /^\d{4}$/.test(value) ? '' : 'Må være et gyldig årstall (4 siffer)';
      case 'phone':
        return !value || /^\d{8}$/.test(value) ? '' : 'Må være et gyldig 8-sifret telefonnummer';
      case 'email':
        return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Må være en gyldig e-postadresse';
      case 'minimumPrice':
      case 'desiredPrice':
        return !value || /^\d+$/.test(value) ? '' : 'Må kun inneholde tall';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for numeric fields
    if (['kilometers', 'phone', 'minimumPrice', 'desiredPrice'].includes(name)) {
      if (value && !/^\d*$/.test(value)) {
        return; // Don't update if non-numeric value is entered
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      consent: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    // Additional required field validation
    ['regNo', 'kilometers', 'brand', 'model', 'fName', 'lName', 'email', 'phone', 'desiredPrice', 'minimumPrice'].forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Dette feltet er påkrevd';
      }
    });

    if (!formData.consent) {
      newErrors.consent = 'Du må godta vilkårene';
    }

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className="mx-auto w-full bg-white">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-x-6">
          <div className="mb-5">
            <label htmlFor="regNo" className="mb-3 block text-base font-medium text-[#07074D]">
              Registreringsnummer
            </label>
            <input
              type="text"
              name="regNo"
              id="regNo"
              placeholder="EX32452"
              value={formData.regNo}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${errors.regNo ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.regNo && <p className="mt-1 text-sm text-red-500">{errors.regNo}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="kilometers" className="mb-3 block text-base font-medium text-[#07074D]">
              Kilometerstand
            </label>
            <input
              type="text"
              name="kilometers"
              id="kilometers"
              placeholder="Kun tall"
              value={formData.kilometers}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${errors.kilometers ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.kilometers && <p className="mt-1 text-sm text-red-500">{errors.kilometers}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="brand" className="mb-3 block text-base font-medium text-[#07074D]">
              Bilmerke
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="eks. Toyota"
              value={formData.brand}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${errors.brand ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.brand && <p className="mt-1 text-sm text-red-500">{errors.brand}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="model" className="mb-3 block text-base font-medium text-[#07074D]">
              Årsmodell
            </label>
            <input
              type="text"
              name="model"
              id="model"
              placeholder="ÅÅÅÅ"
              value={formData.model}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${errors.model ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.model && <p className="mt-1 text-sm text-red-500">{errors.model}</p>}
          </div>

          <fieldset className="py-2 mb-5 mt-2">
            <legend className="block text-base font-medium text-[#07074D]">
              Fornavn og Etternavn
            </legend>
            <div className="flex gap-6">
              <div className="flex-1">
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Fornavn"
                  value={formData.fName}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${errors.fName ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
                />
                {errors.fName && <p className="mt-1 text-sm text-red-500">{errors.fName}</p>}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Etternavn"
                  value={formData.lName}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${errors.lName ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
                />
                {errors.lName && <p className="mt-1 text-sm text-red-500">{errors.lName}</p>}
              </div>
            </div>
          </fieldset>

          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              E-post
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="navn@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Telefonnummer
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="8 siffer"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="minimumPrice" className="mb-3 block text-base font-medium text-[#07074D]">
              Hva er minstepris?
            </label>
            <input
              type="text"
              name="minimumPrice"
              id="minimumPrice"
              placeholder="Kun tall"
              value={formData.minimumPrice}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${errors.minimumPrice ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.minimumPrice && <p className="mt-1 text-sm text-red-500">{errors.minimumPrice}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="desiredPrice" className="mb-3 block text-base font-medium text-[#07074D]">
              Ønsket pris
            </label>
            <input
              type="text"
              name="desiredPrice"
              id="desiredPrice"
              placeholder="Kun tall"
              value={formData.desiredPrice}
              onChange={handleInputChange}
              className={`w-full rounded-md border ${errors.desiredPrice ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.desiredPrice && <p className="mt-1 text-sm text-red-500">{errors.desiredPrice}</p>}
          </div>
        </div>

        <div className="flex gap-3 my-3">
          <CheckBox
            name="consent"
            isChecked={formData.consent}
            onChange={handleCheckboxChange}
          />
          <p className="text-sm text-gray-500">Ønsker du å selge?</p>
          {errors.consent && <p className="text-sm text-red-500">{errors.consent}</p>}
        </div>

        <button className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-white border border-primary hover:border-black hover:shadow-xl hover:text-black transition ease-linear active:translate-y-0.5 active:shadow-none">
          Send Inn
        </button>
      </form>
    </div>
  );
};