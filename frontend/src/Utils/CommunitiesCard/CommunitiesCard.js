import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "2px solid #bf00c3",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: theme.shadows[10],
}));

export const CommunitiesCard = ({ img }) => {
  return (
    <StyledPaper>
      <img
        src={img}
        alt="Community Logo"
        style={{ width: "100px", height: "100px" }}
      />
    </StyledPaper>
  );
};
