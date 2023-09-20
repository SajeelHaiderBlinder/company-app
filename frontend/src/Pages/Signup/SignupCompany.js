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
  email: "",
  password: "",
};

export const SignupCompany = () => {
  const [employeeOptions, setEmployeeOptions] = useState([
    "1-10",
    "10-50",
    "50-100",
  ]);
  const navigate = useNavigate();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #393939 50%, #ffffff 50%)",
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
                  name="linkedinProfile"
                  label="Enter you Linkedin Profile"
                  type="text"
                />
              </Stack>
              <TextFieldWrapper
                name="websitw"
                label="Company Website"
                type="text"
              />

              <InputLabel>Select No of Employees</InputLabel>
              <Multiselect
                className="custom-multiselect" // Apply your custom class here
                isObject={false}
                options={employeeOptions}
                placeholder="Select No of Emplyees"
                required
              />
              <TextFieldWrapper
                name="offices"
                label="No of Offices"
                type="text"
                height="4rem"
              />
              <FlatButton
                type="submit"
                variant="contained"
                backgroundColor="#bf00c3"
                color="white"
                fullWidth
                onClick={() => navigate("/companydashboard/dashboard")}
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
