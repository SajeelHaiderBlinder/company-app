import { Stack, Paper, Typography, TextField, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { SignupSchema } from "../../Schemas/index";
import { FlatButton } from "../../Styles/styledComponents/Buttons/FlatButton";
import { TextFieldWrapper } from "../../Utils/Shared Components/TextFieldWrapper";

import { InputLabel } from "@mui/material";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import "./Signup.scss";
const initialValues = {
  email: "",
  password: "",
};

export const SignupCompany = () => {
  const [communityOptions, setCommunityOptions] = useState(["GDCS", "MLSA"]);

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
        <Typography
          variant="h5"
          sx={{ color: "black", marginBottom: "1rem", fontWeight: "bold" }}
        >
          Company Sign Up
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
              <InputLabel>Founder's Name</InputLabel>
              <TextFieldWrapper
                name="name"
                label="Founder's Name"
                type="text"
              />
              <Stack direction="row" spacing={2}>
                <TextFieldWrapper
                  name="companyName"
                  label="Enter Compnay's Name"
                  type="text"
                />
                <TextFieldWrapper
                  name="lName"
                  label="Your Last Name"
                  type="text"
                />
              </Stack>
              <InputLabel>University Name</InputLabel>
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
                color="primary"
                fullWidth
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
