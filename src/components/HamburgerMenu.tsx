import { stack as Menu } from "react-burger-menu";
import React from "react";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "24px",
    height: "20px",
    left: "32px",
    top: "32px",
  },
  bmBurgerBars: {
    background: "#B2648B",
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
    <div className={"text-lavender font-playfair text-4xl"}>
      <Menu styles={styles} width={"100%"}>
        <a id="home" href="/">
          Home
        </a>
        <a id="itinerary" href="/itinerary">
          Wedding Itinerary
        </a>
        <a id="sikhweddingguide" href="/SikhWeddingGuide">
          Sikh Wedding Guide
        </a>
        <a id="invitation" href="/Invitations">
          Invitations
        </a>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
