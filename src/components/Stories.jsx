import SectionTitle from "./SectionTitle";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";

const Stories = () => {
  return (
    <section>
      <SectionTitle title={"Stories & Ideas"} />
      <p className="font-Messina text-xl">The latest news and updates</p>
      <div className="grid grid-cols-3 gap-6 mt-28">
        <div className="bg-white rounded-md">
          <div className="ps-6 py-5 space-y-1">
            <div className="-mt-[72px]">
              <img className="rounded-md" src={team1} alt="team 1 img" />
            </div>
            <h5 className="text-sm text-primaryBlue">By: Sahabuddin Sagor</h5>
            <p className="font-Nantes">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.
            </p>
            <button className="bg-primaryBlue py-1 px-2 text-white rounded-full font-Messina text-sm ">Read More</button>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <img src={team2} alt="" />
          </div>
          <h5>Name</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            sed.
          </p>
        </div>
        <div className="bg-white">
          <div>
            <img src={team2} alt="" />
          </div>
          <h5>Name</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            sed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stories;
