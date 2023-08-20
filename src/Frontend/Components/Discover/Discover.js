import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";

import connectLogo from "../../Assets/Header/connect-logos.png";
import "./Discover.scss";

export const Discover = () => {
  return (
    <Stack
      spacing={5}
      direction={{ xs: "column", md: "row" }} // Adjust direction for different viewports
      justifyContent={"space-evenly"}
      alignItems={"center"}
      sx={{
        background: "linear-gradient(to top, #690073, #bf00c3)",
        padding: "5%",
      }}
    >
      <Stack spacing={3}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3rem" },
          }}
        >
          Discover your Path to
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3rem" },
            }}
          >
            Success
          </Typography>
        </Typography>
        <Typography
          sx={{
            maxWidth: "400px",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </Typography>
        <NavLink to="/signup">
          <RoundButton>Join as a Student</RoundButton>
        </NavLink>
      </Stack>
      <Stack>
        <img
          src={connectLogo}
          alt="connect"
          className="connect-logo-rotate"
          style={{ width: "100%", maxWidth: "300px" }}
        />
      </Stack>
    </Stack>
  );
};
