import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import sliderSettings from "../UI/SlickerUI/SlickerSettings";
import NftItem from "../items/NftItem";
import NftSkeleton from "../items/NftSkeleton";

const NewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchItems() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
    );
    setItems(data);
    setLoading(false)
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row" data-aos="fade-in">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...sliderSettings}>
            {loading
              ? new Array(7).fill(0).map((_, index) => (
                  <div className="slick-slide" key={index}>
                   <NftSkeleton/>
                  </div>
                ))
              : items.map((item) => (
                  <div className="slick-slide" key={item.id}>
                   <NftItem item={item}/>
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
