"use client";
import React from "react";
import CenteredItinerary from "@/components/CenteredItinerary";
import dynamic from "next/dynamic";

const Sangeet = () => {
  return (
    <CenteredItinerary>
      <div className={"text-center text-lightGrey"}>
        <div className={"font-snell text-lavender text-3xl "}>
          The Sohi Family
        </div>
        <div className={"font-playfair p-3"}>
          cordially invite you to celebrate their Daughter & Sister{" "}
        </div>
        <div className={"font-snell text-lavender text-4xl p-4"}>
          Simerpreet's
        </div>

        <div className={"font-snell text-lavender p-3 text-3xl"}>
          Ladies Sangeet!
        </div>
        <div>|</div>
        <div className={" font-playfair  p-3"}>Join us for an evening of</div>
        <div className={" font-playfair  p-3"}>
          Music, Dance and Great Company
        </div>
        <div className={" font-playfair  p-3"}>
          On Thursday 7th September 2023
        </div>

        <div className={" font-playfair  pb-3"}>6pm</div>
        <div>|</div>
        <div className={"font-snell text-2xl text-lavender p-3"}>
          To Be Held At
        </div>

        <div className={"font-playfair "}>Coffs Harbour Race Course</div>
        <div className={"font-playfair  p-3"}>
          62 Howard St | Coffs Harbour | NSW 2450
        </div>
      </div>
    </CenteredItinerary>
  );
};

export default dynamic(() => Promise.resolve(Sangeet), {
  ssr: false,
});
