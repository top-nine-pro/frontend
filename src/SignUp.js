import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUpForm = ({ values, errors, touched, status}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       status && setUsers(users => [...users, status]);
     }, [status]);

    return(
        <div>
            <h4>Sign Up</h4>
            <p>Get started with your account now! We just need a few details.</p>
            <p> * denotes a required field</p>

            <div className="avatarSignUp">
                <div className="avatarSignUp-LeftSide">
                <i class="far fa-user-circle"></i>
                </div>

                <div className="avatarSignUp-RightSide">
                    <p> Upload a Profile Photo</p>
                    <button>Select a Photo</button>
                </div>
            </div> 


            <div className="signup-form">
                <Form>
                    <p>Username *</p>
                <Field type="text" name="username" />
                    {touched.name && errors.name && (
                    <p className="errors">{errors.name}</p>
                    )}
                    <p>Email *</p>
                 <Field type="email" name="email" />
                    {touched.email && errors.email && (
                    <p className="errors">{errors.email}</p>
                    )}
                    <p>Password *</p>
                <Field type="password" name="password" />
                    {touched.password && errors.password && (
                    <p className="errors">{errors.password}</p>
                    )}
                    <button>Create Account</button>
                </Form>
            </div>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, email, password}) {
      return {
        username: username || "",
        email: email || "",
        password: password || "",
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().min(6, "Password must be 6 characters or longer").required(),
      
    }),
    handleSubmit(values, { setStatus }) {
      // values is our object with all our data on it
      axios
        .post("https://reqres.in/api/users/", values)
        .then(res => {
          setStatus(res.data);
          console.log(res);
        })
        .catch(err => console.log(err.response));
    }
  })(SignUpForm);
  export default FormikUserForm;

//export default SignUpForm