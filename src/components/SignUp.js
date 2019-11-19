import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components"

const SignUpContainer = styled.div`
diplay: flex;
text-align: left;
width: 25%;
padding: 3rem;
`
const ButtonAvatar = styled.button`
background-color: black;
color: white;
width: 80%;
`
const ButtonSignup = styled.button`
background-color: black;
color: white;
width: 92%;
padding: 2%;
margin-top: 7%;
`
const AvatarSignUp = styled.div`
display: flex;
width: 95%;
justify-content: space-between;
`
const AvatarSignUpRight = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`
const SignUpFormContainer = styled.div`
width: 95%
`
const FieldButton = styled(Field)`
width: 90%
`
const Astrik = styled.span`
color: red;
`

const SignUpForm = ({ errors, touched }) => {

    return(
        <SignUpContainer>
            <h1>Sign Up</h1>
            <p>Get started with your account now! We just need a few details.</p>
            <p> <Astrik>*</Astrik> denotes a required field</p>

            <AvatarSignUp>
                <div className="avatarSignUp-LeftSide">
                <i class="far fa-user-circle fa-9x"></i>
                </div>

                <AvatarSignUpRight>
                    <p> Upload a Profile Photo</p>
                    <ButtonAvatar>Select a Photo</ButtonAvatar>
                </AvatarSignUpRight>
            </AvatarSignUp> 


            <SignUpFormContainer>
                <Form>
                    <p>Username <Astrik>*</Astrik></p>
                <FieldButton type= "text" name="username"/>
                    {touched.username && errors.username && (
                    <p>{errors.username}</p>
                    )}
                    <p>Email <Astrik>*</Astrik></p>
                 <FieldButton type="email" name="email" /> 
                    {touched.email && errors.email && (
                    <p>{errors.email}</p>
                    )}
                    <p>Password <Astrik>*</Astrik></p>
                <FieldButton type="password" name="password" />
                    {touched.password && errors.password && (
                    <p>{errors.password}</p>
                    )}
                    <ButtonSignup type="submit">Create Account</ButtonSignup>

                </Form>
            </SignUpFormContainer>
        </SignUpContainer>
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
        .post("https://bw-topnine.herokuapp.com/api/auth/register", values)
        .then(res => {
          setStatus(res.data);
          console.log(res);
          //props.history.push('/login');
          
        })
        .catch(err => console.log(err.response));
    }
  })(SignUpForm);
  export default FormikUserForm;

