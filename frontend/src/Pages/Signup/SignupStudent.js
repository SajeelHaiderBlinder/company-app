import axios from "axios";
import { Stack, Paper, Typography, TextField, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { SignupSchema } from "../../Schemas/index";
import { FlatButton } from "../../Styles/styledComponents/Buttons/FlatButton";
import { TextFieldWrapper } from "../../Utils/Shared Components/TextFieldWrapper";
import { useNavigate } from "react-router";
import { InputLabel } from "@mui/material";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import "./Signup.scss";

const initialValues = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  uniName: "",
  semester: "",
  degree: "",
  communities: [],
};

export const SignupStudent = () => {
  const [communityOptions, setCommunityOptions] = useState([]);
  const navigate = useNavigate();
  const onCommunityChange = (selectedValues) => {
    setCommunityOptions(selectedValues);
  };

  const fetchCommunities = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/community/getAllCommunities`
      );

      const communityNames = response.data.communities.map(
        (community) => community.name
      );
      setCommunityOptions(communityNames);
    } catch (error) {
      console.error("Error fetching communities:", error);
    }
  };

  useEffect(() => {
    fetchCommunities();
  }, []);

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
          onSubmit={async (values) => {
            const registrationData = {
              ...values,
              communities: communityOptions,
            };

            const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/registerstudent`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(registrationData),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                if (data.success) {
                  navigate("/userdashboard/dashboard");
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
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
                className="custom-multiselect"
                isObject={false}
                options={communityOptions}
                placeholder="Communities"
                required
                onSelectedValuesChange={onCommunityChange} // Handle community selection
              />

              <FlatButton
                type="submit"
                variant="contained"
                color="white"
                fullWidth
                backgroundColor="#bf00c3"
                // onClick={() => navigate("/userdashboard/dashboard")}
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
