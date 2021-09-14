import React, { useState } from "react";
import classes from "./Search.module.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FilterVintage } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className={classes.search}>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        What's your ocassion
        <FilterVintage />
      </h2>
      <input min={0} defaultValue={1} type="number " />
      <Button onClick={() => history.push("/search")}>Search Store</Button>
    </div>
  );
}

export default Search;
