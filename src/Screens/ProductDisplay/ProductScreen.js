import React, { useState, useEffect } from "react";
import classes from "./ProductScreen.module.css";
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductScreen() {
  const [item, setItem] = useState({});
  const [img, setImg] = useState();
  const [httpError, setHttpError] = useState();
  const params = useParams();

  const { id } = params;

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(
        `https://cloth-rental-app-default-rtdb.firebaseio.com/items/${id}.json`
      );
      if (response.statusText === "OK") {
        setItem(response.data);
      }
    };
    fetchItem().catch((error) => {
      setHttpError(error);
    });
  }, [id]);

  useEffect(() => {
    setImg(item.img1);
  }, [item]);

  if (httpError) {
    return <p>Something went wrong</p>;
    // console.log(httpError);
  }

  const onClickHander = (event) => {
    setImg(item[event.target.id]);
  };

  return (
    <div className={classes.display}>
      <div className={classes.display__img}>
        <div className={classes.display__mainImg}>
          <img src={`/${img}`} alt="" />
        </div>
        <div className={classes.display__altImg}>
          <div><img id="img1" src={`/${item.img1}`} alt="" onClick={onClickHander} /></div>
          <div><img id="img2" src={`/${item.img2}`} alt="" onClick={onClickHander} /></div>
          <div><img id="img3" src={`/${item.img3}`} alt="" onClick={onClickHander} /></div>
        </div>
      </div>
      <div className={classes.display__info}>
        <h1>{item.title}</h1>
        <p>{item.seller}</p>
        <div className={classes.display__stars}>
          <p>
            <strong>{item.star}</strong><StarIcon className={classes.display__star} />
          </p>
        </div>
        <h2>{item.price}</h2>
        <p>{item.description}</p>
        <Button variant="contained" className={classes.display__button}>
          Add to Bag
        </Button>
        <Button variant="contained">Rent Now</Button>
      </div>

    </div>
  );
}

export default ProductScreen;
