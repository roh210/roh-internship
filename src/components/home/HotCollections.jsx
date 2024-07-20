import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "../UI/SlickerUI/SlickerSettings";
import Skeleton from "../UI/Skeleton";

const HotCollections = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );
    setUsers(data);
    setLoading(false)
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...sliderSettings}>
            {loading? (
             new Array(6).fill(0).map((_,index)=>(
              <div className="slick-slide" key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                <Skeleton width={"100%"} height={"100%"}/>
                </div>
                <div className="nft_coll_pp"  >
                <Skeleton width={"50px"} height={"50px"} borderRadius={"50%"}/>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <div>
                  <Skeleton width={"100px"} height={"18px"} borderRadius={"2px"}/>
                  </div>
                  <div>
                  <Skeleton width={"50px"} height={"18px"} borderRadius={"2px"}/>
                  </div>
                </div>
              </div>
            </div>
             ))
            ) : (
              users.map((user) => (
                <div className="slick-slide" key={user.id}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to={`/item-details/${user.nftId}`}>
                        <img
                          src={user.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to={`/item-details/${user.nftId}`}>
                        <img
                          className="lazy pp-coll"
                          src={user.authorImage}
                          alt=""
                        />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{user.title}</h4>
                      </Link>
                      <span>ERC-{user.code}2</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
