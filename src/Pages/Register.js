import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "@mui/material";
import { API } from "../Global";

export function Register() {
  const navigate = useNavigate();

  const validationRegisterSchema = yup.object({
    userName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },

    validationSchema: validationRegisterSchema,
    onSubmit: async (values) => {
       const register = await fetch (`${API}/users/register`,{
          method:"POST",
          body:JSON.stringify(values),
          headers:{"Content-type":"application/json"}
        })    

      if (register.status === 400) {
        alert(register.message);
      
      } else
       {
        const result=await register.json() 
        console.log(result)
        alert("Successfully Registered")
        navigate("/");
       }
    },
  });

  return (
    <form className="register-container" onSubmit={formik.handleSubmit}>
      <h1>Register</h1>

      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={formik.values.userName}
        name="userName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.userName && formik.errors.userName}
        helperText={
          formik.touched.userName && formik.errors.userName
            ? formik.errors.userName
            : null
        }
      />
      <TextField
        id="outlined-basic"
        label="Email-ID"
        variant="outlined"
        value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : null
        }
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
        helperText={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : null
        }
      />

      <Button variant="contained" type="submit" color="success">
        Submit
      </Button>
      <p>
        If you have an account <Link to="/">Click-Here</Link>
      </p>
    </form>
  );
}
