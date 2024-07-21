import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NftItem from "../items/NftItem";
import axios from "axios";
import NftSkeleton from "../items/NftSkeleton";

const ExploreItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [maxSliceRange, setMaxSliceRange] = useState(8);

  async function fetchItems() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
    );
    setItems(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const handleLoadMoreBtn = () => {
    setSkeletonLoading(true);
    setTimeout(() => {
      setSkeletonLoading(false);
      setMaxSliceRange((previous) => previous + 4);
    }, 500);
  };

  const filterItems = (event) => {
    setLoading(true)
    const target = event.target.value;
    const sortedItems = [...items];
    if (target === "price_low_to_high") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (target === "price_high_to_low") {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (target === "likes_high_to_low") {
      sortedItems.sort((a, b) => b.likes - a.likes);
    }
    setTimeout(()=>{
      setLoading(false)
      setItems(sortedItems);
    },500)
  };

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={filterItems}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {loading ? (
        new Array(maxSliceRange).fill(0).map((_, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <NftSkeleton />
          </div>
        ))
      ) : (
        <>
          {items.slice(0, maxSliceRange).map((item) => (
            <div
              key={item.id}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <NftItem item={item} />
            </div>
          ))}
          {skeletonLoading &&
            new Array(4).fill(0).map((_, index) => (
              <div
                key={index}
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <NftSkeleton />
              </div>
            ))}
        </>
      )}

      {items.length > maxSliceRange && (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={handleLoadMoreBtn}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
