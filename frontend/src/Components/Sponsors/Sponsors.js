import { Stack, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import githubImage from "../../Assets/Sponsors/github.png";
import devsincImage from "../../Assets/Sponsors/devsinc.png";
import arbisoftImage from "../../Assets/Sponsors/arbisoft.png";
import googleDevImage from "../../Assets/Sponsors/googleDevelopers.png";

const SponsorImage = styled("img")({
  width: "70%",
  height: "70%",
  objectFit: "contain",
});

export const Sponsors = () => {
  return (
    <Stack
      spacing={2}
      sx={{ padding: "5%", background: "#202125", alignItems: "center" }}
    >
      <Typography color="#fcf8ca">
        Supported by Top Companies and Communities
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <SponsorImage src={githubImage} alt="githubimage" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SponsorImage src={devsincImage} alt="devsincimage" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SponsorImage src={arbisoftImage} alt="arbisoftimage" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SponsorImage src={googleDevImage} alt="googledevimage" />
        </Grid>
      </Grid>
    </Stack>
  );
};
