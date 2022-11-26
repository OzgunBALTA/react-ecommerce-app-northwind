import axios from "axios";

export default class CategoryService {
  getCategories() {
    return axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/api/Categories/getall`
    );
  }
}
