import { useFormik } from "formik";
import { useAuth } from "../../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import validations from "./validations";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  let navigate = useNavigate();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_BASE_ENDPOINT}/api/Auth/login`, values)
        .then((response) => {
          axios
            .get(
              `${process.env.REACT_APP_BASE_ENDPOINT}/api/Auth/getuserdetails?email=${values.email}`
            )
            .then((user) => {
              login(response, user);
              toast.success(`${user.data.data[0].firstName} Giriş Yapıldı!`);
              navigate("/");
            });
        })
        .catch((response) => toast.error(response.response.data));
    },
    validationSchema: validations,
  });
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
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
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-info">
          Giriş Yap
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
