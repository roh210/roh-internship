import React from 'react'

export default function LandingWallet({title,para}) {
  return (
    <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_wallet" data-aos="fade-in-up"></i>
              <div className="text">
                <h4 className="" data-aos="fade-in-up">{title}</h4>
                <p data-aos="fade-in-up"
                data-aos-delay="250">
                  {para}
                </p>
              </div>
              <i className="wm icon_wallet"></i>
            </div>
          </div>
  )
}
