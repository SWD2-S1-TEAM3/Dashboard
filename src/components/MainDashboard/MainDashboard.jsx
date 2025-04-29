import React from "react";
import CheckTable from "./CheckboxTable";
import Line from "./Line";
import StackedBarChart from "./StackedBarChart";
import Chart from "./Chart";
import SimpleBarChart from "./SimpleBarChart";
import ComplexTable from "./ComplexTable";
import BasicDateCalendar from "./BasicDateCalendar";
import TaskList from "./TaskList";
import EarningsCard from "./EarningsCard";

function MainDashboard() {
  return (
    <div className="body">
      <EarningsCard />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Line />
          </div>
          <div className="col-lg-6 col-md-12">
            <StackedBarChart />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row d-flex flex-wrap">
          <div className="col-lg-6 col-md-12">
            <CheckTable />
          </div>
          <div className="col-lg-3 col-md-12">
            <SimpleBarChart />
          </div>
          <div className="col-lg-3 col-md-12">
            <Chart />
          </div>
        </div>
      </div>
      <div className="container-fluid my-3">
        <div className="row d-flex flex-wrap">
          <div className="col-lg-6 col-md-12">
            <ComplexTable />
          </div>
          <div className="col-lg-3 col-md-12">
            <TaskList />
          </div>
          <div className="col-lg-3 col-md-12">
            <BasicDateCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
