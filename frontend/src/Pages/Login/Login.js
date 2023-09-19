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
import { useNavigate } from "react-router";

const initialValues = {
  email: "",
  password: "",
};

export const Login = () => {
  const navigate = useNavigate();
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
        height: "100vh",
        padding: "5%",
      }}
    >
      <Stack>
        <ArrowBackIosNewIcon
          color="#202125"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
      </Stack>
      <Stack
        spacing={3}
        sx={{ marginRight: "2%", width: "100%", maxWidth: "400px" }}
      >
        <Typography variant="h5" color="#202125">
          Welcome Back &#128075;
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
                <FlatButton
                  type="submit"
                  className="login-button"
                  color="white"
                  backgroundColor="#bf00c3"
                  style={{
                    maxWidth: "400px",
                    padding: "10px 20px",
                  }}
                >
                  Log In
                </FlatButton>
                <div className="divider">Or</div>
              </Stack>
            </Form>
          </Form>
        </Formik>
        <FlatButton
          className="google-button"
          style={{
            maxWidth: "400px",
            padding: "10px 20px",
          }}
          backgroundColor="#dadada"
          onClick={handleGoogleAuth}
        >
          <img src={GoogleLogo} alt="Google Logo" />
          Log in with Google
        </FlatButton>
        <FlatButton
          className="linkedin-button"
          style={{
            maxWidth: "400px",
            padding: "10px 20px",
          }}
          backgroundColor="#dadada"
        >
          <img src={LinkedInLogo} alt="LinkedIn Logo" />
          Log in with LinkedIn
        </FlatButton>

        <Stack alignItems={"center"}>
          <Typography variant="caption">C 2023 ALL RIGHTS RESERVED</Typography>
        </Stack>
      </Stack>
      {isLargeScreen && (
        <Stack>
          <img src={LoginCover} alt="" />
        </Stack>
      )}
    </Stack>
  );
};

export default Login;
