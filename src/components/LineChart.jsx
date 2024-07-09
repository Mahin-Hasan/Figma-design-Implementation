import { useState } from "react";
import Chart from "react-apexcharts";
import { BiSolidDownArrow } from "react-icons/bi";

const LineChart = () => {
  //function for creating random data for the table
  const generateDataPoints = (numPoints) => {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
      if (i < numPoints / 13) {
        data.push(Math.floor(Math.random() * 1600));
      } else if (i < (2 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 1300) + 2500);
      } else if (i < (3 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 3000) + 4000);
      } else if (i < (4 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 2000) + 1000);
      } else if (i < (5 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 2000) + 2500);
      } else if (i < (6 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 3000) + 3000);
      } else if (i < (7 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 6000) + 3000);
      } else if (i < (8 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 4000) + 3000);
      } else if (i < (9 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 2500) + 3000);
      } else if (i < (10 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 2000) + 3000);
      } else if (i < (11 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 2500) + 3000);
      } else if (i < (12 * numPoints) / 13) {
        data.push(Math.floor(Math.random() * 3000) + 3000);
      } else {
        data.push(Math.floor(Math.random() * 3000) + 7000);
      }
    }
    return data;
  };

  const [items, setItems] = useState([
    {
      name: "WPPOOL",
      data: generateDataPoints(66),
    },
    {
      name: "Google",
      data: generateDataPoints(66),
    },
    {
      name: "Microsoft",
      data: generateDataPoints(66),
    },
    {
      name: "Twitter",
      data: generateDataPoints(66),
    },
  ]);

  const [options, setOptions] = useState({
    xaxis: {
      categories: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Feb",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Mar",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Apr",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "May",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Jun",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Jul",
      ],
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
          <div className="bg-primaryBlue text-white px-2 py-1 rounded-full w-60">
            <div className="relative ">
              <select
                name="sectors"
                id="sectors"
                className="bg-primaryBlue appearance-none pr-40 pl-2 py-0 rounded-full text-white"
              >
                <option value="volvo">Sectors</option>
                <option value="saab">Division</option>
                <option value="mercedes">Local</option>
              </select>
              <BiSolidDownArrow className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[8px]" />
            </div>
          </div>
          <div className="bg-primaryBlue text-white px-2 py-1 rounded-full w-60">
            <div className="relative">
              <select
                name="sectors"
                id="sectors"
                className="bg-primaryBlue appearance-none w-56 pl-2 py-0 rounded-full text-white"
              >
                <option value="volvo">Types of IPO</option>
                <option value="saab">Types of ROI </option>
              </select>
              <BiSolidDownArrow className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[8px]" />
            </div>
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
