import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "./MainDashboard.css";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [" A", " B", " C", " D", " E", " F", " G"];

export default function SimpleBarChart() {
  return (
    <div className="SimpleBarChart p-3 w-100 h-100">
      <div>
        <div className="d-flex justify-content-between">
          <h4>Daily Traffic</h4>
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
        <div className="d-flex traffic">
          <h2>2.579</h2>
          <span className="d-flex my-auto mx-2">Visitors</span>
        </div>
      </div>
      <BarChart
        height={300}
        series={[{ data: pData, id: "pvId" }]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
        yAxis={[{ width: 50 }]}
      />
    </div>
  );
}
