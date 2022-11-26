import { useFormik } from "formik";
import validations from "./validations";
import { useAuth } from "../../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_BASE_ENDPOINT}/api/Auth/register`, values)
        .then((response) => {
          login(values, response);
          console.log(`${values.firstName} Kayıt Yaptı`);
        });
    },
    validationSchema: validations,
  });
  return (
    <div>
      <h1>Singup</h1>
      <form onSubmit={formik.handleSubmit}>
        <br />
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <div className="error">{formik.errors.password}</div>
        )}
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <div className="error">{formik.errors.password}</div>
        )}
        <br />
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error">{formik.errors.email}</div>
        )}
        <br />
        <br />
        <label htmlFor="Password">password</label>
        <br />
        <input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="error">{formik.errors.password}</div>
        )}
        <br />
        <br />
        <button type="submit" className="btn btn-info">
          Kayıt Ol
        </button>
        <br />
        <br />
        <Link to="/">
          <button type="button" className="btn btn-info">
            Home
          </button>
        </Link>
      </form>
    </div>
  );
}
