import React from "react";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form-data", values);
    },
    validate: (values) => {
      // values.name, values.email, values.password
      // handle error: error.name, error.email, error.password
      // error.name = "this field is required"
      let errors = {};

      if (!values.name) {
        errors.name = "Required!";
      }
      if (!values.email) {
        errors.email = "Required!";
      }
      if (!values.password) {
        errors.password = "Required!";
      }

      return errors;
    },
  });
  console.log("formik errors", formik.errors);

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="input-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name here!"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="input-field"
        />
        {formik.errors.name ? (
          <div className="form-validation">{formik.errors.name} </div>
        ) : null}
        <label htmlFor="email" className="input-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email here!"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="input-field"
        />
        {formik.errors.email ? (
          <div className="form-validation">{formik.errors.email} </div>
        ) : null}
        <label htmlFor="password" className="input-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password here!"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="input-field"
        />
        {formik.errors.password ? (
          <div className="form-validation">{formik.errors.password} </div>
        ) : null}
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
