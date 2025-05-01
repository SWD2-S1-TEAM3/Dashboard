import React from "react";
import "./HistoryCard.css";
import NFT1 from "./../../assets/NFT1.png";
import NFT2 from "./../../assets/NFT2.png";
import NFT3 from "./../../assets/NFT3.png";
import NFT4 from "./../../assets/NFT4.png";
import NFT5 from "./../../assets/NFT5.png";
import NFT6 from "./../../assets/NFT6.png";

const historyItems = [
  {
    image: NFT1,
    title: "Colorful Heaven",
    author: "Mark Benjamin",
    price: "0.4",
    time: "30s ago",
  },
  {
    image: NFT2,
    title: "Abstract Colors",
    author: "Esthera Jackson",
    price: "2.4",
    time: "50m ago",
  },
  {
    image: NFT3,
    title: "ETH AI Brain",
    author: "Nick Wilson",
    price: "0.3",
    time: "20s ago",
  },
  {
    image: NFT4,
    title: "Swipe Circles",
    author: "Peter Will",
    price: "0.4",
    time: "4h ago",
  },
  {
    image: NFT5,
    title: "Mesh Gradients",
    author: "Will Smith",
    price: "0.4",
    time: "30s ago",
  },
  {
    image: NFT6,
    title: "3D Cubes Art",
    author: "Mariny Gates",
    price: "0.4",
    time: "2m ago",
  },
];

function HistoryCard() {
  return (
    <div className="history-card w-100 my-3">
      <div className="history-header">
        <span className="history-title">History</span>
        <a
          href="#"
          className="history-seeall rounded rounded-5 px-3 py-2 text-decoration-none"
        >
          See all
        </a>
      </div>
      <ul className="history-list">
        {historyItems.map((item, idx) => (
          <li className="history-item" key={idx}>
            <img src={item.image} alt={item.title} className="history-img" />
            <div className="history-info">
              <span className="history-item-title">{item.title}</span>
              <span className="history-item-author">{item.author}</span>
            </div>
            <div className="history-meta">
              <span className="history-eth">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 1920 1920"
                  fill="none"
                  style={{ verticalAlign: "middle", marginRight: 4 }}
                >
                  <path
                    d="M960 0L960 1309.09L1919.64 960L960 0Z"
                    fill="#5A55EA"
                  />
                  <path d="M960 0L0.359985 960L960 1309.09V0Z" fill="#8A8DFF" />
                  <path
                    d="M960 1453.09L959.64 1453.27L960 1453.45V1453.09Z"
                    fill="#5A55EA"
                  />
                  <path
                    d="M960 1453.09V1920L1919.64 1075.64L960 1453.09Z"
                    fill="#5A55EA"
                  />
                  <path
                    d="M960 1920V1453.09L0.359985 1075.64L960 1920Z"
                    fill="#8A8DFF"
                  />
                </svg>
                {item.price} ETH
              </span>
              <span className="history-time">{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryCard;
