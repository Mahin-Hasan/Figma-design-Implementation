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
    <section className="h-[75vh] bg-sliderBG bg-auto bg-no-repeat bg-right">
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
          <div className="mt-4 flex justify-between">
            <SwiperNavButtons />
            {/* <div className="flex items-center gap-3">
              <p>Pages</p>
              <button className="flex justify-center items-center h-[56px] bg-white gap-6 p-4 rounded-full">
                <span className="font-Messina">1 and 2</span>
                <BiSolidDownArrow className="text-xs" />
              </button>
              of 37
            </div> */}
            <button className="rounded-full p-4 text-white me-3 bg-primaryBlue">
              <p className="font-Messina">Download the 2024 Report</p>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Reports;
