import React from 'react'
import BannerImg from "./banner-img.png";
import './Banner.scss'
function Banner() {
  return (
    <div className='hero-banner'>
      <div className="content">
        <div className="text-content">
            <h1>SALE</h1>
            <p>
            Hurry Up!! <br /> Headphones For Just ₹2500! Offer Valid For  Just 3 Days
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Buy Now</div>
                        <div className="banner-cta v2">Add To Cart</div>
                        </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
  )
}

export default Banner
