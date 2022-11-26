import axios from "axios";

export default class ProductServices {
  getProducts() {
    return axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/api/Products/getall`
    );
  }
  getProductById(id) {
    return axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/api/Products/getbyproductid?productid=${id}`
    );
  }
  getProductsDetails() {
    return axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/api/Products/getproductdetails`
    );
  }
  getProductsByCategoryId(id) {
    return axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/api/Products/getbycategoryid?categoryId=${id}`
    );
  }
  getProductDetailsById(id) {
    return axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/api/Products/getporductdetailsbyid?productId=${id}`
    );
  }
  addProduct(values) {
    return axios.post(
      `${process.env.REACT_APP_BASE_ENDPOINT}/api/Products/add`,
      values
    );
  }
  deleteProduct(id) {
    return axios.post(
      `${process.env.REACT_APP_BASE_ENDPOINT}/api/Products/delete?id=${id}`
    );
  }
  updateProduct(values) {
    return axios.post(
      `${process.env.REACT_APP_BASE_ENDPOINT}/api/Products/update`,
      values
    );
  }
}
