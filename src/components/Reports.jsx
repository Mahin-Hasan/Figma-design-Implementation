
import { BiSolidDownArrow } from "react-icons/bi";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Reports = () => {
  return (
    <section className="h-screen bg-sliderBG bg-auto bg-no-repeat bg-right">
      <div className="space-y-4">
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
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="res-slide">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Slide 1</h3>
              <p className="text-sm">Content for slide 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Slide 2</h3>
              <p className="text-sm">Content for slide 2</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Slide 3</h3>
              <p className="text-sm">Content for slide 3</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reports;




/*
not working

import { BiSolidDownArrow } from "react-icons/bi";
import SectionTitle from "./SectionTitle";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Reports = () => {
  return (
    <section className="h-screen bg-sliderBG bg-auto bg-no-repeat bg-right">
      <div className="space-y-4">
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
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperSlide className="res-slide"></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reports;


*/