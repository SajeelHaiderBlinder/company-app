import React from "react";
import { Paper, Stack, Typography, Avatar, IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"; // Import the save icon

export const DashboardJobCard = ({
  heading,
  tag,
  ceoName,
  companyName,
  img,
}) => {
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
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Avatar src={img} />
          <Stack>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {ceoName}
            </Typography>
            <Typography variant="subtitle1">{companyName}</Typography>
          </Stack>
        </Stack>
        <IconButton aria-label="Save" color="black" sx={{ marginLeft: "auto" }}>
          <BookmarkBorderIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};
