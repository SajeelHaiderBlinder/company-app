import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import "react-multi-carousel/lib/styles.css";
import { DashboardJobCard } from "../../../Utils/UserDashboard/DashboardJobCard/DashboardJobCard";
import { Dropdown, MenuButton, Menu, MenuItem } from "@mui/base";
import icon_dashboard from "../../../Assets/UserDashboard/icon_dashboard.png";
import { Avatar, Grid, Paper, Stack } from "@mui/material";
import { RecruitmentJobCard } from "../../../Utils/Recruitment/RecruitmentJobCard/RecruitmentJobCard";
import { StyledTriggerButton } from "../../../Styles/styledComponents/DropDown/StyledMenuButton";
import {
  StyledMenuItem,
  StyledListbox,
} from "../../../Styles/styledComponents/DropDown/StyledMenuItem";
import { RoundButton } from "../../../Styles/styledComponents/Buttons/RoundButton";
import { NetworkingCard } from "../../../Utils/Networking/NetworkingCard";
import { MapContainer, TileLayer } from "react-leaflet";
import { CommunityEventCard } from "../../../Utils/Events/CommunityEventCard";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const Events = () => {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack>
        <Stack alignItems={"center"} textAlign={"center"} spacing={1}>
          <Typography variant="h4" fontWeight={"bold"}>
            Why Networking is Important?
          </Typography>
          <Typography variant="h6">
            Networking is vital as it enables the exchange of ideas,
            information, and opportunities. It builds valuable relationships and
            connections, both professionally and personally. Networking provides
            access to resources, diverse perspectives, and new possibilities. It
            enhances knowledge, fosters personal growth, and supports career
            advancement. In our interconnected world, networking is the key to
            meaningful connections and success.
          </Typography>
        </Stack>
        <Stack margin={"1.5rem"}>
          <MapContainer
            center={[31.590479147818932, 74.30019533513024]}
            zoom={13}
          >
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </Stack>
        <Stack>
          <Typography variant="h5" fontWeight={"bold"}>
            Upcoming events
          </Typography>
          <Stack></Stack>
        </Stack>
        <Stack>
          <CommunityEventCard />
        </Stack>
      </Stack>
    </Box>
  );
};
