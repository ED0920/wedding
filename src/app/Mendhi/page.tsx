"use client";
import React from "react";
import CenteredItinerary from "@/components/CenteredItinerary";
import dynamic from "next/dynamic";

const Mendhi = () => {
  return (
    <CenteredItinerary>
      <div className={"text-center text-lightGrey "}>
        <div className={"font-snell text-lavender text-3xl "}>
          The Sohi Family
        </div>
        <div className={"font-playfair p-3"}>
          extends a heartfelt invitation to join in celebrating the cherished
          Daughter and Sister{" "}
        </div>
        <div className={"font-snell text-lavender text-4xl p-4"}>
          Simerpreet's
        </div>

        <div className={"font-snell text-lavender p-3 text-3xl"}>Mendhi</div>
        <div>|</div>
        <div className={" font-playfair  p-3"}>
          On Wednesday 6th September 2023
        </div>

        <div className={" font-playfair  pb-3"}>3pm</div>
        <div>|</div>
        <div className={"font-snell text-2xl text-lavender p-3"}>
          To Be Held At
        </div>

        <div className={"font-playfair "}>The Sohi Residence</div>
        <div className={"font-playfair  p-3"}>
          23 Clarence Cres | Coffs Harbour | NSW 2450
        </div>
      </div>
    </CenteredItinerary>
  );
};

export default dynamic(() => Promise.resolve(Mendhi), {
  ssr: false,
});
