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
      backgroundColor: "white",
      borderRadius: "20px", // Set the border radius to 20px
      "& .MuiInputLabel-root.Mui-focused": {
        color: "black", // Change label color when focused
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "20px", // Round the corners of the input
      },
      "& .MuiOutlinedInput-input": {
        padding: "14px 14px", // Adjust input padding
      },
    },
  };

  return <TextField {...configTextField} />;
};
