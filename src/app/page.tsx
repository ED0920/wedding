"use client";
import useMobile from "@/hooks/useMobile";
import React, { useEffect, useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import Image from "next/image";
import NavMenu from "@/components/NavMenu";
import dynamic from "next/dynamic";

const MINIMUM_OPACITY = 90;

function Home() {
  const isMobile = useMobile();
  const [opacity, setOpacity] = useState("100%");

  useEffect(() => {
    const handleScroll = () => {
      const scrollAmount = window.scrollY;
      const amountToMinus = Math.min(scrollAmount / 10, MINIMUM_OPACITY);
      setOpacity(`${100 - amountToMinus}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id="title" className={"flex flex-col"}>
      {isMobile ? <HamburgerMenu /> : <NavMenu />}

      <div
        className={
          "text-chloe font-snell text-center align-bottom justify-end text-2xl pt-6"
        }
      ></div>
      <div
        id={"hero"}
        className={"fixed h-screen w-full -z-10"}
        style={{ opacity: opacity }}
      >
        {isMobile ? (
          <>
            <Image
              src="/ceremony_cartoon.png"
              alt="Sim and Ricky"
              layout="responsive"
              width={1819} // The original width of the image
              height={2573} // The original height of the image
            />
            <div
              className={"text-lavender font-snell text-center text-6xl pt-20 "}
            >
              Sim & Ricky
            </div>
            <div className={"text-chloe font-snell text-center text-2xl pt-6"}>
              {" "}
              when two become one
            </div>
          </>
        ) : (
          <div className={"flex items-end h-full"}>
            <div className={"absolute top-[2%] text-center w-full"}>
              {/*<div*/}
              {/*  className={*/}
              {/*    "text-lavender font-snell text-center text-6xl pt-20 "*/}
              {/*  }*/}
              {/*>*/}
              {/*  Sim & Ricky*/}
              {/*</div>*/}
            </div>
            <Image
              src="/SimFlower.png"
              alt="Sim and Ricky"
              layout="responsive"
              width={1819} // The original width of the image
              height={2573} // The original height of the image
            />
          </div>
        )}
      </div>

      <section className={"h-screen"} />
      <section className={"h-screen text-center pr-2 pl-2 text-lightGrey"}>
        <h3 className={"font-playfair text-lightGrey pt-2 "}>
          SARDAR HARINDER SINGH SOHI & SARDARNI MANJIT KAUR SOHI
        </h3>
        <div className={" p-2 font-playfair "}>
          request the pleasure of your company on the auspicious occasion fo the
          wedding ceremony of their beloved daughter
        </div>
        <h1 className={"font-snell text-lavender text-4xl pt-2 pb-2"}>
          Simerpreet Kaur Sohi
        </h1>
        <div className={"font-playfair "}>
          Granddaughter of Late S. Ajit Singh & Late Sdn. Parkash Kaur Sohi
        </div>
        <div className={"font-snell text-2xl py-2"}>with</div>
        <h1 className={"font-snell text-lavender text-4xl pt-2 pb-2"}>
          Ricky Gurpreet Singh Johal
        </h1>
        <div className={"text-lightGrey font-playfair pt-2 pb-2"}>
          Son of Sardar Don Manjeet Singh Johal and Sardarni Jasbir Kaur Johal
        </div>
        <div>|</div>
        <h4 className={"font-playfair text-lavender pt-2 "}>
          ON SATURDAY 9TH SEPTEMBER 2023
        </h4>
        <div className={"text-lightGrey font-playfair"}>
          At Guru Nanak Sikh Gurdwara
        </div>
        <div className={"text-lightGrey font-playfair "}>
          River St | Woolgoolga | NSW 2456
        </div>
        <div>|</div>
        <h4 className={"text-lavender font-playfair  pt-2 pb-2"}>PROGRAMME</h4>
        <div className={"text-lightGrey font-playfair"}>
          Milni 9am | Morning Tea 10am | Anand Karag 10:30am{" "}
        </div>
      </section>

      {/*Schedule*/}
      <section id="weddingitinerary" className={"h-screen w-full text-center "}>
        <h1 className={"font-snell text-lavender text-center text-5xl pb-6"}>
          Itinerary{" "}
        </h1>
        <div className={"text-center inline-grid grid-cols-2 gap-0"}>
          <div className={"text-right border-r-3 border-lavender pr-4 pb-2"}>
            <a href={"/Mendhi"}>
              <h3 className={"font-snell text-lavender text-2xl"}>Mendhi</h3>
            </a>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Wednesday 6th September
            </div>
            <div className={"text-lightGrey text-xs"}>
              3pm | The Sohi Residence
            </div>
            <div className={"text-lightGrey text-xs"}>
              23 Clarence Cres, Coffs Harbour
            </div>
          </div>
          <div className={"text-right border-l-4 border-lavender pb-2"}></div>
          <div
            className={"text-right border-r-3 border-lavender pr-4 pb-2"}
          ></div>
          <div className={"text-left border-l-4 border-lavender pl-4 pb-2"}>
            <a href={"/Maiyan"}>
              {" "}
              <h3 className={"font-snell text-lavender text-2xl"}>Maiyan</h3>
            </a>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Thursday 7th September
            </div>
            <div className={"text-lightGrey text-xs"}>
              10am | The Sohi Residence
            </div>
            <div className={"text-lightGrey text-xs"}>
              23 Clarence Cres, Coffs Harbour
            </div>
          </div>
          <div className={"text-right border-r-3 border-lavender pr-4 pb-2"}>
            <a href={"/Choora"}>
              {" "}
              <h3 className={"font-snell text-lavender text-2xl"}>
                Choora Ceremony
              </h3>
            </a>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Friday 8th September
            </div>
            <div className={"text-lightGrey text-xs"}>
              5pm | The Sohi Residence
            </div>
            <div className={"text-lightGrey text-xs"}>
              23 Clarence Cres, Coffs Harbour
            </div>
          </div>
          <div
            className={"text-left border-l-4 border-lavender pl-4 pb-2"}
          ></div>
          <div className={"border-r-3 border-lavender pr-4 pb-10"}></div>
          <div className={"text-left border-l-4 border-lavender pl-4 pb-2"}>
            <a href={"/Choora"}>
              {" "}
              <h3 className={"font-snell text-lavender text-2xl"}>Jaggo</h3>
            </a>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Friday 8th September
            </div>
            <div className={"text-lightGrey text-xs"}>
              7pm | The Sohi Residence
            </div>
            {/* <div>{location}</div> */}
            <div className={"text-lightGrey text-xs"}>
              23 Clarence Cres, Coffs Harbour
            </div>
          </div>
          <div className={"text-right border-r-3 border-lavender pr-4 pb-2"}>
            <a href={"/Anand"}>
              {" "}
              <h3 className={"font-snell text-lavender text-2xl"}>
                Anand Kara
              </h3>
            </a>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Saturday 9th September
            </div>
            <div className={"text-lightGrey text-xs"}>
              9am | Guru Nanak Sikh Gurudwarae
            </div>
            <div className={"text-lightGrey text-xs"}>
              River St, Woolgoolga NSW 2456
            </div>
            <h5 className={"text-lightGrey text-xs pt-4"}>9am | Milni</h5>
            <h5 className={"text-lightGrey text-xs"}>10am | MORNING TEA</h5>
            <h5 className={"text-lightGrey text-xs"}>10:30am | ANAND KARAJ</h5>
          </div>
          <div className={"border-l-4 border-lavender"}></div>
          <div className={"border-r-3 border-lavender "}></div>
          <div className={"text-left border-l-4 border-lavender pl-4 pb-2"}>
            <a href={"/Reception"}>
              {" "}
              <h3 className={"font-snell text-lavender text-2xl"}>Reception</h3>
            </a>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Saturday 9th September
            </div>
            <div className={"text-lightGrey text-xs"}>1:30pm | C.EX COFFS</div>
            <div className={"text-lightGrey text-xs"}>
              2-6 Vernon st, Coffs Harbour NSW 2450
            </div>
          </div>
          <div className={"text-right border-r-3 border-lavender pr-4 pb-2"}>
            <h3 className={"font-snell text-lavender text-2xl"}>Doli</h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Saturday 9th September
            </div>
            <div className={"text-lightGrey text-xs"}>
              7pm | The Sohi Residence
            </div>

            <div className={"text-lightGrey text-xs"}>
              23 Clarence Crescent, Coffs Harbour NSW 2450
            </div>
          </div>
          <div className={"border-l-4 border-lavender pl-4 pb-2"}></div>
        </div>
        <div className={"text-center pt-2 text-lavender py-5"}>
          <a href={"#title"}>Back to Top</a>
        </div>
      </section>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
