import * as React from "react";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 12, label: "series A", color: "#EFF4FB" },
  { id: 1, value: 25, label: "series B", color: "#6AD2FF" },
  { id: 2, value: 63, label: "series C", color: "#4318FF" },
];

export default function Chart() {
  return (
    <div className="Chart p-3 w-100 h-100">
      <div className="d-flex justify-content-between">
        <h4>Your Pie Chart</h4>
        <select name="cars" id="cars" className="btn">
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
          <option value="Weekly">Weekly</option>
        </select>
      </div>
      <PieChart
        series={[{ data }]}
        width={200}
        height={200}
        hideLegend
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            filter: "drop-shadow(1px 1px 2px black)",
            animationName: "animate-pie-arc-label",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            "@keyframes animate-pie-arc-label": {
              "0%": { fill: "red" },
              "33%": { fill: "orange" },
              "66%": { fill: "violet" },
              "100%": { fill: "red" },
            },
          },
          [`& .${pieArcLabelClasses.root}.${pieArcLabelClasses.animate}`]: {
            animationDuration: "5s",
          },
        }}
      />
      {/* <div className="d-flex flex-row justify-content-between">
        <div>
          <p>Your Files</p>
          <p>63%</p>
        </div>
        <div>
          <p>System</p>
          <p>25%</p>
        </div>
        <div></div>
      </div> */}
    </div>
  );
}
