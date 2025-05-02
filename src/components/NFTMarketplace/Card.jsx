import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card my-3 rounded rounded-4">
      <div className="card-content">
        <h2>Discover, collect, and sell extraordinary NFTs</h2>
        <p>
          Enter in this creative world. Discover now the latest NFTs or start
          creating your own!
        </p>
        <div className="card-buttons">
          <button className="primary-btn">Discover now</button>
          <button className="secondary-btn text-decoration-none">
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
