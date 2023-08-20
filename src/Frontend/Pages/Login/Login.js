// import React from "react";
// import { Stack, Typography, IconButton } from "@mui/material";
// import { Formik, Form } from "formik";
// import { TextFieldWrapper } from "../../Utils/Shared Components/TextFieldWrapper";
// import LoginCover from "../../Assets/Login/LoginCover.png";
// import GoogleLogo from "../../Assets/Login/GoogleLogo.png";
// import LinkedInLogo from "../../Assets/Login/LinkedinLogo.png";
// import "./Login.scss";
// import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";
// import { FlatButton } from "../../Styles/styledComponents/Buttons/FlatButton";
// import { LoginSchema } from "../../Schemas/index";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// const initialValues = {
//   email: "",
//   password: "",
// };

// export const Login = () => {
//   return (
//     <Stack
//       direction="row"
//       justifyContent={"space-evenly"}
//       sx={{ background: "#202125", width: "100%", height: "100vh" }}
//     >
//       <ArrowBackIosNewIcon sx={{ margin: "2%" }} />
//       <Stack spacing={3} sx={{ padding: "5%" }}>
//         <Typography variant="h5">Welcome Back !</Typography>
//         <Typography>
//           Today is a new day. It's your day. You shape it. Sign in to start
//           connecting with Communities.
//         </Typography>

//         <Formik
//           onSubmit={(values) => {
//             console.log(values);
//           }}
//           initialValues={initialValues}
//           validationSchema={LoginSchema}
//         >
//           <Form>
//             <Stack spacing={2} width={400}>
//               <TextFieldWrapper name="email" label="Email" type="text" />
//               <TextFieldWrapper
//                 name="password"
//                 label="Password"
//                 type="password"
//               />
//               <FlatButton type="submit" className="login-button">
//                 Log In
//               </FlatButton>
//               <div className="divider">Or</div>
//               <FlatButton className="google-button" backgroundColor="white">
//                 <img src={GoogleLogo} alt="Google Logo" />
//                 Log in with Google
//               </FlatButton>
//               <FlatButton className="linkedin-button" backgroundColor="white">
//                 <img src={LinkedInLogo} alt="LinkedIn Logo" />
//                 Log in with LinkedIn
//               </FlatButton>
//             </Stack>
//           </Form>
//         </Formik>
//         <Typography>C 2023 ALL RIGHTS RESERVED</Typography>
//       </Stack>
//       <Stack sx={{ background: "#bf00c3", display: { lg: "none" } }}>
//         <img src={LoginCover} alt="" />
//       </Stack>
//     </Stack>
//   );
// };
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

  return (
    <Stack
      direction="row"
      justifyContent={"space-evenly"}
      sx={{ background: "#202125", width: "100%", height: "100vh" }}
    >
      <ArrowBackIosNewIcon />
      <Typography variant="h6">Back</Typography>

      <Stack spacing={3} sx={{ padding: "5%", width: "100%" }}>
        <Typography variant="h5">Welcome Back !</Typography>
        <Typography>
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
                <FlatButton className="google-button" backgroundColor="white">
                  <img src={GoogleLogo} alt="Google Logo" />
                  Log in with Google
                </FlatButton>
                <FlatButton className="linkedin-button" backgroundColor="white">
                  <img src={LinkedInLogo} alt="LinkedIn Logo" />
                  Log in with LinkedIn
                </FlatButton>
              </Stack>
            </Form>
          </Form>
        </Formik>
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
