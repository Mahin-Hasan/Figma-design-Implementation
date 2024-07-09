import { BiSolidDownArrow } from "react-icons/bi";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButtons";

const Reports = () => {
  return (
    <section id="stateUSA" className=" bg-sliderBG alignSlider bg-auto bg-no-repeat bg-right px-2 md:px-0 pb-8">
      <div className="space-y-4 relative">
        <SectionTitle title={"State of USA"} />
        <button className="flex justify-center items-center bg-primaryBlue gap-10 text-white px-6 rounded-full">
          <span className="text-[42px] font-Nantes">2024</span>
          <BiSolidDownArrow />
        </button>
        <p className="font-Messina">
          Click through the slides or download the report to view natively on
          your device.
        </p>
      </div>
      <div className="mt-4">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 pb-12">
            <SwiperNavButtons />
            <button className="rounded-full p-3 sm:p-4 text-white me-3 lg:me-32 bg-primaryBlue button-shadow">
              <p className="font-Messina">Download the 2023 Report</p>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Reports;
