import { Stack, Typography, Grid, Button } from "@mui/material";
import { TextFieldWrapper } from "../../Utils/Shared Components/TextFieldWrapper";
import { Formik, Form } from "formik";
import { NewsletterSchema } from "../../Schemas/Newsletter Schema/NewsletterSchema";
import { FlatButton } from "../../Styles/styledComponents/Buttons/FlatButton";

const initialValues = {
  email: "",
};

export const Footer = () => {
  return (
    <Stack
      sx={{
        background: "linear-gradient(to top, #690073, #bf00c3)",
        padding: "8%",
        color: "white",
      }}
      spacing={4}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Stack>
            <Typography variant="h4" color="white">
              NexaPro
            </Typography>
            <Typography variant="subtitle1" color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Formik
            onSubmit={(values) => {
              console.log(values);
            }}
            initialValues={initialValues}
            validationSchema={NewsletterSchema}
          >
            <Form>
              <Typography variant="subtitle1" color="white">
                Subscribe to our product details!
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <TextFieldWrapper
                  name="email"
                  label="Enter your Email"
                  type="text"
                />
                <FlatButton type="submit">Submit</FlatButton>
              </Stack>
            </Form>
          </Formik>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={4}>
            <Typography variant="h6" color="white">
              Product
            </Typography>
            <Stack spacing={2}>
              <Typography variant="subtitle1" color="white">
                Home
              </Typography>
              <Typography variant="subtitle1" color="white">
                Services
              </Typography>
              <Typography variant="subtitle1" color="white">
                About
              </Typography>
              <Typography variant="subtitle1" color="white">
                Pricing
              </Typography>
              <Typography variant="subtitle1" color="white">
                Case Studies
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={4}>
            <Typography variant="h6" color="white">
              Company
            </Typography>
            <Stack spacing={2}>
              <Typography variant="subtitle1" color="white">
                About
              </Typography>
              <Typography variant="subtitle1" color="white">
                Contact
              </Typography>
              <Typography variant="subtitle1" color="white">
                Team
              </Typography>
              <Typography variant="subtitle1" color="white">
                Blog
              </Typography>
              <Typography variant="subtitle1" color="white">
                Review
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={4}>
            <Typography variant="h6" color="white">
              Support
            </Typography>
            <Stack spacing={2}>
              <Typography variant="subtitle1" color="white">
                Style Guide
              </Typography>
              <Typography variant="subtitle1" color="white">
                Licenses
              </Typography>
              <Typography variant="subtitle1" color="white">
                Changelog
              </Typography>
              <Typography variant="subtitle1" color="white">
                Log in
              </Typography>
              <Typography variant="subtitle1" color="white">
                Sign up
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={4}>
            <Typography variant="h6" color="white">
              Contact
            </Typography>
            <Stack spacing={2}>
              <Typography variant="subtitle1" color="white">
                contact@gmail.com
              </Typography>
              <Typography variant="subtitle1" color="white">
                1278037092183
              </Typography>
              <Typography variant="subtitle1" color="white">
                Location
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
