import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import classes from "./Searchpage.module.css";
import SearchResult from "./SearchResult";
// import GownImg from "../../../src/Assets/GOWN/WhatsApp Image 2021-09-12 at 16.21.49 (1).jpeg";
// import SherwaniImg from "";
import axios from "axios";

function Searchpage() {
  const [items, setItems] = useState([]);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(
        "https://cloth-rental-app-default-rtdb.firebaseio.com/items.json"
      );
      const loadedItems = [];
      for (const key in response.data) {
        loadedItems.push({
          id: key,
          title: response.data[key].title,
          description: response.data[key].description,
          price: response.data[key].price,
          img1: response.data[key].img1,
          img2: response.data[key].img2,
          img3: response.data[key].img3,
          seller: response.data[key].seller,
          total: response.data[key].total,
          star: response.data[key].star,
        });
      }
      setItems(loadedItems);
    };
    fetchItems().catch((error) => {
      setHttpError(error);
    });
  }, []);

  if (httpError) {
    // return <p>Something went wrong</p>;
    console.log(httpError);
  }

  const itemList = items.map((item) => {
    return (
      <SearchResult
        key={item.id}
        id={item.id}
        img1={item.img1}
        img2={item.img2}
        img3={item.img3}
        title={item.title}
        description={item.description}
        price={item.price}
        seller={item.seller}
        total={item.total}
        star={item.star}
      />
    );
  });

  return (
    <div className={classes.searchPage}>
      <div className={classes.searchPage__info}>
        <p>62 Items that could suit you · 26 September to 30 September · </p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Color Variants</Button>
        <Button variant="outlined">Type </Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Stores near you</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      {itemList}
    </div>
  );
}

export default Searchpage;
