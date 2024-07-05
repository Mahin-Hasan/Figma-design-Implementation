// bg-[rgba(0,0,255,0.67)]

import { IoArrowDownSharp } from "react-icons/io5";

//adjusted bg color to hex #0019A3 | #001CB8
const Home = () => {
  return (
    <section className="pt-5">
      <div className="h-screen bg-matrix-pattern bg-auto bg-no-repeat bg-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#001CB8] opacity-85 rounded-2xl">
          {/* Empty div for matrix bg overlay  */}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-rectangleBG bg-auto bg-no-repeat bg-center">
          <div className="flex flex-col sm:flex-row items-center justify-between h-screen">
            <div className="flex flex-col justify-end h-screen text-white space-y-24 ps-14 pb-14">
              <div className="">
                <h1 className="font-Nantes text-4xl">60</h1>
                <p className="font-Messina tracking-wide">Companies</p>
              </div>
              <div className="">
                <h1 className="font-Nantes text-4xl">$100B</h1>
                <p className="font-Messina tracking-wide">Market cap</p>
              </div>
              <div className="">
                <h1 className="font-Nantes text-4xl">3.5x</h1>
                <p className="font-Messina tracking-wide">Revenue multiple</p>
              </div>
              <div className="">
                <h1 className="font-Nantes text-4xl">60%</h1>
                <p className="font-Messina tracking-wide">
                  LTM avg. revenue growth rate
                </p>
              </div>
            </div>
            <div className="-ms-20">
              <h1 className="text-[78px] text-white text-center font-Nantes">
                The WPPOOL Index
              </h1>
              <p className="font-Messina text-center text-white text-[21px] tracking-wider">
                Monitor the performance of emerging, publicly traded, financial
                technology companies
              </p>
            </div>
            <div className="flex flex-col justify-end h-screen text-white space-y-12 pe-14 pb-14">
              <div className="bg-white p-8 rounded-full cursor-pointer shadow-2xl">
                <IoArrowDownSharp className="text-primaryBlue text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
