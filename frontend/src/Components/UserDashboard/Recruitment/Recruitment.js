import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { FlatButton } from "../../../Styles/styledComponents/Buttons/FlatButton";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LinearProgress from "@mui/material/LinearProgress";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DashboardJobCard } from "../../../Utils/UserDashboard/DashboardJobCard/DashboardJobCard";
import { RoundButton } from "../../../Styles/styledComponents/Buttons/RoundButton";
import icon_dashboard from "../../../Assets/UserDashboard/icon_dashboard.png";
import { Avatar, Grid, Paper, Stack } from "@mui/material";
import { RecruitmentJobCard } from "../../../Utils/Recruitment/RecruitmentJobCard/RecruitmentJobCard";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export const Recruitment = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack spacing={3}>
        <Stack
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
        <Stack>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <RecruitmentJobCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecruitmentJobCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecruitmentJobCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecruitmentJobCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecruitmentJobCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecruitmentJobCard />
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};
