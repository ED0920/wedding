import useMobile from "@/hooks/useMobile";
import HamburgerMenu from "@/components/HamburgerMenu";
import NavMenu from "@/components/NavMenu";
import React from "react";

const NavBar = () => {
  const isMobile = useMobile();
  if (isMobile) {
    return <HamburgerMenu />;
  } else {
    return <NavMenu />;
  }
};
export default NavBar;
