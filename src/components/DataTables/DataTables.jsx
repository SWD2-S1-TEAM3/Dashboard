import React from "react";
import { FaApple, FaAndroid, FaWindows } from "react-icons/fa";
import styles from "./DataTables.module.css";

const devTable = [
  {
    name: "Marketplace",
    tech: ["apple", "android", "windows"],
    date: "12.Jan.2021",
  },
  { name: "Venus DB PRO", tech: ["apple"], date: "21.Feb.2021" },
  { name: "Venus DS", tech: ["android", "windows"], date: "13.Mar.2021" },
  {
    name: "Venus 3D Asset",
    tech: ["apple", "android", "windows"],
    date: "24.Jan.2021",
  },
  { name: "Marketplace", tech: ["windows"], date: "Oct 24, 2022" },
];

const checkTable = [
  { name: "Markplace", progress: "75.5%", quantity: 2458, date: "12.Jan.2021" },
  { name: "Venus DB ", progress: "35.4%", quantity: 1485, date: "21.Feb.2021" },
  { name: "Venus DS", progress: "25%", quantity: 1024, date: "13.Mar.2021" },
  { name: "Venus 3D", progress: "100%", quantity: 858, date: "24.Jan.2021" },
  { name: "Markplace ", progress: "75.5%", quantity: 258, date: "24.Dec.2022" },
  { name: "Venus 5D", progress: "35%", quantity: 1485, date: "21.Feb.2021" },
  { name: "Venus DS", progress: "25%", quantity: 1024, date: "13.Mar.2021" },
];

const fourColumnsTable = [
  { name: "Marketplace", progress: "75.5%", quantity: 2458 },
  { name: "Venus DB PRO", progress: "35.4%", quantity: 1485 },
  { name: "Venus DS", progress: "25%", quantity: 1024 },
  { name: "Venus 3D Asset", progress: "100%", quantity: 858 },
  { name: "Marketplace", progress: "75%", quantity: 258 },
];

const complexTable = [
  { name: "Marketplace", status: "Approved", date: "24.Jan.2021" },
  { name: "Marketplace", status: "Disable", date: "30.Dec.2021" },
  { name: "Marketplace", status: "Error", date: "20.May.2021" },
  { name: "Marketplace", status: "Approved", date: "12.Jul.2021" },
];

function DataTables() {
  const getIcon = (type) => {
    switch (type) {
      case "apple":
        return <FaApple />;
      case "android":
        return <FaAndroid />;
      case "windows":
        return <FaWindows />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.container}>
        {/* Row 1 */}
        <div className={styles.row}>
          {/* Development Table */}
          <div className={styles.tableWrapper}>
            <h2>Development Table</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Tech</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {devTable.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td className={styles.icons}>
                      {item.tech.map((tech, i) => (
                        <span key={i}>{getIcon(tech)}</span>
                      ))}
                    </td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Check Table */}
          <div className={styles.tableWrapper}>
            <h2>Check Table</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Progress</th>
                  <th>Quantity</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {checkTable.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <input type="checkbox" /> {item.name}
                    </td>
                    <td>{item.progress}</td>
                    <td>{item.quantity}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Row 2 */}
        <div className={styles.row}>
          {/*Columns Table */}
          <div className={styles.tableWrapper}>
            <h2>Columns Table</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Progress</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {fourColumnsTable.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.progress}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Complex Table */}
          <div className={styles.tableWrapper}>
            <h2>Complex Table</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {complexTable.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>
                      {item.status === "Approved" && (
                        <span className="text-success">
                          <i className="fa-solid fa-circle-check mx-2 text-success"></i>{" "}
                          {item.status}
                        </span>
                      )}
                      {item.status === "Disable" && (
                        <span className="text-danger">
                          <i className="fa-solid fa-circle-xmark mx-2 text-danger"></i>{" "}
                          {item.status}
                        </span>
                      )}
                      {item.status === "Error" && (
                        <span className="text-warning">
                          <i className="fa-solid fa-circle-exclamation mx-2 text-warning"></i>{" "}
                          {item.status}
                        </span>
                      )}
                    </td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTables;
