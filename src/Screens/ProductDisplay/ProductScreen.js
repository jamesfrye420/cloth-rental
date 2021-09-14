import React, { useContext, useState } from "react";
import classes from "./ProductScreen.module.css";
import ItemDataContext from "../../Store/item-dataContext";
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";

function ProductScreen() {
  const itemCtx = useContext(ItemDataContext);
  const [img, setImg] = useState(itemCtx.img1);

  const onClickHander = (event) => {
    setImg(itemCtx[event.target.id]);
  };

  return (
    <div className={classes.display}>
      <div className={classes.display__mainImg}>
        <img src={`/${img}`} alt="" />
      </div>
      <div className={classes.display__altImg}>
        <img
          id="img1"
          src={`/${itemCtx.img1}`}
          alt=""
          onClick={onClickHander}
        />
        <img
          id="img2"
          src={`/${itemCtx.img2}`}
          alt=""
          onClick={onClickHander}
        />
        <img
          id="img3"
          src={`/${itemCtx.img3}`}
          alt=""
          onClick={onClickHander}
        />
      </div>
      <div className={classes.display__info}>
        <h1>{itemCtx.title}</h1>
        <p>{itemCtx.seller}</p>
        <div className={classes.display__stars}>
          <StarIcon className={classes.display__star} />
          <p>
            <strong>{itemCtx.star}</strong>
          </p>
        </div>
        <h2>{itemCtx.price}</h2>
        <p>{itemCtx.description}</p>
      </div>
      <Button variant="contained">Add to Bag</Button>
      <Button variant="contained">Rent Now</Button>
    </div>
  );
}

export default ProductScreen;
