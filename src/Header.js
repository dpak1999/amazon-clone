import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <Link to="/">
        <img className="header__logo" src="./img/amzon-logo.png" alt="Logo" />
      </Link>
      {/* search bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* options */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign One</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        {/* Basket */}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

// http://pngimg.com/uploads/amazon/amazon_PNG11.png

export default Header;
