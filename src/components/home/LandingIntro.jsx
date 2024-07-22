import React from "react";
import LandingWallet from "../landing/LandingWallet";

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <LandingWallet
            title={"Set up your wallet"}
            para={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
            }
          />
          <LandingWallet
            title={"Add your NFT's"}
            para={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
            }
          />
          <LandingWallet
            title={"Sell your NFT's"}
            para={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
