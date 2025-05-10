import React from "react";
import "./TrendingNFTs.css";
import NFT3 from "./../../assets/NFT3.png";
import NFT4 from "./../../assets/NFT4.png";
import NFT5 from "./../../assets/NFT5.png";
import avatar3 from "./../../assets/avatar3.png";
import avatar4 from "./../../assets/avatar4.png";
import avatar5 from "./../../assets/avatar5.png";

function RecentlyAdded() {
  return (
    <>
      <div className="container-fluid my-3 RecentlyAdded">
        <h2>Recently Added</h2>
        <div className="row">
          <div className="col-lg-4 col-sm-12 my-2">
            <div className="nft-card">
              <div className="nft-card-image-section p-3">
                <img
                  src={NFT3}
                  alt="Abstract Colors"
                  className="nft-card-image rounded rounded-3"
                />
                <button className="nft-card-like">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="nft-card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="nft-card-title">Abstract Colors</div>
                    <div className="nft-card-author">By Esthera Jackson</div>
                  </div>
                  <div className="nft-card-avatars">
                    <img
                      src={avatar3}
                      alt="User 1"
                      className="nft-card-avatar"
                    />
                    <img
                      src={avatar4}
                      alt="User 2"
                      className="nft-card-avatar"
                    />
                    <img
                      src={avatar5}
                      alt="User 3"
                      className="nft-card-avatar"
                    />
                    <span className="nft-card-avatar-count">+5</span>
                  </div>
                </div>
                <div className="nft-card-footer d-flex justify-content-between">
                  <span className="nft-card-bid-label">
                    Current Bid:0.91 ETH
                  </span>
                  <button className="nft-card-bid-btn">Place Bid</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 my-2">
            <div className="nft-card">
              <div className="nft-card-image-section p-3">
                <img
                  src={NFT4}
                  alt="Abstract Colors"
                  className="nft-card-image rounded rounded-3"
                />
                <button className="nft-card-like">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="nft-card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="nft-card-title">Abstract Colors</div>
                    <div className="nft-card-author">By Esthera Jackson</div>
                  </div>
                  <div className="nft-card-avatars">
                    <img
                      src={avatar3}
                      alt="User 1"
                      className="nft-card-avatar"
                    />
                    <img
                      src={avatar4}
                      alt="User 2"
                      className="nft-card-avatar"
                    />
                    <img
                      src={avatar5}
                      alt="User 3"
                      className="nft-card-avatar"
                    />
                    <span className="nft-card-avatar-count">+5</span>
                  </div>
                </div>
                <div className="nft-card-footer d-flex justify-content-between">
                  <span className="nft-card-bid-label">
                    Current Bid:0.91 ETH
                  </span>
                  <button className="nft-card-bid-btn">Place Bid</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 my-2">
            <div className="nft-card">
              <div className="nft-card-image-section p-3">
                <img
                  src={NFT5}
                  alt="Abstract Colors"
                  className="nft-card-image rounded rounded-3"
                />
                <button className="nft-card-like">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="nft-card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="nft-card-title">Abstract Colors</div>
                    <div className="nft-card-author">By Esthera Jackson</div>
                  </div>
                  <div className="nft-card-avatars">
                    <img
                      src={avatar3}
                      alt="User 1"
                      className="nft-card-avatar"
                    />
                    <img
                      src={avatar4}
                      alt="User 2"
                      className="nft-card-avatar"
                    />
                    <img
                      src={avatar5}
                      alt="User 3"
                      className="nft-card-avatar"
                    />
                    <span className="nft-card-avatar-count">+5</span>
                  </div>
                </div>
                <div className="nft-card-footer d-flex justify-content-between">
                  <span className="nft-card-bid-label">
                    Current Bid:0.91 ETH
                  </span>
                  <button className="nft-card-bid-btn">Place Bid</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentlyAdded;
