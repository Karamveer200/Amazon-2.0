import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne hide-sm">Hello Guest</span>
          <span className="header__optionTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne hide-sm">Returns</span>
          <span className="header__optionTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne hide-sm">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_basketCount header__optionTwo">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;