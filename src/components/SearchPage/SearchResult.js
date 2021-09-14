import React, { useContext } from "react";
import classes from "./SearchResult.module.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router";
import ItemDataContext from "../../Store/item-dataContext";

function SearchResult({
  id,
  img1,
  img2,
  img3,
  seller,
  title,
  description,
  star,
  price,
  total,
}) {
  const ItemCtx = useContext(ItemDataContext);
  const history = useHistory();

  const onClickHandler = () => {
    ItemCtx.addData({
      id,
      img1,
      img2,
      img3,
      seller,
      title,
      description,
      star,
      price,
      total,
    });
    history.push(`/product/${id}`);
  };

  return (
    <div className={classes.searchResult} onClick={onClickHandler}>
      {console.log(img1)}
      <img src={img1} alt="" />
      <FavoriteBorderIcon className={classes.searchResult__heart} />
      <div className={classes.searchResult__info}>
        <div className={classes.searchResult__infoTop}>
          <p>{seller}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className={classes.searchResult__infoBottom}>
          <div className={classes.searchResult__stars}>
            <StarIcon className={classes.searchResult__star} />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className={classes.searchResults__price}>
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
