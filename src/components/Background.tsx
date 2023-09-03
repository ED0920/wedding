import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";

const Background = () => {
  const isMobile = useMobile();
  if (isMobile) {
    return (
      <div className={"max-h-full"}>
        <Image
          src="/ceremony_cartoon.png"
          alt="Sim and Ricky"
          layout="responsive"
          width={1819} // The original width of the image
          height={2573} // The original height of the image
        />
        <div className={"text-lavender font-snell text-center text-6xl pt-20 "}>
          Sim & Ricky
        </div>
        <div className={"text-chloe font-snell text-center text-2xl pt-6"}>
          {" "}
          when two become one
        </div>
      </div>
    );
  } else {
    return (
      <div className={"flex items-end h-full"}>
        <Image
          src="/Sim.png"
          alt="Sim and Ricky"
          layout="responsive"
          width={1819} // The original width of the image
          height={2573} // The original height of the image
        />
      </div>
    );
  }
};

export default Background;
