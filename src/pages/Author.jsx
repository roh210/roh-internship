import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import Skeleton from "../components/UI/Skeleton";
import NftSkeleton from "../components/items/NftSkeleton";
import axios from "axios";

const Author = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [followerCount, setfollowerCount] = useState();
  const [toggleButton, setToggleButton] = useState(false);

  async function fetchItems() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
    );
    setAuthor(data);
    setItems(data.nftCollection);
    setLoading(false);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  function incrementFollower() {
    setToggleButton(true);
    setfollowerCount(author.followers);
    setfollowerCount((previous) => previous + 1);
  }

  function decrementFollower() {
    setToggleButton(false);
    setfollowerCount((previous) => previous - 1);
  }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              {loading ? (
                <>
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <Skeleton
                            width={"150px"}
                            height={"150px"}
                            borderRadius={"50%"}
                          />
                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              <Skeleton width={"200px"} height={"25px"} />
                              <span className="profile_username">
                                <Skeleton width={"100px"} height={"15px"} />
                              </span>
                              <span id="wallet" className="profile_wallet">
                                <Skeleton width={"250px"} height={"20px"} />
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <div className="profile_follower">
                            <Skeleton width={"150px"} height={"40px"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {new Array(8).fill(0).map((_, index) => (
                    <div
                      className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                      style={{ display: "block", backgroundSize: "cover" }}
                      key={index}
                    >
                      <NftSkeleton />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <img src={author.authorImage} alt="" />

                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              {author.authorName}
                              <span className="profile_username">
                                {author.tag}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {author.address}
                              </span>
                              <button id="btn_copy" title="Copy Text">
                                Copy
                              </button>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <div className="profile_follower">
                            {followerCount || author.followers} followers
                          </div>
                          {!toggleButton ? (
                            <Link
                              to="#"
                              className="btn-main"
                              onClick={incrementFollower}
                            >
                              Follow
                            </Link>
                          ) : (
                            <Link
                              to="#"
                              className="btn-main"
                              onClick={decrementFollower}
                            >
                              Unfollow
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <AuthorItems items={items} author={author} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
