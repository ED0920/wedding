import React from "react";
import Image from "next/image";

const Anand = () => {
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
    </div>
  );
};

export default Anand;
