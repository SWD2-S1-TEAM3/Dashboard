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
      <LineChart
        height={300}
        series={[
          { data: pData, label: "blue", color: "#4318FF" },
          { data: uData, label: "Cyan", color: "#6AD2FF" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ width: 50 }]}
        margin={margin}
      />
    </div>
  );
}

export default Line;
