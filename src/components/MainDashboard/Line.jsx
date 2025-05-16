import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function Line() {
  const margin = { right: 24 };
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 3800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <div className="Line my-3">
      <div className="p-4">
        <h2>$37.5K</h2>
        <p>Total Spent</p>
        <span className="text-success">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="font-medium text-success"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M7 14l5-5 5 5z"></path>
          </svg>
          +2.45%
        </span>
      </div>
      <LineChart
        height={300}
        series={[
          { data: pData, label: "Revenue", color: "#4318FF" },
          { data: uData, label: "Profit", color: "#6AD2FF" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ width: 50 }]}
        margin={margin}
      />
    </div>
  );
}

export default Line;
