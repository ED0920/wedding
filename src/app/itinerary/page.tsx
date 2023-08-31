"use client";
import React from "react";
import HamburgerMenu from "@/components/HamburgerMenu";

const ItineraryPage = () => {
  return (
    <div className={"bg-butterfly text-center py-16 text-lavender"}>
      <HamburgerMenu />
      <h1 className={"font-snell text-5xl py-10"}> Wedding Itineray </h1>
      <div className={"py-3 bg-white m-0"}>
        <a href={"/Mendhi"}>
          {" "}
          <div className={"font-snell text-3xl"}>Mendhi</div>
          <div className={"font-playfair text-lightGrey"}>
            Wednesday 6th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3 bg-white m-3"}>
        <a href={"/Maiyan"}>
          {" "}
          <div className={"font-snell text-3xl"}>Maiyaan</div>
          <div className={"font-playfair text-lightGrey"}>
            {" "}
            Thursday 7th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3 bg-white m-3"}>
        <a href={"/Sangeet"}>
          {" "}
          <div className={"font-snell text-3xl"}>Ladies Sangeet</div>
          <div className={"font-playfair text-lightGrey"}>
            Thursday 7th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3 bg-white m-3"}>
        <a href={"/Choora"}>
          {" "}
          <div className={"font-snell text-3xl"}>Choora Ceremony</div>
          <div className={"font-playfair text-lightGrey"}>
            Friday 8th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3 bg-white m-3"}>
        <a href={"/Anand"}>
          {" "}
          <div className={"font-snell text-3xl"}>Anand Karaj</div>
          <div className={"font-playfair text-lightGrey"}>
            Saturday 9th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3 bg-white m-3"}>
        <a href={"/Reception"}>
          {" "}
          <div className={"font-snell text-3xl"}>Reception</div>
          <div className={"font-playfair text-lightGrey"}>
            Saturday 9th September 2023
          </div>
        </a>
      </div>

      {/*<div className={"py-3 px-6 bg-w m-3"}>*/}
      {/*  <a href={"/SikhWeddingGuide"}>*/}
      {/*    <div className={"font-snell text-3xl"}>Sikh Wedding</div>*/}
      {/*    <div className={"font-snell text-3xl"}>Ceremony Guide</div>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
};

export default ItineraryPage;
