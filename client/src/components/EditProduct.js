import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { navigate } from "@reach/router";

const EditProduct = (props) => {
  const { productId } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${productId}`)
      .then((queriedProduct) => {
        console.log(queriedProduct.data);
        setTitle(queriedProduct.data.title);
        setPrice(queriedProduct.data.price);
        setDescription(queriedProduct.data.description);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${productId}`, {
        title,
        price,
        description,
      })
      .then((updatedProduct) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleUpdateSubmit}>
        Title:
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        Price:
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <br />
        Description:
        <input
          type="text"
          id="descriptionInput"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br />
        <input type="submit" value="UPDATE" />
      </form>
    </div>
  );
};

export default EditProduct;
