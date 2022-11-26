import { useFormik } from "formik";
import React from "react";
import ProductServices from "../../../services/productService";

export default function AddProduct() {
  let formik = useFormik({
    initialValues: {
      productName: "",
      categoryId: "",
      unitsInStock: "",
      unitPrice: "",
    },
    onSubmit: (values) => {
      let productService = new ProductServices();
      productService
        .addProduct(values)
        .then((response) => console.log(response));
    },
  });
  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={formik.handleSubmit}>
        <br />
        <label htmlFor="productName">Product Name</label>
        <br />
        <input
          id="productName"
          name="productName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productName}
        />
        <br />
        <br />
        <label htmlFor="categoryId">Category</label>
        <br />
        <input
          id="categoryId"
          name="categoryId"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.categoryId}
        />
        <br />
        <br />
        <label htmlFor="unitsInStock">Units In Stock</label>
        <br />
        <input
          id="unitsInStock"
          name="unitsInStock"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.unitsInStock}
        />
        <br />
        <br />
        <label htmlFor="unitPrice">Unit Price</label>
        <br />
        <input
          id="unitPrice"
          name="unitPrice"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.unitPrice}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-info">
          Add
        </button>
      </form>
    </div>
  );
}
