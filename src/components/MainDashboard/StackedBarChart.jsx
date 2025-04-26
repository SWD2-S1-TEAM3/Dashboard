import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = ["A", "B", "C", "D", "E", "F", "G"];

export default function StackedBarChart() {
  return (
    <div className="StackedBarChart my-3">
      <BarChart
        height={300}
        series={[
          {
            data: pData,
            label: "Cyan",
            id: "pvId",
            stack: "total",
            color: "#6AD2FF",
          },
          {
            data: uData,
            label: "Blue",
            id: "uvId",
            stack: "total",
            color: "#4318FF",
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
        yAxis={[{ width: 50 }]}
      />
    </div>
  );
}
