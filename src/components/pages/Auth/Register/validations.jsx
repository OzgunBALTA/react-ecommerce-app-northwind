import * as yup from "yup";

const validations = yup.object().shape({
  firstName: yup.string().required("Zorunlu Alan"),
  lastName: yup.string().required("Zorunlu Alan"),
  email: yup.string().email("Geçerli Email Giriniz").required("Zorunlu Alan"),
  password: yup
    .string()
    .min(5, "Parola En Az 5 Karakter İçermelidir")
    .required("Zorunlu Alan"),
  // passwordConfirm: yup
  //   .string()
  //   .oneOf([yup.ref("password")])
  //   .required(),
});

export default validations;
