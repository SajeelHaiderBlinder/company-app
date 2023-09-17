import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";
import buildings from "../../Assets/Header/buildings.png";

export const CompanyBuilder = () => {
  return (
    <Stack
      sx={{ padding: "5%" }}
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      spacing={2}
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
          <span
            style={{
              color: "#bf00c3",
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3rem" },
              marginRight: "2%",
            }}
          >
            Confinity&#174;
          </span>
          for Software Houses - Elevate your Talent Acquisition.
        </Typography>
        <Typography
          sx={{
            color: "black",
            maxWidth: "400px",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Unleash Talent: Elevate BrandS. Thnovate Together: Discover a world
          where exceptional talent meets thriving software houses. With nexaPro,
          recruit top students, enhance your brand, and fuel innovation. Join us
          in shaping the future of tech.
        </Typography>
        <NavLink to="/join/signupcompany">
          <RoundButton>Join as a Company</RoundButton>
        </NavLink>
      </Stack>
      <Stack>
        <img src={buildings} alt="map" style={{ width: "100%" }} />
      </Stack>
    </Stack>
  );
};
