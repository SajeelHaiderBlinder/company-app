import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
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

import icon_dashboard from "../../../Assets/UserDashboard/icon_dashboard.png";
import { Avatar, Grid, Paper, Stack } from "@mui/material";
import { RecruitmentJobCard } from "../../../Utils/Recruitment/RecruitmentJobCard/RecruitmentJobCard";
import icon_github from "../../../Assets/UserDashboard/dashboard/icon_github.png";
import icon_google from "../../../Assets/UserDashboard/dashboard/icon_google.png";
import icon_aws from "../../../Assets/UserDashboard/dashboard/icon_aws.png";
import profilePic from "../../../Assets/UserDashboard/dashboard/profilePic.png";
import { CommunityEventCard } from "../../../Utils/Events/CommunityEventCard";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const ComDashboard = () => {
  const [completionPercentage, setCompletionPercentage] = React.useState(50);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            backgroundColor: "#dadada",
            padding: "1%",
            borderRadius: "10px",
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography fontWeight={"normal"} variant="h6">
              Welcome to the Dashboard
            </Typography>
            <Typography fontWeight={"bold"} variant="h6">
              Devsinc
            </Typography>
          </Stack>
          <Stack>
            <img src={icon_dashboard} alt="icon dashboard" />
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#bf00c3",
            }}
          >
            Jobs/Internships Created by You
          </Typography>
          <Stack direction={"row"} spacing={3}>
            <DashboardJobCard
              heading="Best product ever"
              tag="Job"
              ceoName="Usman Asif"
              companyName="CEO Devsinc"
            />
            <DashboardJobCard
              heading="Best product ever"
              tag="Job"
              ceoName="Usman Asif"
              companyName="CEO Devsinc"
            />
            <DashboardJobCard
              heading="Best product ever"
              tag="Job"
              ceoName="Usman Asif"
              companyName="CEO Devsinc"
            />
          </Stack>
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#bf00c3",
            }}
          >
            Jobs
          </Typography>
          <Stack direction={"row"} spacing={3}>
            <RecruitmentJobCard />
            <RecruitmentJobCard />
          </Stack>

          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#bf00c3",
            }}
          >
            Your Events
          </Typography>
          <Stack direction={"row"} spacing={3}>
            <CommunityEventCard />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
