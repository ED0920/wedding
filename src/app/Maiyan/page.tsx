"use client";
import React from "react";
import CenteredItinerary from "@/components/CenteredItinerary";
import dynamic from "next/dynamic";

const Maiyan = () => {
  return (
    <CenteredItinerary>
      <div className={"text-center text-lightGrey"}>
        <div className={"font-snell text-lavender text-3xl "}>
          The Sohi Family
        </div>
        <div className={"font-playfair p-3"}>
          request your company for a morning to bless their daughter{" "}
        </div>
        <div className={"font-snell text-lavender text-4xl p-4"}>
          Simerpreet
        </div>

        <div className={"font-snell text-lavender p-3 text-3xl"}>
          At the Maiyan Ceremony
        </div>
        <div>|</div>
        <div className={" font-playfair  p-3"}>On Thursday 7th September</div>

        <div className={" font-playfair  pb-3"}>10am</div>
        <div>|</div>
        <div className={"font-snell text-2xl text-lavender p-3"}>
          To Be Held At
        </div>

        <div className={"font-playfair "}>The Sohi Residance</div>
        <div className={"font-playfair  p-3"}>
          23 Clarence Cres | Coffs Harbour | NSW 2450
        </div>
      </div>
    </CenteredItinerary>
  );
};

export default dynamic(() => Promise.resolve(Maiyan), {
  ssr: false,
});
