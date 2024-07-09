import { BiSolidDownArrow } from "react-icons/bi";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex">
      <div className="flex gap-4 md:ps-2">
        <button
          className="rounded-full bg-white w-10 sm:w-14 flex items-center justify-center text-primaryBlue text-2xl button-shadow2"
          onClick={() => swiper.slidePrev()}
        >
          <GrFormPreviousLink />
        </button>
        <button
          className="rounded-full bg-white w-10 sm:w-14 flex items-center justify-center text-primaryBlue text-2xl button-shadow"
          onClick={() => swiper.slideNext()}
        >
          <GrFormNextLink />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <p className="ps-5">Pages</p>
        <div className="flex justify-center items-center sm:h-[56px] bg-white gap-2 sm:gap-6 p-2 sm:p-4 rounded-full cursor-pointer button-shadow">
          <span className="font-Messina">1 and 2</span>
          <BiSolidDownArrow className="text-xs" />
        </div>
        of 37
      </div>
    </div>
  );
};
