import React, { useState } from "react";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { Close, ExpandMore, Language, MenuOutlined } from "@material-ui/icons";
import { Avatar, Menu } from "@material-ui/core";
import Burger from "./Burger";
import reactDom from "react-dom";

function Header() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const onClickHandler = () => {
    setShowBurgerMenu((prev) => !prev);
  };

  const overlay = (
    <React.Fragment>
      {reactDom.createPortal(<Burger />, document.getElementById("overlays"))}
    </React.Fragment>
  );

  return (
    <div className={classes.header}>
      <div className={classes.header__burger} onClick={onClickHandler}>
        {!showBurgerMenu && <MenuOutlined />}
        {showBurgerMenu && overlay}
      </div>

      <img
        className={classes.header__icon}
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f287ade90956"
        alt=""
      />
      <div className={classes.header__center}>
        <input type="text" />
        <SearchIcon />
      </div>
      <div className={classes.header__right}>
        <p>Rent Your Merch</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
