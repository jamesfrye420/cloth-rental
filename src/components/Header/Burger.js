import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Burger.module.css";

function Burger() {
  return (
    <div className={classes.burger__list}>
      <div className={classes.close}>
        <Close color="secondary" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">Men's</a>
        </li>
        <li>
          <a href="#">Women's</a>
        </li>
        <li>
          <a href="#">Archives</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
