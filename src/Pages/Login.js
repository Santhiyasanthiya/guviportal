import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()

   const validationRegisterSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),   
  });


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationRegisterSchema,
    onSubmit: async (values) => {
      const data = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      });
      if (data.status === 401) {
        console.log(" ❌ Error ");
       alert(data.message)
      } else {
        const result = await data.json();
        console.log(" ✅ Success", result);
        localStorage.setItem("token", result.token);
       
        navigate("/home");
      }
    },
  });
  return (
    <form className="login-container" onSubmit={formik.handleSubmit}>
    <h1>Login</h1>

    <TextField
      id="outlined-basic"
      label="Email-ID"
      variant="outlined"
      value={formik.values.email}
      name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.email && formik.errors.email}
      helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}      
    />
    <TextField
      id="outlined-basic"
      label="Password"
      variant="outlined"
      value={formik.values.password}
      name="password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.password && formik.errors.password}
      helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null }
    />

    <Button variant="contained" type="submit" color="success">
      Submit
    </Button>
    <p>If you don't have an account <Link to="/register">Click-Here</Link></p>
  </form>
  )
}
