"use client";
import useMobile from "@/hooks/useMobile";

function Home() {
  const isMobile = useMobile();

  return (
    <main className={"flex flex-col"}>
      <nav className={"text-center align-middle py-6"}>
        <div className={"text-lavender font-playfair text-3xl py-2"}>
          Wedding Itinerary
        </div>
        <div className={"text-lavender font-playfair text-3xl py-2"}>
          Sikh Wedding Guide
        </div>
        <div className={"text-lavender font-playfair text-3xl py-2"}>
          Invitations
        </div>
      </nav>
      <div id={"hero"} className={"fixed h-screen w-full -z-10 bg-white"}>
        <img src={"/cartoon.png"} className={"w-full"} alt={"Sim and Ricky"} />
        {/*<div className={"text-lavender font-snell text-center text-6xl pt-4"}>*/}
        {/*  Sim & Ricky*/}
        {/*</div>*/}
      </div>

      <section className={"h-screen"} />
      <section className={"h-screen text-center pr-2 pl-2"}>
        <h3 className={"font-playfair text-lightGrey pt-2 "}>
          SARDAR HARINDER SINGH SOHI & SARDARNI MANJIT KAUR SOHI
        </h3>
        <div className={"text-lightGrey"}>
          request the pleasure of your company on the auspicious occasion fo the
          wedding ceremony of their beloved daughter
        </div>
        <h1 className={"font-snell text-lavender text-4xl pt-2 pb-2"}>
          Simerpreet Kaur Sohi
        </h1>
        <div className={"text-lightGrey font-playfair "}>
          Granddaughter of Late S. Ajit Singh & Late Sdn. Parkash Kaur Sohi
        </div>
        <div className={"text-lightGrey"}>with</div>
        <h1 className={"font-snell text-lavender text-4xl pt-2 pb-2"}>
          Ricky Gupreett Singh Johal
        </h1>
        <div className={"text-lightGrey font-playfair pt-2 pb-2"}>
          Son of Sardar Don Manjeet Singh Johal and Sardarni Jasbir Kaur Johal
        </div>
        <h4 className={"font-playfair text-lavender pt-2 "}>
          On Saturday 9th September 2023
        </h4>
        <div className={"text-lightGrey"}>At Gura Nanak Sikh Gurdwara</div>
        <div className={"text-lightGrey"}>River St | Woolgoolga | NSW 2456</div>
        <h4 className={"text-lavender  pt-2 pb-2"}>Program</h4>
        <div className={"text-lightGrey"}>
          Milni 9am | Morning Tea 10am | Anand Karaj 10:30am{" "}
        </div>
      </section>

      {/*Schedule*/}
      <section className={"h-screen w-full text-center"}>
        <h1 className={"font-snell text-lavender text-center text-5xl pb-4"}>
          Schedule{" "}
        </h1>
        <div className={"text-center inline-grid grid-cols-2 gap-0"}>
          <div className={"text-right border-r-4 border-{lavender} pr-4 pb-2"}>
            <h3 className={"font-snell text-lavender text-2xl"}>Mendi</h3>
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
          <div className={"text-right border-l-4  pb-2"}></div>
          <div className={"text-right border-r-4 pr-4 pb-2"}></div>
          <div className={"text-left border-l-4 pl-4 pb-2"}>
            <h3 className={"font-snell text-lavender text-2xl"}>Maiyan</h3>
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
          <div className={"text-right border-r-4 pr-4 pb-2"}>
            <h3 className={"font-snell text-lavender text-2xl"}>
              Choora Ceremony
            </h3>
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
          <div className={"text-left border-l-4 pl-4 pb-2"}></div>
          <div className={"border-r-4 pr-4 pb-10"}></div>
          <div className={"text-left border-l-4 pl-4 pb-2"}>
            <h3 className={"font-snell text-lavender text-2xl"}>Jaggo</h3>
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
          <div className={"text-right border-r-4 pr-4 pb-2"}>
            <h3 className={"font-snell text-lavender text-2xl"}>Anand Kara</h3>
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
          <div className={"border-l-4"}></div>
          <div className={"border-r-4 "}></div>
          <div className={"text-left border-l-4  pl-4 pb-2"}>
            <h3 className={"font-snell text-lavender text-2xl"}>Reception</h3>
            <div className={"font-playfair text-lightGrey pb-1"}>
              Saturday 9th September
            </div>
            <div className={"text-lightGrey text-xs"}>1:30pm | C.EX COFFS</div>
            <div className={"text-lightGrey text-xs"}>
              2-6 Vernon st, Coffs Harbour NSW 2450
            </div>
          </div>
          <div className={"text-right border-r-4 pr-4 pb-2"}>
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
          <div className={"border-l-4 pl-4 pb-2"}> </div>
        </div>
        <div className={"text-center pt-2 text-lavender"}>Back to Top</div>
      </section>
      <section className={"h-screen w-full"}>3</section>
    </main>
  );
}

export default Home;
