"use client";
import { BrandItem } from "@/app/components/shop-controls/model-list/BrandItem";
import { Brand } from "@/app/components/shop-controls/model-list/Brand";
import { useState } from "react";
export const BrandList = () => {
  const [active, setActive] = useState(null);

  return (
    <div id="car-search-by-brand-name" className="mb-8 text-sm">
      {/*// <!-- Brands List -->*/}
      <Brand name="Audi" num={6} id={1} active={active} setActive={setActive}>
        <BrandItem name="kasjd" />
        <BrandItem name="kasjd" />
        <BrandItem name="kasjd" />
      </Brand>

      <Brand name="Audi" num={6} id={2} active={active} setActive={setActive}>
        <BrandItem name="kasjd" />
        <BrandItem name="kasjd" />
      </Brand>
    </div>
  );
};
