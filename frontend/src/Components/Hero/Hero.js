import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";
import map from "../../Assets/Header/map.png";

export const Hero = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      spacing={2}
    >
      <Stack spacing={3}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3rem" },
            color: "black",
          }}
        >
          Pakistan's Largest Student
          <Typography
            variant="h2"
            sx={{
              color: "#bf00c3",
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3rem" },
            }}
          >
            Community.
          </Typography>
        </Typography>
        <Typography
          sx={{
            color: "black",
            maxWidth: "400px",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Bridging the gap between Industry and Academics. Join the Hub of
          Pakistan's Brightest Tech Minds in One Thriving Community.
        </Typography>
        <NavLink to="/join">
          <RoundButton>Sign up</RoundButton>
        </NavLink>
      </Stack>
      <Stack>
        <img src={map} alt="map" style={{ width: "100%" }} />
      </Stack>
    </Stack>
  );
};
