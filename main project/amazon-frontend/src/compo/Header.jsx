import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faFlag,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../States/StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        ></img>
      </Link>

      <div className="header__option">
        <span className="header__optionLineOne">Hello</span>
        <span className="header__optionLineTwo">
          <FontAwesomeIcon icon={faLocationDot} bounce size="xs" />
          Select your address
        </span>
      </div>

      <div className="header__search">
        <input
          className="header__searchInput"
          id="searchBar"
          placeholder="Search Amazon.in"
          type="text"
        ></input>
        <div id="searchIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>

      <div className="header_nav">
      

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&amp; Orders</span>
        </div>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <FontAwesomeIcon id="cartIcon" icon={faCartShopping} size="lg" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
