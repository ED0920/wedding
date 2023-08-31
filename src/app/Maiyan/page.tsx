import React from "react";
import Image from "next/image";

const Mendhi = () => {
  return (
    <div className={""}>
      <div id={"hero"} className={"fixed h-screen w-full -z-10 opacity-20"}>
        <Image
          src="/SRF.png"
          alt="Sim and Ricky"
          layout="responsive"
          width={1819} // The original width of the image
          height={2573} // The original height of the image
        />
      </div>
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
    </div>
  );
};

export default Mendhi;
