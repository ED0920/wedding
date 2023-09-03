"use client";
import React from "react";
import CenteredItinerary from "@/components/CenteredItinerary";
import dynamic from "next/dynamic";

const Anand = () => {
  return (
    <CenteredItinerary>
      <div className={"text-center text-lightGrey p-10"}>
        <div className={"font-snell text-lavender text-3xl "}>
          The Sohi Family
        </div>
        <div className={"font-playfair p-3"}>
          request the pleasure of your company on this occasion of their beloved
          daughter & son in law{" "}
        </div>
        <div className={"font-snell text-lavender text-4xl p-4"}>
          Simerpreet & Ricky
        </div>

        <div className={"font-snell text-lavender p-3 text-3xl"}>Ceremoney</div>
        <div>|</div>

        <div className={" font-playfair  p-3"}>
          On Saturday 9th September 2023
        </div>

        <div className={" font-playfair  pb-3"}>9am</div>
        <div>|</div>
        <div className={"font-snell text-2xl text-lavender p-3"}>
          To Be Held At
        </div>

        <div className={"font-playfair "}>Guru Nanak Sikh Gurudwara</div>
        <div className={"font-playfair  p-3"}>
          River St | Woolgoolga | NSW 2456
        </div>
      </div>
    </CenteredItinerary>
  );
};

export default dynamic(() => Promise.resolve(Anand), {
  ssr: false,
});
