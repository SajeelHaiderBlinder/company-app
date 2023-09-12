// import { Avatar, Stack, Typography } from "@mui/material";

// export const UserDashboard = () => {
//   return (
//     <Stack>
//       <Stack spacing={6} backgroundColor={"#bf00c3"} direction={"column"}>
//         <Stack direction={"row"}>
//           <Avatar />
//           <Typography variant="h6">Company Name</Typography>
//         </Stack>
//         <Stack spacing={2}>
//           <Typography variant="subtitle1">Dashboard</Typography>
//           <Typography variant="subtitle1">Inbox</Typography>
//           <Typography variant="subtitle1">Internship</Typography>
//           <Typography variant="subtitle1">Recruitment</Typography>
//           <Typography variant="subtitle1">Commuinities</Typography>
//           <Typography variant="subtitle1">Resources</Typography>
//         </Stack>
//       </Stack>
//       <Stack sx={{ justifyContent: "space-between" }} direction={"row"}>
//         <Stack>
//           <Typography variant="h6">Dashboard</Typography>
//         </Stack>
//         <Stack>
//           <Avatar />
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import * as React from "react";
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

import content from "../../Utils/StaticContent/Header/testimonials.json";
import { TestimonialsCard } from "../../Utils/TestimonialsCard/TestimonialsCard";
import { DashboardJobCard } from "../../Utils/UserDashboard/DashboardJobCard/DashboardJobCard";

import { SidebarSelector } from "../../Utils/UserDashboard/SidebarSelector/SidebarSelector";

import icon_Briefcase from "../../Assets/UserDashboard/icon_Briefcase.png";
import icon_Building from "../../Assets/UserDashboard/icon_Building.png";
import icon_inbox from "../../Assets/UserDashboard/icon_inbox.png";
import icon_PeopleCommunity from "../../Assets/UserDashboard/icon_PeopleCommunity.png";
import icon_resources from "../../Assets/UserDashboard/icon_resources.png";
import icon_speed from "../../Assets/UserDashboard/icon_speed.png";
import icon_dashboard from "../../Assets/UserDashboard/icon_dashboard.png";
import { Avatar, Grid, Paper, Stack } from "@mui/material";
import { Testimonials } from "../../Components/Testimonials/Testimonials";
import { Dashboard } from "../../Components/UserDashboard/Dashboard/Dashboard";
import { Recruitment } from "../../Components/UserDashboard/Recruitment/Recruitment";
import { Internship } from "../../Components/UserDashboard/Internship/Internship";
import { Networking } from "../../Components/UserDashboard/Networking/Networking";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#bf00c3",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: "#bf00c3",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const UserDashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", color: "black" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List>
            <NavLink to="/userdashboard/dashboard">
              <SidebarSelector
                open={open}
                text={"Dashboard"}
                icon={icon_speed}
              />
            </NavLink>
            <SidebarSelector open={open} text={"Inbox"} icon={icon_inbox} />
            <NavLink to="/userdashboard/internship">
              <SidebarSelector
                open={open}
                text={"Internships"}
                icon={icon_Briefcase}
              />
            </NavLink>
            <NavLink to="/userdashboard/recruitment">
              <SidebarSelector
                open={open}
                text={"Recruitments"}
                icon={icon_Building}
              />
            </NavLink>
            <SidebarSelector
              open={open}
              text={"Communities"}
              icon={icon_PeopleCommunity}
            />
            <NavLink to="/userdashboard/networking">
              <SidebarSelector
                open={open}
                text={"Networking"}
                icon={icon_Building}
              />
            </NavLink>
            <SidebarSelector
              open={open}
              text={"Resources"}
              icon={icon_resources}
            />
          </List>
          <Divider color={"white"} />
        </Drawer>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/networking" element={<Networking />} />
          {/* <Route path="/inbox" element={Inbox} />
          <Route path="/internships" element={Internships} />
          <Route path="/communities" element={Communities} />
          <Route path="/resources" element={Resources} /> */}
        </Routes>
      </Box>
    </>
  );
};
