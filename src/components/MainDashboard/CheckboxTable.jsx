import React from "react";
import "./CheckboxTable.css";

function CheckboxTable() {
  return (
    <div className="table-container">
      <h2 className="table-title">Check Table</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Progress</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Marketplace</td>
            <td>75.5%</td>
            <td>2458</td>
            <td>Apr 26, 2022</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Venus DB PRO</td>
            <td>35.4%</td>
            <td>1485</td>
            <td>Jul 20, 2022</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Venus DS</td>
            <td>25%</td>
            <td>1024</td>
            <td>Sep 30, 2022</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Venus 3D Asset</td>
            <td>100%</td>
            <td>858</td>
            <td>Oct 24, 2022</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Venus 3D Asset</td>
            <td>100%</td>
            <td>258</td>
            <td>Nov 29, 2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CheckboxTable;
