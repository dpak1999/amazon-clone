import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <img className="header__logo" src="./img/amzon-logo.png"></img>
      {/* search bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>
      {/* options */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineT">Sign One</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <span className="header__optionLineT">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineT">Prime</span>
        </div>
      </div>
    </div>
  );
}

// http://pngimg.com/uploads/amazon/amazon_PNG11.png

export default Header;
