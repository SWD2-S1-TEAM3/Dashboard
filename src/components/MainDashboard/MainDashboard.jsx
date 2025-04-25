import React from "react";
import Header from "./header";
import Section1 from "./EarningsCard";
import CheckTable from "./CheckboxTable";

function MainDashboard() {
  return (
    <>
      <Header />
      <Section1 />
      <CheckTable />
    </>
  );
}

export default MainDashboard;
