import React from "react";
import {
  Stack,
  Typography,
  IconButton,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Formik, Form } from "formik";
import { TextFieldWrapper } from "../../Utils/Shared Components/TextFieldWrapper";
import GoogleLogo from "../../Assets/Login/GoogleLogo.png";
import LinkedInLogo from "../../Assets/Login/LinkedinLogo.png";
import "./Login.scss";
import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";
import { FlatButton } from "../../Styles/styledComponents/Buttons/FlatButton";
import { LoginSchema } from "../../Schemas/index";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LoginCover from "../../Assets/Login/LoginCover.png";

const initialValues = {
  email: "",
  password: "",
};

export const Login = () => {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const handleGoogleAuth = () => {
    window.open(`http://localhost:8080/auth/google/callback`, "_self");
  };
  return (
    <Stack
      direction="row"
      justifyContent={"space-evenly"}
      sx={{
        background: "white",
        width: "100%",
        height: "100vh",
      }}
    >
      <ArrowBackIosNewIcon color="#202125" />
      <Typography variant="h6" color="#202125">
        Back
      </Typography>

      <Stack spacing={3} sx={{ padding: "5%", width: "100%" }}>
        <Typography variant="h5" color="#202125">
          Welcome Back !
        </Typography>
        <Typography color="#202125">
          Today is a new day. It's your day. You shape it. Sign in to start
          connecting with Communities.
        </Typography>

        <Formik
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={initialValues}
          validationSchema={LoginSchema}
        >
          <Form>
            <Form>
              <Stack spacing={2} width={{ lg: 400 }}>
                <TextFieldWrapper name="email" label="Email" type="text" />
                <TextFieldWrapper
                  name="password"
                  label="Password"
                  type="password"
                />
                <FlatButton type="submit" className="login-button">
                  Log In
                </FlatButton>
                <div className="divider">Or</div>
              </Stack>
            </Form>
          </Form>
        </Formik>
        <FlatButton
          className="google-button"
          backgroundColor="white"
          borderColor="#690073"
          onClick={handleGoogleAuth}
        >
          <img src={GoogleLogo} alt="Google Logo" />
          Log in with Google
        </FlatButton>
        <FlatButton
          className="linkedin-button"
          backgroundColor="white"
          borderColor="#690073"
        >
          <img src={LinkedInLogo} alt="LinkedIn Logo" />
          Log in with LinkedIn
        </FlatButton>
        <Typography variant="caption">C 2023 ALL RIGHTS RESERVED</Typography>
      </Stack>
      {isLargeScreen && (
        <Stack sx={{ background: "#bf00c3" }}>
          <img src={LoginCover} alt="" />
        </Stack>
      )}
    </Stack>
  );
};

export default Login;
