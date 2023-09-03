import * as Yup from "yup";

export const NewsletterSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});
