import React from "react";
import { Link } from "react-router-dom";
import Browse from "../landing/Browse";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Browse
            title={"Art"}
            icon={"fa-image"}
            delay={{
              "data-aos-delay": "100",
            }}
          />
          <Browse
            title={"Music"}
            icon={"fa-music"}
            delay={{
              "data-aos-delay": "200",
            }}
          />
          <Browse
            title={"Domain Names"}
            icon={"fa-search"}
            delay={{
              "data-aos-delay": "300",
            }}
          />
          <Browse
            title={"Virtual Worlds"}
            icon={"fa-globe"}
            delay={{
              "data-aos-delay": "400",
            }}
          />
          <Browse
            title={"Trading Cards"}
            icon={"fa-vcard"}
            delay={{
              "data-aos-delay": "500",
            }}
          />

          <Browse
            title={"Collectibles"}
            icon={"fa-th"}
            delay={{
              "data-aos-delay": "600",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
