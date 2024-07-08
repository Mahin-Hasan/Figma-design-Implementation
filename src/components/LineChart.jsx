import { useState } from "react";
import Chart from "react-apexcharts";
import { BiSolidDownArrow } from "react-icons/bi";

const LineChart = () => {
  const [items, setItems] = useState([
    {
      name: "WPPOOL",
      data: [150, 6534, 4065, 8454, 8767, 7086, 6344],
    },
    {
      name: "Google",
      data: [120, 4200, 2805, 3245, 5767, 7726, 7878],
    },
    {
      name: "Microsoft",
      data: [-1000, 6900, 4965, 7245, 1567, 4286, 6843],
    },
    {
      name: "Twitter",
      data: [0, 234, 2165, 1545, 1867, 2286, 3700],
    },
  ]);

  const [options, setOptions] = useState({
    xaxis: {
      categories: ["", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      min: -1000,
      max: 10000,
      labels: {
        formatter: (value) => `${value / 100}%`,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ["#FC714D", "#615DE3", "#7CA63A", "#6F34A1"],
    legend: {
      markers: {
        shape: "square",
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
  });

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between mt-6">
        <div className="flex flex-col xl:flex-row gap-4 md:justify-center items-center md:items-stretch">
          <div>
            <button className="flex justify-center items-center bg-primaryBlue gap-48 text-white px-3 py-2 rounded-full">
              <span className="text-xs font-Messina">Sectors</span>
              <BiSolidDownArrow className="text-[8px]" />
            </button>
          </div>
          <div>
            <button className="flex justify-center items-center bg-primaryBlue gap-40 text-white px-[14px] py-2 rounded-full">
              <span className="text-xs font-Messina">Types of IPO</span>
              <BiSolidDownArrow className="text-[8px]" />
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center mt-4 lg:mt-0">
          <div className="bg-[#EFF3F6] font-Messina py-1 text-xs space-x-8 rounded-full">
            <button className="text-[#748DA1] ps-6 md:ps-12">1Y</button>
            <button className="text-[#748DA1]">YTD</button>
            <button className="bg-primaryBlue text-white px-2 py-1 rounded-full">
              6M
            </button>
            <button className="text-[#748DA1]">1M</button>
            <button className="text-[#748DA1] pe-3">1W</button>
          </div>
        </div>
      </div>
      <Chart type="line" height={380} series={items} options={options} />
    </div>
  );
};

export default LineChart;
