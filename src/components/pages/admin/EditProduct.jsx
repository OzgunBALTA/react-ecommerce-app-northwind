import { useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import ProductService from "../../../services/productService";

export default function EditProduct() {
  const { id } = useParams();

  let productService = new ProductService();
  const { isLoading, error, data } = useQuery(["admin:product", id], () =>
    productService.getProductById(id).then(console.log("Başarılı"))
  );

  if (isLoading) return "loading...";
  if (error) return "An error has occurred: " + error.message;

  let product = data.data.data;
  const handleSubmit = (values) => {
    console.log(values);

    productService
      .updateProduct(values)
      .catch((response) => console.log(response));
  };

  return (
    <div>
      <h3>Edit</h3>
      <Formik
        initialValues={{
          productId: id,
          categoryId: product.categoryId,
          productName: product.productName,
          unitsInStock: product.unitsInStock,
          unitPrice: product.unitPrice,
        }}
        //validationSchema
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <label htmlFor="categoryId">Category</label>
            <br />
            <input
              id="categoryId"
              name="categoryId"
              type="text"
              value={values.categoryId}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            <br />
            <label htmlFor="productName">Product Name</label>
            <br />
            <br />
            <input
              id="productName"
              name="productName"
              type="text"
              value={values.productName}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            <br />
            <br />
            <label htmlFor="unitsInStock">Units In Stock</label>
            <br />
            <input
              id="unitsInStock"
              name="unitsInStock"
              type="text"
              value={values.unitsInStock}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            <br />
            <br />
            <label htmlFor="unitPrice">Unit Price</label>
            <br />
            <input
              id="unitPrice"
              name="unitPrice"
              type="text"
              value={values.unitPrice}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-info"
              onClick={handleSubmit}
            >
              Update
            </button>
          </>
        )}
      </Formik>
    </div>
  );
}
