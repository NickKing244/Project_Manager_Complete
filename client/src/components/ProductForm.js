import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const { formSubmittedBoolean, setFormSubmittedBoolean } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling Submit");
    const newProductData = {
      title,
      price,
      description,
    };

    axios
      .post("http://localhost:8000/api/product", newProductData)
      .then((newProduct) => console.log(newProduct))
      .catch((err) => setErrors(err.response.data.errors));
    setTitle("");
    setPrice("");
    setDescription("");
    setFormSubmittedBoolean(!formSubmittedBoolean);
  };
  return (
    <div>
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <input type="submit" value="Create" />
      </form>
      {errors
        ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          ))
        : null}
    </div>
  );
};

export default ProductForm;
