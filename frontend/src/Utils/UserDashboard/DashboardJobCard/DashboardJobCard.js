import React from "react";
import { Paper, Stack, Typography, Avatar } from "@mui/material";

export const DashboardJobCard = ({ heading, tag, ceoName, companyName }) => {
  return (
    <Paper elevation={3} sx={{ padding: "1.5rem" }}>
      <Stack>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {heading}
        </Typography>
        <Stack width="10%">
          <Typography variant="subtitle1" color="green">
            {tag}
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar />
        <Stack>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {ceoName}
          </Typography>
          <Typography variant="subtitle1">{companyName}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
