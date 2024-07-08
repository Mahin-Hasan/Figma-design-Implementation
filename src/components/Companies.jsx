import SectionTitle from "./SectionTitle";

import alibaba from "../assets/alibaba.png";
import vender from "../assets/vender.png";
import vestwell from "../assets/vestwell.png";
import snapdocs from "../assets/snapdocs.png";
import toast from "../assets/toast.png";
import connepay from "../assets/connepay.png";
import mineraltree from "../assets/mineraltree.png";
import flywire from "../assets/flywire.png";
import quovo from "../assets/quovo.png";
import spendesk from "../assets/spendesk.png";
import notabene from "../assets/notabene.png";
import recurly from "../assets/recurly.png";
import fireblock from "../assets/fireblock.png";
import kensho from "../assets/kensho.png";
import futureadvisor from "../assets/futureadvisor.png";
import argyle from "../assets/argyle.png";
import snapsheet from "../assets/snapsheet.png";

const Companies = () => {
  return (
    <section id="companies" className="px-2 sm:px-0">
      <hr className="bg-[#90B8F0] p-[1px] mb-28" />
      <SectionTitle title={"Selected WPPOOL Portfolio Companies"} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-5 my-12">
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={alibaba} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={vender} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={vestwell} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={snapdocs} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-8" src={vender} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={snapdocs} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={toast} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={connepay} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={connepay} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={mineraltree} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-10" src={flywire} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-10" src={quovo} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-4 sm:px-0 md:w-[210px]" src={spendesk} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-4 sm:px-0 w-[210px]" src={notabene} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-5 sm:px-0 w-[170px]" src={recurly} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-3 sm:px-0 w-[200px]" src={fireblock} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-8" src={kensho} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={futureadvisor} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-6" src={argyle} alt="" />
        </div>
        <div className="bg-white h-[110px] lg:h-[140px] flex justify-center items-center rounded-lg">
          <img className="px-5" src={snapsheet} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
