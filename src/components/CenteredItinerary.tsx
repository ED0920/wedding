import React, { ReactNode } from "react";
import Background from "@/components/Background";
import NavBar from "@/components/NavBar";

const CenteredItinerary = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div id={"hero"} className={"fixed h-screen w-full -z-10 opacity-10"}>
        <Background />
      </div>
      <NavBar />
      <div className={"h-screen flex items-center justify-center"}>
        {children}
      </div>
    </div>
  );
};

export default CenteredItinerary;
