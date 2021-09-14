import React, { useReducer } from "react";
import ItemDataContext from "./item-dataContext";

const defualtState = {
  img1: "",
  img2: "",
  img3: "",
  seller: "",
  title: "",
  description: "",
  star: "",
  price: "",
  total: "",
};

const itemReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      img1: action.item.img1,
      img2: action.item.img2,
      img3: action.item.img3,
      seller: action.item.seller,
      title: action.item.title,
      description: action.item.description,
      star: action.item.star,
      price: action.item.price,
      total: action.item.total,
    };
  }
};

function ItemDataProvider(props) {
  const [itemState, dispatchItem] = useReducer(itemReducer, defualtState);
  const addDataHandler = (item) => {
    dispatchItem({ type: "ADD", item: item });
  };

  const itemDataContext = {
    img1: itemState.img1,
    img2: itemState.img2,
    img3: itemState.img3,
    seller: itemState.seller,
    title: itemState.title,
    description: itemState.description,
    star: itemState.star,
    price: itemState.price,
    total: itemState.total,
    addData: addDataHandler,
  };

  return (
    <ItemDataContext.Provider value={itemDataContext}>
      {props.children}
    </ItemDataContext.Provider>
  );
}

export default ItemDataProvider;
