import React from "react";
import "./CheckboxTable.css";

function ComplexTable() {
  return (
    <div className="CheckboxTable">
      <div className="table-container">
        <h2 className="table-title">Complex Table</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>PROGRESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marketplace</td>
              <td>
                <i className="fa-solid fa-circle-check mx-2 text-success"></i>
                Approved
              </td>
              <td>Apr 26, 2022</td>
              <td>
                <div
                  style={{
                    background: "#eceff6",
                    borderRadius: "8px",
                    height: "8px",
                    width: "100%",
                    margin: "16px 0",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "57%",
                      background: "#3b28ff",
                      borderRadius: "8px",
                      transition: "width 0.3s",
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Marketplace</td>
              <td>
                <i className="fa-solid fa-circle-xmark mx-2 text-danger"></i>
                Disable
              </td>
              <td>Jul 20, 2022</td>
              <td>
                {" "}
                <div
                  style={{
                    background: "#eceff6",
                    borderRadius: "8px",
                    height: "8px",
                    width: "100%",
                    margin: "16px 0",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "25%",
                      background: "#3b28ff",
                      borderRadius: "8px",
                      transition: "width 0.3s",
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Marketplace</td>
              <td>
                <i className="fa-solid fa-circle-exclamation mx-2 text-warning"></i>
                Error
              </td>
              <td>Sep 30, 2022</td>
              <td>
                {" "}
                <div
                  style={{
                    background: "#eceff6",
                    borderRadius: "8px",
                    height: "8px",
                    width: "100%",
                    margin: "16px 0",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "45%",
                      background: "#3b28ff",
                      borderRadius: "8px",
                      transition: "width 0.3s",
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Marketplace</td>
              <td>
                <i className="fa-solid fa-circle-check mx-2 text-success"></i>
                Approved
              </td>
              <td>Oct 24, 2022</td>
              <td>
                {" "}
                <div
                  style={{
                    background: "#eceff6",
                    borderRadius: "8px",
                    height: "8px",
                    width: "100%",
                    margin: "16px 0",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "80%",
                      background: "#3b28ff",
                      borderRadius: "8px",
                      transition: "width 0.3s",
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Marketplace</td>
              <td>
                <i className="fa-solid fa-circle-xmark mx-2 text-danger"></i>
                Disable
              </td>
              <td>Nov 29, 2022</td>
              <td>
                {" "}
                <div
                  style={{
                    background: "#eceff6",
                    borderRadius: "8px",
                    height: "8px",
                    width: "100%",
                    margin: "16px 0",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "40%",
                      background: "#3b28ff",
                      borderRadius: "8px",
                      transition: "width 0.3s",
                    }}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplexTable;
