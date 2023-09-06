import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

export const TextFieldWrapper = ({ name, label, type, height }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    label,
    type,
    fullWidth: true,
    variant: "outlined",
    error: meta.touched && Boolean(meta.error),
    helperText: meta.touched && meta.error ? meta.error : "",
    sx: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "20px", // Round the corners of the input
        "&:hover fieldset": {
          borderColor: "#690073", // Change border color on hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "#690073", // Change border color when focused
        },
      },
      "& .MuiInputLabel-root": {
        color: "#690073", // Change label text color
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#690073", // Change label text color when focused
      },
      "& .MuiOutlinedInput-input::placeholder": {
        color: "#690073", // Change placeholder text color
      },
    },
  };

  return <TextField {...configTextField} />;
};
