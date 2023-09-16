import React from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
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

export const CommunitiesCard = () => {
  return (
    <StyledPaper>
      <Avatar src="/path_to_avatar_image.jpg" alt="Avatar" />
    </StyledPaper>
  );
};
