import { Stack, Paper, Typography, TextField, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { SignupSchema } from "../../Schemas/index";
import { FlatButton } from "../../Styles/styledComponents/Buttons/FlatButton";
import { TextFieldWrapper } from "../../Utils/Shared Components/TextFieldWrapper";
import { useNavigate } from "react-router";
import { InputLabel } from "@mui/material";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import "./Signup.scss";

const initialValues = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  uniName: "",
  semester: "",
  degree: "",
  introYourself: "",
};

export const SignupStudent = () => {
  const [communityOptions, setCommunityOptions] = useState(["GDCS", "MLSA"]);
  const navigate = useNavigate();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #bf00c3 50%, #ffffff 50%)",
      }}
    >
      <Paper elevation={3} sx={{ padding: "2rem", borderRadius: "20px" }}>
        <Typography variant="h3" sx={{ color: "black", marginBottom: "1rem" }}>
          Student Sign Up
        </Typography>
        <Formik
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={initialValues}
          validationSchema={SignupSchema}
        >
          <Form>
            <Stack spacing={2}>
              <TextFieldWrapper
                name="email"
                label="Email Address"
                type="text"
              />
              <TextFieldWrapper
                name="password"
                label="Enter your Password"
                type="password"
              />
              <Stack direction="row" spacing={2}>
                <TextFieldWrapper
                  name="fName"
                  label="Your First Name"
                  type="text"
                />
                <TextFieldWrapper
                  name="lName"
                  label="Your Last Name"
                  type="text"
                />
              </Stack>
              <TextFieldWrapper
                name="uniName"
                label="University Name"
                type="text"
              />
              <Stack direction="row" spacing={2}>
                <TextFieldWrapper name="degree" label="Degree" type="text" />
                <TextFieldWrapper
                  name="semester"
                  label="Semester"
                  type="text"
                />
              </Stack>
              <InputLabel>Select Communities you are a part of</InputLabel>
              <Multiselect
                className="custom-multiselect" // Apply your custom class here
                isObject={false}
                options={communityOptions}
                placeholder="Communities"
                required
              />
              <InputLabel>Write a Short Intro about yourself</InputLabel>
              <TextFieldWrapper
                name="introYourself"
                label="Introduce Yourself"
                type="text"
                height="4rem"
              />
              <FlatButton
                type="submit"
                variant="contained"
                color="white"
                fullWidth
                backgroundColor="#bf00c3"
                onClick={() => navigate("/userdashboard/dashboard")}
              >
                Sign Up
              </FlatButton>
            </Stack>
          </Form>
        </Formik>
      </Paper>
    </Stack>
  );
};
