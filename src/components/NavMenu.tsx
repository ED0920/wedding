import React from "react";
const NavMenu = () => {
  return (
    <div
      className={
        "flex flex-nowrap gap-10 pt-10 justify-center text-2xl font-playfair text-lavender"
      }
    >
      <a className={""} href="/">
        {" "}
        Home
      </a>

      <a href="/itinerary"> Wedding Itinerary</a>

      <a href="/SikhWeddingGuide"> Sikh Wedding Guide </a>

      <a href="/Invitations.pdf">Invitations</a>
    </div>
  );
};

export default NavMenu;
