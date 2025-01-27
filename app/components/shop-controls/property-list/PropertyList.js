"use client";
import { Property } from "@/app/components/shop-controls/property-list/Property";
import { PropertyItem } from "@/app/components/shop-controls/property-list/PropertyItem";
import { useState } from "react";
export const PropertyList = () => {
  const [active, setActive] = useState(null);
  return (
    <div id="car-search-by-property">
      <Property id={1} name="car" active={active} setActive={setActive}>
        <PropertyItem>sdjj</PropertyItem>
      </Property>

      <Property id={2} name="car2" active={active} setActive={setActive}>
        <PropertyItem>sdjj</PropertyItem>
        <PropertyItem>sdjj</PropertyItem>
        <PropertyItem>sdjj</PropertyItem>
      </Property>
    </div>
  );
};
