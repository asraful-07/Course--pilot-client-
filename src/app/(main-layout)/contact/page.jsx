import Contact from "@/app/components/Contact/Contact";
import FAQ from "@/app/components/Contact/FAQ";
import Map from "@/app/components/Contact/Map";
import React from "react";

const page = () => {
  return (
    <div>
      <Map />
      <Contact />
      <FAQ />
    </div>
  );
};

export default page;
