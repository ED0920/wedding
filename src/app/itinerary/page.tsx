"use client";
import React from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import NavMenu from "@/components/NavMenu";
import NavBar from "@/components/NavBar";

const ItineraryPage = () => {
  return (
    <div className={"bg-butterfly text-center py-2 text-lavender"}>
      <NavBar />
      <h1 className={"font-snell text-5xl py-16"}> Wedding Itineray </h1>
      <div className={"py-3  m-0 hover:bg-white transition-all"}>
        <a href={"/Mendhi"}>
          {" "}
          <div className={"font-snell text-3xl "}>Mendhi</div>
          <div className={"font-playfair text-lightGrey"}>
            Wednesday 6th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3  m-3 hover:bg-white"}>
        <a href={"/Maiyan"}>
          {" "}
          <div className={"font-snell text-3xl"}>Maiyaan</div>
          <div className={"font-playfair text-lightGrey"}>
            {" "}
            Thursday 7th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3  m-3 hover:bg-white"}>
        <a href={"/Sangeet"}>
          {" "}
          <div className={"font-snell text-3xl"}>Ladies Sangeet</div>
          <div className={"font-playfair text-lightGrey"}>
            Thursday 7th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3 m-3 hover:bg-white"}>
        <a href={"/Choora"}>
          {" "}
          <div className={"font-snell text-3xl"}>Choora Ceremony</div>
          <div className={"font-playfair text-lightGrey"}>
            Friday 8th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3 m-3 hover:bg-white"}>
        <a href={"/Anand"}>
          {" "}
          <div className={"font-snell text-3xl"}>Anand Karaj</div>
          <div className={"font-playfair text-lightGrey"}>
            Saturday 9th September 2023
          </div>
        </a>
      </div>

      <div className={"py-3 m-3 hover:bg-white"}>
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
