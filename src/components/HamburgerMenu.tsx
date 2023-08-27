import { stack as Menu } from "react-burger-menu";
import React from "react";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "pink",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "rgb(255, 251, 250)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    textAlign: "center",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    display: "inline-block",
    paddingTop: "1em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const HamburgerMenu = () => {
  return (
    <div className={"text-lavender text-3xl w-[20px] h-[20px]"}>
      <Menu styles={styles} width={"100%"}>
        <a id="home" href="/">
          Home
        </a>
        <a id="home" href="/">
          Wedding Itinerary
        </a>
        <a id="about" href="/SikhWeddingGuide">
          Sikh Wedding Guide
        </a>
        <a id="contact" href="/Invitations">
          Invitations
        </a>
        <a id="contact" href="/contact">
          Contact
        </a>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
