import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";
import community from "../../Assets/Header/community.png";

export const CommunityBuilder = () => {
  return (
    <Stack
      sx={{ padding: "5%" }}
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      spacing={1}
    >
      <Stack spacing={3}>
        <Typography
          variant="h2"
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3rem" },
          }}
        >
          Confinity&#174; for Community Building
          <Typography
            variant="h2"
            sx={{
              color: "#bf00c3",
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3rem" },
            }}
          >
            Excellence.
          </Typography>
        </Typography>
        <Typography
          sx={{
            color: "black",
            maxWidth: "400px",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Discover limitless possibilities at the Nexus for Community Builders.
          Elevate your community's impact by accessing sponsors. speakers, swag.
          and outreach support. Join us today and shape the future of community
          building.
        </Typography>
        <NavLink to="/join/signupcommunity">
          <RoundButton>Join as a Community Builder</RoundButton>
        </NavLink>
      </Stack>
      <Stack>
        <img src={community} alt="map" style={{ width: "100%" }} />
      </Stack>
    </Stack>
  );
};
