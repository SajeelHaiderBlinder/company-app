import * as Yup from "yup";

export const SignupSchema = Yup.object({
  fName: Yup.string().min(2).max(25).required("Please enter your first name"),
  lName: Yup.string().min(2).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  uniName: Yup.string().required("Please enter your university name"),
  semester: Yup.string().required("Please enter your semester"),
  degree: Yup.string().required("Please enter your degree"),
  introYourself: Yup.string().required("Please enter Intro"),
});
