import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Multiselect from "multiselect-react-dropdown";
import { Formik, Form, Field } from "formik";
import { TextFieldWrapper } from "../../../../Utils/Shared Components/TextFieldWrapper";
import { FlatButton } from "../../../../Styles/styledComponents/Buttons/FlatButton";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const initialValues = {};

const checkboxStyle = {
  color: "#bf00c3",
  "&.Mui-checked": {
    color: "#bf00c3",
  },
};

const options = ["Job", "Internship"];

export const CreateJoborInternship = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack spacing={3}>
        <Typography variant="h4">
          POST YOUR JOB/INTERNSHIP IN MINUTES
        </Typography>
        <Formik
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={initialValues}
        >
          <Form>
            <Stack spacing={5} maxWidth={600}>
              <Multiselect
                className="custom-multiselect"
                isObject={false}
                options={options}
                placeholder="Type"
                required
              />
              <TextFieldWrapper name="title" label="Title" type="text" />
              <TextFieldWrapper
                name="description"
                label="Description"
                type="password"
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Status</Typography>
                  <Stack direction="row" alignItems="center">
                    <Checkbox style={checkboxStyle} defaultChecked />
                    <label>Live</label>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Checkbox style={checkboxStyle} defaultChecked />
                    <label>Upcoming</label>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Target Audience</Typography>
                  <Stack direction="row" alignItems="center">
                    <Checkbox style={checkboxStyle} defaultChecked />
                    <label>Professionals</label>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Checkbox style={checkboxStyle} defaultChecked />
                    <label>Students</label>
                  </Stack>
                </Grid>
              </Grid>
              <label htmlFor="image">
                <FlatButton
                  type="button"
                  variant="contained"
                  color="white"
                  backgroundColor="#393939"
                  component="span"
                >
                  Choose Image
                </FlatButton>
              </label>
              <Field
                type="file"
                name="image"
                id="image"
                accept="image/*"
                style={{ display: "none" }}
              />
              <FlatButton
                type="submit"
                variant="contained"
                color="white"
                backgroundColor="#393939"
              >
                Submit
              </FlatButton>
            </Stack>
          </Form>
        </Formik>
      </Stack>
    </Box>
  );
};
