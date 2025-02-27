import SectionTitle from "./SectionTitle";

import stripe from "../assets/stripe.png";
import klarna from "../assets/klarna.png";
import plaid from "../assets/plaid.png";
import checkout from "../assets/checkout.png";
import revolut from "../assets/revolut.png";
import chime from "../assets/chime.png";
import n26 from "../assets/n26.png";
import brex from "../assets/brex.png";
import deel from "../assets/deel.png";
import gusto from "../assets/gusto.png";

const FutureListings = () => {
  return (
    <section id="futureListings" className="my-28 px-2 md:px-0">
      <SectionTitle title={"Potential Future Listings"} />
      <p className="font-Messina md:w-[700px] lg:w-[880px] my-6">
        Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-5">
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={stripe} alt="list img" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={klarna} alt="list img" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={plaid} alt="list img" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={checkout} alt="list img" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={revolut} alt="list img" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={chime} alt="list img" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={n26} alt="list img" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={brex} alt="list img" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={deel} alt="list img" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img src={gusto} alt="list img" />
        </div>
      </div>
    </section>
  );
};

export default FutureListings;
