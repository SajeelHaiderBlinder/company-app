import React from "react";
import {
  Grid,
  Paper,
  Stack,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import tester1 from "../../Assets/Header/community.png";
export const CommunityEventCard = () => {
  const data = [
    {
      imageUrl: tester1,
      date: "25 Sept",
      title: "Event Title 1",
      avatars: ["avatar_url_1.jpg", "avatar_url_2.jpg", "avatar_url_3.jpg"],
      location: "Event Location 1",
    },
    {
      imageUrl: tester1,
      date: "10 Oct",
      title: "Event Title 2",
      avatars: ["avatar_url_4.jpg", "avatar_url_5.jpg"],
      location: "Event Location 2",
    },
    {
      imageUrl: tester1,
      date: "10 Oct",
      title: "Event Title 2",
      avatars: ["avatar_url_4.jpg", "avatar_url_5.jpg"],
      location: "Event Location 2",
    },
  ];

  return (
    <Grid container spacing={4} padding="5%">
      {data.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
          <Paper
            elevation={3}
            sx={{ position: "relative", borderRadius: "20px" }}
          >
            <img
              src={item.imageUrl}
              alt={`Event ${index}`}
              style={{
                width: "100%",
                height: "auto",
                background: "rgba(0, 0, 0, 0.5)",
                pointerEvents: "none",
              }}
            />
            <Stack
              p={2}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",

                alignItems: "center",
                color: "white",
              }}
              direction={"row"}
              alignContent={"space-between"}
            >
              <Typography variant="subtitle2">{item.date}</Typography>
              <IconButton sx={{ color: "white" }}>
                <BookmarkBorderIcon />
              </IconButton>
            </Stack>
            <Stack p={2}>
              <Typography variant="h6">{item.title}</Typography>
              <Stack direction="row" spacing={1}>
                {item.avatars.map((avatar, avatarIndex) => (
                  <Avatar key={avatarIndex} src={avatar} />
                ))}
              </Stack>
              <Stack direction="row" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" color="textSecondary">
                  {item.location}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row-reverse"}>
              <Typography variant="subtitle1">View Details </Typography>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
