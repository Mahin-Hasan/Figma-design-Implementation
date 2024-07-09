import rectangleSm from "../assets/rectanglesm.png";
import orangeBorder from "../assets/orangeBorder.png";
import blueBorder from "../assets/blueBorder.png";
import greenBorder from "../assets/greenBorder.png";
import purpleBorder from "../assets/purpleBorder.png";
import LineChart from "./LineChart";

const DashBoardInfo = () => {
  return (
    <div className="flex-1 p-5">
      <div className="flex items-center gap-2 mb-4">
        <img src={rectangleSm} alt="" />
        <h1 className="text-2xl sm:text-4xl font-Nantes">The WPPOOL Index</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="bg-secondary flex justify-between items-center p-3 rounded-xl">
          <h1 className="text-3xl font-Nantes text-[#FC714D] flex-1">+66.2%</h1>
          <p className="font-Messina pe-2">
            WPPOOL <br />
            Index
          </p>
          <img className="h-12 rounded-sm " src={orangeBorder} alt="" />
        </div>
        <div className="bg-secondary flex justify-between items-center p-3 rounded-xl">
          <h1 className="text-3xl font-Nantes text-[#615DE3] flex-1">+26.6%</h1>
          <p className="font-Messina pe-2">
            WPPOOL <br />
            Index
          </p>
          <img className="h-12 rounded-sm " src={blueBorder} alt="" />
        </div>
        <div className="bg-secondary flex justify-between items-center p-3 rounded-xl">
          <h1 className="text-3xl font-Nantes text-[#7CA63A] flex-1">+34.1%</h1>
          <p className="font-Messina pe-2">Microsoft</p>
          <img className="h-12 rounded-sm " src={greenBorder} alt="" />
        </div>
        <div className="bg-secondary flex justify-between items-center p-3 rounded-xl">
          <h1 className="text-3xl font-Nantes text-[#6F34A1] flex-1">+17%</h1>
          <p className="font-Messina pe-2">
            Google <br />
            Index
          </p>
          <img className="h-12 rounded-sm " src={purpleBorder} alt="" />
        </div>
      </div>
      <LineChart />
    </div>
  );
};

export default DashBoardInfo;
