import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("Geçerli Email Giriniz").required("Zorunlu Alan"),
  password: yup.string().required("Zorunlu Alan"),
});

export default validations;
