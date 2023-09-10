import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "react-multi-carousel/lib/styles.css";
import { DashboardJobCard } from "../../../Utils/UserDashboard/DashboardJobCard/DashboardJobCard";
import { Grid, Stack, Switch } from "@mui/material";
import { FlatButton } from "../../../Styles/styledComponents/Buttons/FlatButton";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export const Internship = () => {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "hello",
    },
  ];
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack>
        <Stack
          marginLeft={"1.5rem"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            3114 Jobs
          </Typography>
          <FlatButton
            backgroundColor="#f1f2f4"
            borderColor="#f1f2f4"
            color="black"
          >
            Filter
          </FlatButton>
        </Stack>
        <Stack margin={"1.5rem"}>
          <MapContainer
            center={[31.590479147818932, 74.30019533513024]}
            zoom={13}
          >
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </Stack>
        <Stack
          marginLeft={"1.5rem"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6">Filter Results</Typography>
          <Stack direction={"row"}>
            <Typography variant="h6">Get Notifications</Typography>
            <Switch defaultChecked color="secondary" />
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <DashboardJobCard
                heading="Best product ever"
                tag="Job"
                ceoName="Usman Asif"
                companyName="CEO Devsinc"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <DashboardJobCard
                heading="Best product ever"
                tag="Job"
                ceoName="Usman Asif"
                companyName="CEO Devsinc"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <DashboardJobCard
                heading="Best product ever"
                tag="Job"
                ceoName="Usman Asif"
                companyName="CEO Devsinc"
              />
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};
