import SectionTitle from "./SectionTitle";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import carrot from "../assets/carrot.png";

const Stories = () => {
  return (
    <section id="stories" className="px-2">
      <SectionTitle title={"Stories & Ideas"} />
      <p className="font-Messina text-xl">The latest news and updates</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-20 sm:gap-y-24 my-20 md:my-24">
        <div className="bg-white rounded-md">
          <div className="ps-6 py-5 space-y-1">
            <div className="-mt-[72px]">
              <img className="rounded-md" src={team1} alt="team 1 img" />
            </div>
            <h5 className="text-sm text-primaryBlue pt-2">
              By: Sahabuddin Sagor
            </h5>
            <p className="font-Nantes">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="bg-primaryBlue py-1 px-2 text-white rounded-full font-Messina text-sm ">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div className="ps-6 py-5 space-y-1">
            <div className="-mt-[72px]">
              <img className="rounded-md" src={team2} alt="team 2 img" />
            </div>
            <br />
            <h5 className="text-sm text-primaryBlue pt-2">By: Nayem Khan</h5>
            <p className="font-Nantes">
              Lorem ipsum dolor sit amet consectetur
            </p>

            <button className="bg-primaryBlue py-1 px-2 text-white rounded-full font-Messina text-sm ">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div className="ps-6 py-5 space-y-1">
            <div className="-mt-[72px] relative">
              <img className="rounded-md" src={team1} alt="team 3 img" />
              <div className="absolute top-0 left-0 bg-white p-[6px] rounded-tl-md rounded-br-md">
                <img
                  className="w-[49px] h-[7px] "
                  src={carrot}
                  alt="team 1 img"
                />
              </div>
            </div>
            <h5 className="text-sm text-primaryBlue pt-2">
              By: Shagor Sahabuddin
            </h5>
            <p className="font-Nantes">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="bg-primaryBlue py-1 px-2 text-white rounded-full font-Messina text-sm ">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div className="ps-6 py-5 space-y-1">
            <div className="-mt-[72px]">
              <img className="rounded-md" src={team1} alt="team 4 img" />
            </div>
            <h5 className="text-sm text-primaryBlue pt-2">
              By: Sahabuddin Sagor
            </h5>
            <p className="font-Nantes">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="bg-primaryBlue py-1 px-2 text-white rounded-full font-Messina text-sm ">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div className="ps-6 py-5 space-y-1">
            <div className="-mt-[72px]">
              <img className="rounded-md" src={team2} alt="team 5 img" />
            </div>
            <br />
            <h5 className="text-sm text-primaryBlue pt-2">By: Nayem Khan</h5>
            <p className="font-Nantes">
              Key Takeaways from Robotics Invest 2023
            </p>
            <button className="bg-primaryBlue py-1 px-2 text-white rounded-full font-Messina text-sm ">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div className="ps-6 py-5 space-y-1">
            <div className="-mt-[72px] relative">
              <img className="rounded-md" src={team1} alt="team 6 img" />
              <div className="absolute top-0 left-0 bg-white p-[6px] rounded-tl-md rounded-br-md">
                <img
                  className="w-[49px] h-[7px] "
                  src={carrot}
                  alt="team 1 img"
                />
              </div>
            </div>
            <h5 className="text-sm text-primaryBlue pt-2">
              By: Shagor Sahabuddin
            </h5>
            <p className="font-Nantes">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia.
            </p>
            <button className="bg-primaryBlue py-1 px-2 text-white rounded-full font-Messina text-sm ">
              Read More
            </button>
          </div>
        </div>
      </div>
      <hr  className="mt-3 bg-[#90B8F0] p-[1px]"/>
    </section>
  );
};

export default Stories;
