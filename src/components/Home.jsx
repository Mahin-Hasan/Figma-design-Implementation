import { IoArrowDownSharp } from "react-icons/io5";

const Home = () => {
  return (
    <section id="wppoolIndex" className="pt-5">
      <div className="h-[90vh] sm:h-[98vh] bg-matrix-pattern bg-auto bg-no-repeat bg-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#001CB8] opacity-85 rounded-xl">
          {/* Empty div for matrix bg overlay  */}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-rectangleBG bg-auto bg-no-repeat bg-center">
          <div className="flex flex-col md:flex-row items-center sm:justify-between h-[90vh] sm:h-[98vh]">
            <div className="flex flex-col sm:flex-row justify-end text-white  ps-6 sm:ps-14 h-[90vh] sm:h-[98vh] sm:items-end">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 lg:gap-24 mb-12">
                <div> 
                  <h1 className="font-Nantes text-2xl lg:text-4xl">60</h1>
                  <p className="font-NeueHaas tracking-wide text-[#CDCDCD] text-sm sm:text-base">
                    Companies
                  </p>
                </div>
                <div>
                  <h1 className="font-Nantes text-2xl lg:text-4xl">$100B</h1>
                  <p className="font-NeueHaas tracking-wide text-[#CDCDCD] text-sm sm:text-base">
                    Market cap
                  </p>
                </div>
                <div>
                  <h1 className="font-Nantes text-2xl lg:text-4xl">3.5x</h1>
                  <p className="font-NeueHaas tracking-wide text-[#CDCDCD] text-sm sm:text-base">
                    Revenue multiple
                  </p>
                </div>
                <div>
                  <h1 className="font-Nantes text-2xl lg:text-4xl">60%</h1>
                  <p className="font-NeueHaas tracking-wide text-[#CDCDCD] text-sm sm:text-base">
                    LTM avg. revenue growth rate
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-0 md:-ms-40 text-center">
              <h1 className="text-[34px] sm:text-[42px] md:text-[46px] lg:text-[78px] text-white font-Nantes">
                The WPPOOL Index
              </h1>
              <p className="font-Messina text-white text-[16px] sm:text-[18px] lg:text-[21px]  tracking-wider">
                Monitor the performance of emerging, publicly traded, financial
                technology companies
              </p>
            </div>
            
            <div className="flex flex-col justify-end h-[90vh] sm:h-[98vh] text-white space-y-12 pe-6 sm:pe-14 pb-14">
              <div className="bg-white p-6 sm:p-8 rounded-full cursor-pointer shadow-2xl absolute right-6 sm:block button-shadow">
                <a href="#footerSection">
                  <IoArrowDownSharp className="text-primaryBlue text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
