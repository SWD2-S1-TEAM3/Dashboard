import React from "react";
import Card from "./Card";
import TrendingNFTs from "./TrendingNFTs";
import RecentlyAdded from "./RecentlyAdded";
import TopCreatorsCard from "./TopCreatorsCard";
import HistoryCard from "./HistoryCard";

function NFTMarketplace() {
  
  return (
    <div className="NFTMarketplace">
      <div className="container-fluid">
        <div className="row w">
          <div className="col-8">
            <Card />
            <TrendingNFTs />
            <RecentlyAdded />
          </div>
          <div className="col-4">
            <TopCreatorsCard />
            <HistoryCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTMarketplace;
