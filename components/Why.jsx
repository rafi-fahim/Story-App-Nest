
const Why = () => {
  const cardInfo = [
    {
      key: 1,
      title: "TO Learn",
      description:
        "Our goal is to make people learn from others life stories. Since people gets depressed some times, it is a great oppurtunity to look at others life story how te encountered the problems",
      img: "../public/book.jpg",
    },
    {
      key: 2,
      title: "To Share",
      description:
        "People gets relife by sharing their stories. They don't have to give a speech in a public presentation to share their stories. They can easily create a account & share their stories worldwide. There is no monatization like facebook",
      img: "../public/book.jpg",
    },
    {
      key: 3,
      title: "To Enjoy",
      description:
        "It is also an enternainment product. When there is nothing to do or you are feeling boaring you can see what others do when they get boared. A great place to wash off your boar doom",
      img: "../public/book.jpg",
    },
  ];

  return (
    <>
      <div className="flex justify-center w-full  items-center bg-slate-950 flex-col">
        <h1 className="text-center p-2 mt-4 max-sm:w-[95%] w-1/2 bg-stone-900 rounded-lg text-4xl max-sm:text-2xl font-extrabold uppercase text-white">
          Why this app? 🤔
        </h1>
        <div className="grid content-center justify-items-center grid-cols-3 max-sm:grid-cols-1 gap-8 p-4">
          {/* Card- 1*/}
          <div className="containers">
            <div className="card">
              <div className="front back-1">
                <h1 className="font-extrabold text-3xl font-delius">
                  <span className="max-sm:hidden">Hover</span>
                  <span className="lg:hidden md:hidden">Tap</span> to see:
                </h1>
                <br />
                <p className="text-2xl font-extralight uppercase font-kdam-pro">
                  {cardInfo[0].title}
                </p>
              </div>
              <div className="back">
                <h1 className="font-extrabold  text-3xl">
                  {cardInfo[0].title}
                </h1>
                <p>{cardInfo[0].description}</p>
              </div>
            </div>
          </div>
          {/* Card End */}
          <div className="containers">
            <div className="card">
              <div className="front back-2">
                <h1 className="font-extrabold text-3xl font-delius">
                  <span className="max-sm:hidden">Hover</span>
                  <span className="lg:hidden md:hidden">Tap</span> to see:
                </h1>
                <br />
                <p className="text-2xl font-extralight uppercase font-kdam-pro">
                  {cardInfo[1].title}
                </p>
              </div>
              <div className="back">
                <h1 className="font-extrabold  text-3xl">
                  {cardInfo[1].title}
                </h1>
                <p>{cardInfo[1].description}</p>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="containers">
            <div className="card">
              <div className="front back-3">
                <h1 className="font-extrabold text-3xl font-delius">
                  <span className="max-sm:hidden">Hover</span>
                  <span className="lg:hidden md:hidden">Tap</span> to see:
                </h1>
                <br />
                <p className="text-2xl font-extralight uppercase font-kdam-pro">
                  {cardInfo[2].title}
                </p>
              </div>
              <div className="back">
                <h1 className="font-extrabold  text-3xl">
                  {cardInfo[2].title}
                </h1>
                <p>{cardInfo[2].description}</p>
              </div>
            </div>
          </div>
          {/* Cards */}
        </div>
      </div>
    </>
  );
};

export default Why;
