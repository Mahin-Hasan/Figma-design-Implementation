import { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [items, setItems] = useState([
    {
      name: "WPPOOL",
      data: [150, 7834, 565, 3454, 6767, 986, 2344],
    },
    {
      name: "Google",
      data: [8013, 234, 65, 3245, 767, 286, 5678],
    },
    {
      name: "Microsoft",
      data: [13, 234, 65, 345, 767, 286, 8743],
    },
    {
      name: "Twitter",
      data: [13, 234, 65, 345, 767, 286, 2345],
    },
  ]);

  const [options, setOptions] = useState({
    xaxis: {
      categories: [" ","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      min: -1000, 
      max: 10000, 
      labels: {
        formatter: (value) => `${(value / 100)}%`,
      },
    },
    stroke: {
      width: 2, 
    },
    colors: ['#FC714D', '#615DE3', '#7CA63A', '#6F34A1'],
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
      <div>Some heading</div>
      <Chart
        type="line"
        height={350}
        series={items}
        options={options}
      />
    </div>
  );
};

export default LineChart;
