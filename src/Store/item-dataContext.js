import React from "react";

const ItemDataContext = React.createContext({
  img1: "",
  img2: "",
  img3: "",
  seller: "",
  title: "",
  description: "",
  star: "",
  price: "",
  total: "",
  addData: () => {},
});

export default ItemDataContext;
