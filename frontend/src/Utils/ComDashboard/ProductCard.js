import React from "react";
import { Avatar, Grid, Paper, Stack, Typography, Button } from "@mui/material";
import { FlatButton } from "../../Styles/styledComponents/Buttons/FlatButton";

export const ProductCard = ({ img, title, description, buttonText }) => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <img src={img} alt="" style={{ width: 100, height: 100 }} />

        <Grid item xs={12} sm={8}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            <FlatButton backgroundColor="black" color="white">
              {buttonText}
            </FlatButton>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
