import React from "react";
import { Avatar, Grid, Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";

export const NetworkingCard = ({
  logo,
  title,
  subtitle,
  description,
  email,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={2} sx={{ borderRadius: "20px", p: 2 }}>
        <Stack alignItems="center" textAlign="center" spacing={2}>
          <Avatar />
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
            <Stack direction="row" spacing={1}>
              {subtitle.map((text, subIndex) => (
                <Typography key={subIndex} variant="subtitle1">
                  {text}
                </Typography>
              ))}
            </Stack>
          </Stack>
          <Typography variant="body2">{description}</Typography>
          <RoundButton>{email}</RoundButton>
          <Stack direction="row" spacing={1}>
            <Avatar />
            <Avatar />
            <Avatar />
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};
