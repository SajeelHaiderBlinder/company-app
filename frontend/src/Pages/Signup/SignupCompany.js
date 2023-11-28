import {
  Stack,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { SignupSchemaCompany } from "../../Schemas/index";
import { FlatButton } from "../../Styles/styledComponents/Buttons/FlatButton";
import { TextFieldWrapper } from "../../Utils/Shared Components/TextFieldWrapper";
import { useNavigate } from "react-router";
import { InputLabel, Select } from "@mui/material";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import "./Signup.scss";
import axios from "axios";

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
          variant="h4"
          sx={{ color: "black", marginBottom: "1rem", fontWeight: "bold" }}
        >
          Company Sign Up
        </Typography>
        <Formik
          onSubmit={async (values) => {
            console.log(values);
            try {
              const response = await axios.post(
                "http://localhost:8080/api/company/registerCompany",
                values
              );

              console.log(response.data);
              const company_id = response.data.id;
              // Redirect or handle success as needed
              navigate(`/companydashboard/dashboard/${company_id}`);
            } catch (error) {
              console.error("Error submitting form:", error.message);
            }
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

              <Field
                name="noOfEmployees"
                as={Select}
                fullWidth
                label="Select No of Employees"
                variant="outlined"
                required
              >
                {employeeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Field>
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
