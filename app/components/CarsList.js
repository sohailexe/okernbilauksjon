"use client";
import React, { useState, useEffect } from "react";
import LayoutControl from "./LayoutControl";
import Car from "./Car";
export const CarsList = ({ isHome }) => {
  const [layoutGrid, setLayoutGrid] = useState(true);

  console.log(layoutGrid);

  useEffect(() => {
    return () => {};
  }, [layoutGrid]);
  return (
    <>
      <LayoutControl isHome={isHome} setLayoutGrid={setLayoutGrid} />
      {/* <!-- Grid --> */}
      <div
        id="card-grid"
        className={`grid gap-6 gap-x-8 transition ${
          layoutGrid ? "md:grid-cols-2 lg:grid-cols-3" : " "
        }`}
      >
        <Car />
        <Car />
        <Car />
      </div>
    </>
  );
};
