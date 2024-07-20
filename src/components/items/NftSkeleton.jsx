import React from "react";
import Skeleton from "../UI/Skeleton";
import { Link } from "react-router-dom";

export default function NftSkeleton() {
  return (
    <div className="nft__item">
      <div className="author_list_pp">
        <Link
          to={`/author`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Creator: Monica Lucas"
        >
          <Skeleton width={"50px"} height={"50px"} borderRadius={"50%"} />
          <i className="fa fa-check"></i>
        </Link>
      </div>
      <div className="nft__item_wrap">
        <Skeleton width={"100%"} height={"100%"} />
      </div>
      <div style={{ marginTop: "5px" }} />
      <div className="nft__item_info">
        <Link to="/item-details">
          <Skeleton width={"150px"} height={"25px"} />
        </Link>
        <div className="nft__item_price">
          <Skeleton width={"100px"} height={"20px"} />
        </div>
        <div className="nft__item_like">
          <Skeleton width={"30px"} height={"15px"} />
        </div>
      </div>
    </div>
  );
}
