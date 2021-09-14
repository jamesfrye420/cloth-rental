import { Button, Input } from "@material-ui/core";
import axios from "axios";
import React, { useRef } from "react";
import classes from "./Additem.module.css";

function AddItems() {
  const img1 = useRef("");
  const img2 = useRef("");
  const img3 = useRef("");
  const seller = useRef("");
  const title = useRef("");
  const description = useRef("");
  const star = useRef("");
  const price = useRef("");
  const total = useRef("");

  async function addItemHandler(items) {
    await axios.post(
      "https://cloth-rental-app-default-rtdb.firebaseio.com/items.json",
      JSON.stringify(items)
    );
    img1.current.value = "";
    img2.current.value = "";
    img3.current.value = "";
    seller.current.value = "";
    title.current.value = "";
    description.current.value = "";
    star.current.value = "";
    price.current.value = "";
    total.current.value = "";
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newItem = {
      img1: img1.current.value,
      img2: img2.current.value,
      img3: img3.current.value,
      seller: seller.current.value,
      title: title.current.value,
      description: description.current.value,
      star: star.current.value,
      price: price.current.value,
      total: total.current.value,
    };
    addItemHandler(newItem);
  };

  return (
    <div className={classes.additem}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="img1">img1</label>
        <Input variant="filled" type="text" id="img1" ref={img1} />
        <label htmlFor="img2">img2</label>
        <Input variant="filled" type="text" id="img2" ref={img2} />
        <label htmlFor="img3">img3</label>
        <Input variant="filled" type="text" id="img3" ref={img3} />
        <label htmlFor="seller">seller</label>
        <Input type="text" id="seller" ref={seller} />
        <label htmlFor="tite">title</label>
        <Input type="text" id="title" ref={title} />
        <label htmlFor="description">description</label>
        <Input type="text" id="description" ref={description} />
        <label htmlFor="star">star</label>
        <Input type="text" id="star" ref={star} />
        <label htmlFor="price">price</label>
        <Input type="text" id="price" ref={price} />
        <label htmlFor="total">total</label>
        <Input type="text" id="total" ref={total} />
        <Button variant="contained" color="secondary">
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddItems;
