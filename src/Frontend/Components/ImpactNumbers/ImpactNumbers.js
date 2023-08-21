import { Stack, Typography, Paper } from "@mui/material";

export const ImpactNumbers = () => {
  return (
    <Stack
      spacing={5}
      sx={{ padding: "5%", background: "#202125" }}
      alignItems="center"
    >
      <Stack alignItems="center">
        <Typography variant="h4" sx={{ color: "white" }}>
          We have impactful numbers
        </Typography>
        <Typography sx={{ color: "white", fontSize: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum.
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        alignItems="center"
        width="100%"
        justifyContent={"center"}
      >
        <Paper
          elevation={2}
          sx={{
            padding: "4%",
            background: "#bf00c3",
          }}
        >
          <Typography variant="h5" sx={{ color: "white", fontSize: "1.5rem" }}>
            5000+
          </Typography>
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            Students onboarded
          </Typography>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            padding: "4%",
            background: "#bf00c3",
          }}
        >
          <Typography variant="h5" sx={{ color: "white", fontSize: "1.5rem" }}>
            5000+
          </Typography>
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            Students onboarded
          </Typography>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            padding: "4%",
            background: "#bf00c3",
          }}
        >
          <Typography variant="h5" sx={{ color: "white", fontSize: "1.5rem" }}>
            5000+
          </Typography>
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            Students onboarded
          </Typography>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            padding: "4%",
            background: "#bf00c3",
          }}
        >
          <Typography variant="h5" sx={{ color: "white", fontSize: "1.5rem" }}>
            5000+
          </Typography>
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            Students onboarded
          </Typography>
        </Paper>
      </Stack>
    </Stack>
  );
};
