import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [" A", " B", " C", " D", " E", " F", " G"];

export default function SimpleBarChart() {
  return (
    <div className="SimpleBarChart p-3 w-100 h-100">
      <BarChart
        height={300}
        series={[{ data: pData, id: "pvId" }]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
        yAxis={[{ width: 50 }]}
      />
    </div>
  );
}
