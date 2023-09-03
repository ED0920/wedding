"use client";
import React from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Background from "@/components/Background";

const opacity = 50;
const Mendhi = () => {
  return (
    <div>
      <div id={"hero"} className={"fixed h-screen w-full -z-10 opacity-10 "}>
        <Background />
      </div>
      <NavBar />
      <div className={"flex flex-nowrap"}>
        <div
          className={"font-snell text-lavender pt-4 text-2xl flex-grow"}
        ></div>
      </div>
      <div className={"text-center text-lightGrey p-10 "}>
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

        <div className={"font-playfair "}>The Sohi Residance</div>
        <div className={"font-playfair  p-3"}>
          23 Clarence Cres | Coffs Harbour | NSW 2450
        </div>
      </div>
    </div>
  );
};

export default Mendhi;
