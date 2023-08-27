"use client";
import useMobile from "@/hooks/useMobile";

function Home() {
  const isMobile = useMobile();

  return (
    <main className={"flex flex-col bg-butterfly"}>
      {/*Schedule*/}
      <section
        className={"h-screen w-full text-center "}
        style={{ fontSize: "calc(8px + 2vmin)" }}
      >
        <h1 className={"font-snell text-lavender text-center text-5xl p-5"}>
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
        <div className={"text-center pt-2 text-lavender py-5"}>Back to Top</div>
      </section>
    </main>
  );
}

export default Home;
