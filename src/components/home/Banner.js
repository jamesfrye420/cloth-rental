import { Button } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./Banner.module.css";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  const onClickHander = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
        <Button
          onClick={onClickHander}
          variant="outlined"
          className={classes.banner__searchButton}
        >
          {!showSearch ? "Search Dates" : "Hide"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className={classes.banner__info}>
        <h1>Where fashion meets Faith</h1>
        <h5>Get dressed for your favourite occasions the way you desire.</h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Collections
        </Button>
      </div>
    </div>
  );
}

export default Banner;
