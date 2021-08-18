import React, { useState } from "react";
import DisplayAllProducts from "../components/DisplayAllProducts";
import ProductForm from "../components/ProductForm";

const Main = () => {
  const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
  return (
    <div>
      <ProductForm
        formSubmittedBoolean={formSubmittedBoolean}
        setFormSubmittedBoolean={setFormSubmittedBoolean}
      />
      <hr />
      <DisplayAllProducts
        formSubmittedBoolean={formSubmittedBoolean}
        setFormSubmittedBoolean={setFormSubmittedBoolean}
      />
    </div>
  );
};

export default Main;
