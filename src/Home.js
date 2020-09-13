import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          {/* banner image */}
          <img
            className="home__image"
            src="./img/amazon-banner.jpg"
            alt="Banner"
          />

          <div className="home__row">
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
