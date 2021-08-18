import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";

const DisplayProduct = (props) => {
  const { productId } = props;
  const [productInfo, setProductInfo] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${productId}`)
      .then((queriedProduct) => {
        console.log(queriedProduct.data);
        setProductInfo(queriedProduct.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/product/${productId}`)
      .then((response) => {
        console.log("Deleted Product");
        navigate("/");
      })
      .catch((err) => console.log("Error deleting product", err));
  };
  return (
    <div>
      <h1>Display Products</h1>
      <p>{productInfo.title}</p>
      <p>{productInfo.price}</p>
      <p>{productInfo.description}</p>
      <button onClick={deleteProduct}>DELETE</button>
      <br />
      <Link to="/">Back</Link>
    </div>
  );
};

export default DisplayProduct;
