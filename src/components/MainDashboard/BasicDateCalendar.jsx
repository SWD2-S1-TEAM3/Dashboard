import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <div className="BasicDateCalendar p-3 w-100 h-100">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="BasicDateCalendar" />
      </LocalizationProvider>
    </div>
  );
}
