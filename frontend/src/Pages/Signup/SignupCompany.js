import { Stack, Paper, Typography, TextField, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { SignupSchemaCompany } from "../../Schemas/index";
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
  ntnNumber: "",
  foundersName: "",
  companysName: "",
  linkedinUrl: "",
  companysWebsite: "",
  noOfEmployees: "",
  noOfOffices: "",
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
        height: "120vh",
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
          validationSchema={SignupSchemaCompany}
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
              <InputLabel>Founder's Name</InputLabel>
              <TextFieldWrapper
                name="foundersName"
                label="Founder's Name"
                type="text"
              />
              <Stack direction="row" spacing={2}>
                <TextFieldWrapper
                  name="companysName"
                  label="Enter Compnay's Name"
                  type="text"
                />
                <TextFieldWrapper
                  name="linkedinUrl"
                  label="Company's Linkedin Profile"
                  type="text"
                />
              </Stack>
              <TextFieldWrapper
                name="companysWebsite"
                label="Company's Website"
                type="text"
              />
              <TextFieldWrapper
                name="ntnNumber"
                label="NTN Number"
                type="text"
              />
              <InputLabel>Select No of Employees</InputLabel>
              <Multiselect
                className="custom-multiselect"
                isObject={false}
                options={employeeOptions}
                placeholder="Select No of Emplyees"
                required
              />
              <TextFieldWrapper
                name="noOfOffices"
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
                //onClick={() => navigate("/companydashboard/dashboard")}
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
