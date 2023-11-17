import Typography from "@mui/material/Typography";

import "react-multi-carousel/lib/styles.css";
import { Avatar, Grid, Paper, Stack, alpha } from "@mui/material";

export const TechEventsCard = ({ heading, address, description }) => {
  return (
    <Stack padding={"5%"} background="#6d0e90">
      <Typography variant="h5">{heading}</Typography>
      <Typography variant="h6">{address}</Typography>
      <Typography variant="subtitle1">{description}</Typography>
    </Stack>
  );
};
