import * as Yup from "yup";

export const SignupSchemaCompany = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  foundersName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter Founder's Name"),
  companysName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter Company's Name"),
  linkedinUrl: Yup.string().url().required("Please enter Linkedin URL"),
  companysWebsite: Yup.string()
    .url()
    .required("Please enter your Company Website"),
  noOfEmployees: Yup.string().required("Please enter No of Employee"),
  noOfOffices: Yup.string().required("Please enter No of Offices"),
  ntnNumber: Yup.string().required("NTN is essential"),
});
