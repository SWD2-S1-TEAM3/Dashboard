import React, { useState } from "react";
import "./TopCreatorsCard.css";
import { Link } from "react-router-dom";

const creatorsData = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    artworks: 15,
    rating: 4.9,
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    artworks: 12,
    rating: 4.8,
  },
  {
    name: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    artworks: 10,
    rating: 4.7,
  },
  {
    name: "Bob Lee",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    artworks: 8,
    rating: 4.6,
  },
  {
    name: "CryptoKitty",
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    artworks: 20,
    rating: 4.95,
  },
  {
    name: "NFT Guru",
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    artworks: 18,
    rating: 4.88,
  },
  {
    name: "Pixel Artist",
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    artworks: 14,
    rating: 4.85,
  },
];

function TopCreatorsCard() {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });

  // Sorting function
  const sortedCreators = React.useMemo(() => {
    const sorted = [...creatorsData];
    sorted.sort((a, b) => {
      let aKey = a[sortConfig.key];
      let bKey = b[sortConfig.key];

      // For name, compare strings case-insensitive
      if (sortConfig.key === "name") {
        aKey = aKey.toLowerCase();
        bKey = bKey.toLowerCase();
      }

      if (aKey < bKey) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aKey > bKey) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  }, [sortConfig]);

  // Toggle sorting direction or change sorting key
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Helper to add arrow icon to sorted column
  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return null;
  };

  return (
    <div className="top-creators-card w-100 my-3">
      <div className="top-creators-header">
        <span className="top-creators-title">Top Creators</span>
        <Link
          href="#"
          className="top-creators-seeall rounded rounded-5 px-3 py-2 text-decoration-none"
        >
          See all
        </Link>
      </div>
      <div className="top-creators-table-wrapper">
        <table className="top-creators-table">
          <thead>
            <tr>
              <th
                role="button"
                tabIndex={0}
                onClick={() => requestSort("name")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") requestSort("name");
                }}
                className="sortable"
                aria-sort={
                  sortConfig.key === "name" ? sortConfig.direction : "none"
                }
              >
                NAME {getSortArrow("name")}
              </th>
              <th
                role="button"
                tabIndex={0}
                onClick={() => requestSort("artworks")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    requestSort("artworks");
                }}
                className="sortable"
                aria-sort={
                  sortConfig.key === "artworks" ? sortConfig.direction : "none"
                }
              >
                ARTWORKS {getSortArrow("artworks")}
              </th>
              <th
                role="button"
                tabIndex={0}
                onClick={() => requestSort("rating")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") requestSort("rating");
                }}
                className="sortable"
                aria-sort={
                  sortConfig.key === "rating" ? sortConfig.direction : "none"
                }
              >
                RATING {getSortArrow("rating")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCreators.map((creator, idx) => (
              <tr key={idx}>
                <td className="creator-info">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="top-creators-avatar"
                  />
                  <span className="top-creators-name">{creator.name}</span>
                </td>
                <td>{creator.artworks}</td>
                <td>{creator.rating.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopCreatorsCard;
