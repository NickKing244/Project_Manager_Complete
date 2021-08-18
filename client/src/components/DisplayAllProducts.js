import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayAllProducts = (props) => {
  const { formSubmittedBoolean, setFormSubmittedBoolean } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((allProducts) => setProducts(allProducts.data))
      .catch((err) => console.log(err));
  }, [formSubmittedBoolean]);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((response) => {
        console.log("Deleted Product");
        setFormSubmittedBoolean(!formSubmittedBoolean);
      })
      .catch((err) => console.log("Error deleting product", err));
  };

  return (
    <div>
      <h1>Display All Products</h1>
      {products.length > 0
        ? products.map((product, index) => (
            <div key={index}>
              <Link to={`/${product._id}/edit`}>Edit</Link>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <button onClick={() => deleteProduct(product._id)}>DELETE</button>
              <hr />
            </div>
          ))
        : null}
    </div>
  );
};

export default DisplayAllProducts;
