"use client";
import React from "react";
import CenteredItinerary from "@/components/CenteredItinerary";

const Mendhi = () => {
  return (
    <CenteredItinerary>
      <div className={"text-center text-lightGrey p-10 "}>
        <div className={"font-snell text-lavender text-3xl "}>
          The Newlywed Couple
        </div>
        <div className={"font-playfair p-3"}>
          together with their familes request the pleasure of your company at
          their wedding reception{" "}
        </div>
        <div className={"font-snell text-lavender text-4xl p-4"}>
          Simerpreet & Ricky
        </div>

        <div>|</div>
        <div className={" font-playfair  p-3"}>
          On Saturday 9th September 2023
        </div>

        <div className={" font-playfair  pb-3"}>1:30pm</div>
        <div>|</div>
        <div className={"font-snell text-2xl text-lavender p-3"}>
          To Be Held At
        </div>

        <div className={"font-playfair "}>Coffs Harbour Race Course</div>
        <div className={"font-playfair  p-3"}>
          62 Howard St | Coffs Harbour | NSW 2450
        </div>
        <div className={"font-snell text-2xl text-lavender p-3"}>
          Followed By
        </div>

        <div className={"font-playfair "}>Doli from The Sohi Residence</div>
        <div className={"font-playfair  p-3"}>
          23 Clarence Cres | Coffs Harbour | NSW 2450
        </div>
      </div>
    </CenteredItinerary>
  );
};

export default Mendhi;
