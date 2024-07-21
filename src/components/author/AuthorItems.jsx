import React from "react";
import NftItem from "../items/NftItem";

const AuthorItems = ({items,author}) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {items.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={item.id}>
             <NftItem item={item} author={author}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
