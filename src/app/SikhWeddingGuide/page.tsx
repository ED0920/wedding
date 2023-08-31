"use client";
import useMobile from "@/hooks/useMobile";
import HamburgerMenu from "@/components/HamburgerMenu";
import Image from "next/image";
import React, { useState } from "react";

function Home() {
  const isMobile = useMobile();

  return (
    <main id="top" className={"flex flex-col bg-butterfly"}>
      <HamburgerMenu />

      {/*Schedule*/}
      <section
        className={"h-screen w-full text-center "}
        style={{ fontSize: "calc(8px + 2vmin)" }}
      >
        <h1
          id="top"
          className={
            "font-snell text-lavender text-center text-4xl  pt-16 pl-14 pr-14 pb-3"
          }
        >
          Is this your first Sikh Wedding?{" "}
        </h1>
        <section className={"pb-6 font-playfair text-lightGrey "}>
          <div className={"p-3"}>
            While we are incredibly honored to have our friends and family join
            us to celebrate our wedding day, we completely understand that this
            may be the first time some of you are visiting a Sikh temple and
            experiencing a Sikh wedding ceremony. We want to make this
            experience as comfortable as possible, so we've put together a list
            of helpful points to ease you into the process.{" "}
          </div>

          <h2 className={"py-3"}>CEREMONY DRESS CODE </h2>
          <div className={"p-3"}>
            Semi-formal and conservative attire is required for the ceremony at
            the temple.
          </div>

          <div className={"p-3"}>
            {" "}
            Our guests will be seated on the floor for the duration of the
            ceremony, so please dress comfortably. Suits or dress pants with
            shirts for the gents, below the knee dresses for the ladies. Skirts
            and pants are suitable too, whatever you are comfortable in. If you
            are interested in wearing an Indian outfit, we would recommend a
            kurta or sherwani for the gents & a salwar kameez sharara or
            anarkali for the ladies.
          </div>

          <h2 className={"py-3"}>HEADCOVER</h2>

          <div className={"p-3"}>
            At Sikh wedding ceremonies, both men and women will be required to
            cover their heads.
          </div>

          <div className={"p-3"}>
            {" "}
            Gents, you will be provided with a rumaal (bandana) to cover your
            head or you may bring your own. Hats and beanies are not considered
            acceptable forms of headwear.
          </div>

          <div className={"p-3"}>
            {" "}
            Ladies, we ask that you bring a scarf or shawl also referred to as a
            dupatta, to cover your head while you are at the temple. If you
            don't have one readily available, please let us know and this can be
            provided for you.
          </div>

          <h2 className={"py-3"}>WEDDING CEREMONY ETIQUETTE</h2>

          <div className={"p-3"}>
            At a Sikh temple everyone must remove their shoes upon entry. There
            are plenty of shelves where your shoes can be stowed. Feel free to
            walk barefoot or in socks during your time at the temple.
          </div>

          <div className={"p-3"}>
            When you enter the main prayer room upstairs, you will notice that
            members of the Sikh Community, will walk towards the altar at the
            front and bow (matha tek) before the Holy Book (Guru Granth Sahib).
            They then provide a small monetary donation for the Temple.
            Non-Sikhs are not obligated to bow or offer a donation. If you wish
            to participate, you are most welcome to do so. Alternatively, it's
            completely acceptable to enter and simply take a seat. Men and women
            sit on opposite sides of the Temple, so please be seated on your
            appropriate side.
          </div>

          <div className={"p-3"}> We hope you find this helpful.</div>
          <div className={"p-3"}>
            {" "}
            As always, please do not hesitate to contact us with any questions!{" "}
          </div>

          <h2 className={"text-lavender font-snell text-2xl pt-2"}>
            {" "}
            With love, Sim & Ricky
          </h2>
        </section>
        <h1
          id="top"
          className={
            "font-snell text-lavender text-center text-5xl  pt-6 pl-14 pr-14 pb-4"
          }
        >
          Sikh Wedding Guide{" "}
        </h1>
        <div className={"text-center inline-grid grid-cols-2 gap-0"}>
          <div className={"text-right border-r-3 border-lavender px-4 py-2"}>
            <h3 className={"font-snell text-lavender text-3xl"}>1. Arrival</h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Please remove shoes and cover your heads.
            </div>
          </div>
          <div className={"text-right border-l-4 border-lavender pb-2"}></div>
          <div
            className={"text-right border-r-3 border-lavender pr-4 pb-2"}
          ></div>
          <div className={"text-left border-l-4 border-lavender px-4 py-2"}>
            <h3 className={"font-snell text-lavender text-3xl"}>
              2. Morning Tea
            </h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Please enter the food hall on ground level where morning tea will
              be served. A selection of savoury and sweet Indian snack foods
              will be served with Chai (spiced tea).
            </div>
          </div>
          <div className={"text-right border-r-3 border-lavender px-4 py-2"}>
            <h3 className={" font-snell text-lavender text-3xl"}>
              3. Ceremony Commences
            </h3>
            <div className={"font-playfair text-lightGrey pb-1 "}>
              Please make your way upstairs, matha tek (bow) and take a seat.
              The ceremony will begin with Shadbad Kirtan (spiritual music). The
              Groom enters first and is seated before the Guru Granth Sahib (the
              Holy Book) shortly followed by the Bride.
            </div>
          </div>
          <div
            className={"text-left border-l-4 border-lavender pl-4 pb-2"}
          ></div>
          <div className={"border-r-3 border-lavender pr-4 pb-10"}></div>
          <div className={"text-left border-l-4 border-lavender px-4 py-2"}>
            <h3 className={"font-snell text-lavender text-3xl"}>
              4. Ardas - The First Prayer
            </h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              The first hymn - 'keeta loree-ai kam so harp ah akhial' is sung
              ushering the couple to always ask God for anything they wish to
              accomplish. The couple and their parents stand to request Gods
              support and blessing for the marriage.
            </div>
          </div>
          <div className={"text-right border-r-3 border-lavender px-4 py-2"}>
            <h3 className={"font-snell text-lavender text-3xl"}>
              5. Palle Di Rasam - Giving Away The Bride
            </h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              The father of the bride hands one end of the groom's shawl called
              the Palla to his daughter.
            </div>
          </div>
          <div className={"border-l-4 border-lavender"}></div>
          <div className={"border-r-3 border-lavender "}></div>
          <div className={"text-left border-l-4 border-lavender px-4 py-2"}>
            <h3 className={"font-snell text-lavender text-3xl"}>
              6. Laavan Phere - The Four Rotations
            </h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              The Laavan phere are four prayers sung as the couple moves in a
              clockwise direction around the Guru Granth Sahib.
            </div>
            <div className={"font-playfair text-lightGrey pb-1"}>
              1st Promise To love forever and let go of the past
            </div>
            <div className={"font-playfair text-lightGrey pb-1"}>
              2nd Promise To be devoted completely to one another
            </div>{" "}
            <div className={"font-playfair text-lightGrey pb-1"}>
              3rd Promise To be faithful to one another
            </div>{" "}
            <div className={"font-playfair text-lightGrey pb-1"}>
              4th Promise To be together and united with god
            </div>
          </div>
          <div className={"text-right border-r-3 border-lavender px-4 py-2"}>
            <h3 className={"font-snell text-lavender text-3xl"}>
              7. Ardaas - The Final Prayer
            </h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              The last Hymn - 'Vee-aa hoa mere baabula" is sung, signifying that
              the wedding ceremony is complete.
            </div>
          </div>
          <div className={"border-l-4 border-lavender pl-4 pb-2"}> </div>
          <div
            className={"text-right border-r-3 border-lavender pr-4 pb-2"}
          ></div>

          <div className={"text-left border-l-4 border-lavender px-4 py-2"}>
            <h3 className={"font-snell text-lavender text-3xl"}>
              8. Kara Parshad - A Sweet Offering
            </h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              A sweet pudding is given out to all the wedding guest. As a sign
              of respect, wedding guest must accept Kara Parashad sitting and
              with cupped hands.
            </div>
          </div>

          <div className={"text-right border-r-3 border-lavender px-4 py-2"}>
            <h3 className={" font-snell text-lavender text-3xl"}>
              9. Shagan - Blessing The Couple
            </h3>
            <div className={"font-playfair text-lightGrey pb-1 "}>
              The Bride and Groom's family will approach the seated newly
              married couple to bless them as they commence their new life.
            </div>
          </div>
          <div className={"border-l-4 border-lavender pl-4 pb-2"}> </div>
          <div
            className={"text-right border-r-3 border-lavender pr-4 pb-2"}
          ></div>
          <div className={"text-left border-l-4 border-lavender px-4 py-2"}>
            <h3 className={"font-snell text-lavender text-3xl"}>
              10. Guru Ka Langar - Lunch Service
            </h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Please make your way downstairs into the food hall where lunch
              will be served. A selection of vegetarian curries will be served
              with rice and roti(flat beard), accompanied with ralta (yogurt)
              and sweets.
            </div>
          </div>
          <div
            className={"text-right border-r-3 border-lavender pr-4 pb-2"}
          ></div>
        </div>
        <div className={"text-center pt-2 text-lavender py-5"}>
          <a href={"#top"}>Back To Top</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
