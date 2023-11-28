import React, { useEffect, useState } from "react";
import { Route, NavLink, Routes, useLocation } from "react-router-dom";
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
import "react-multi-carousel/lib/styles.css";
import {
  Avatar,
  Grid,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import profilePic from "../../Assets/UserDashboard/dashboard/profilePic.png";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { SidebarSelector } from "../../Utils/UserDashboard/SidebarSelector/SidebarSelector";

import icon_product from "../../Assets/ComDashboard/icon_product.png";
import icon_comdashboard from "../../Assets/ComDashboard/icon_comdashboard.png";
import icon_comresponse from "../../Assets/ComDashboard/icon_comresponse.png";
import icon_food from "../../Assets/ComDashboard/icon_food.png";
import icon_joborintern from "../../Assets/ComDashboard/icon_joborintern.png";
import icon_merchandise from "../../Assets/ComDashboard/icon_merchandise.png";
import icon_space from "../../Assets/ComDashboard/icon_space.png";
import icon_sponsorpool from "../../Assets/ComDashboard/icon_sponsorpool.png";
import icon_techevents from "../../Assets/ComDashboard/icon_techevents.png";
import logo from "../../Assets/Utils/Logo.png";
import { alpha } from "@mui/material/styles";
// import {
//   Search,
//   SearchIconWrapper,
//   StyledInputBase,
// } from "../../Styles/styledComponents/Search/Search";
// import {
//   AppBar,
//   DrawerHeader,
// } from "../../Styles/styledComponents/AppBar/AppBar";
// import { Drawer } from "../../Styles/styledComponents/Drawer/Drawer";

import { ComDashboard } from "../../Components/CompanyDashboard/ComDashboard/ComDashboard";
import { ComJoborInternship } from "../../Components/CompanyDashboard/ComJoborInternship/ComJoborInternship";
import { CreateJoborInternship } from "../../Components/CompanyDashboard/ComJoborInternship/CreateJoborInternship/CreateJoborInternship";
import { ComSponsorPool } from "../../Components/CompanyDashboard/ComSponsorPool/ComSponsorPool";
import { ComMvpProduct } from "../../Components/CompanyDashboard/ComMvpProduct/ComMvpProduct";
import { ComTechEvents } from "../../Components/CompanyDashboard/ComTechEvents/ComTechEvents";
const drawerWidth = 240;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#f1f2f4",
  "&:hover": {
    backgroundColor: "#f1f2f4",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#393939",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: "#393939",
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

  boxShadow: "none",
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

export const CompanyDashboard = () => {
  const location = useLocation();
  const isScreenSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();
  const [open, setOpen] = useState(!isScreenSmall);
  const [profileDrop, setProfileDrop] = React.useState(null);
  const openProfile = Boolean(profileDrop);
  const handleClick = (event) => {
    setProfileDrop(event.currentTarget);
  };
  const handleClose = () => {
    setProfileDrop(null);
  };

  const [notificationDrop, setNotificationDrop] = React.useState(null);
  const openNotification = Boolean(notificationDrop);
  const handleClickNotification = (event) => {
    setNotificationDrop(event.currentTarget);
  };
  const handleCloseNotification = () => {
    setNotificationDrop(null);
  };

  useEffect(() => {
    if (isScreenSmall) {
      setOpen(false);
    }
  }, [isScreenSmall]);

  const handleDrawerOpen = () => {
    setOpen(true);
    if (isScreenSmall) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const dashboardText =
    location.pathname === "/companydashboard/dashboard"
      ? "Dashboard"
      : location.pathname === "/companydashboard/responses"
      ? "Responses"
      : location.pathname === "/companydashboard/joborinternship"
      ? "Job/Internship"
      : location.pathname === "/companydashboard/product"
      ? "Product"
      : location.pathname === "/companydashboard/sponsorpool"
      ? "Sponsor Pool"
      : location.pathname === "/companydashboard/techevents"
      ? "Tech Events"
      : location.pathname === "/companydashboard/merchandise"
      ? "Merchendise"
      : location.pathname === "/companydashboard/space"
      ? "Space"
      : location.pathname === "/companydashboard/food"
      ? "Food"
      : "Dashboard";

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex", color: "black" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={6} display={"flex"} alignItems={"center"}>
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
                <Typography variant="h6" component="div">
                  {dashboardText}
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                container
                justifyContent="flex-end"
                spacing={2}
                alignItems={"center"}
              >
                <Grid item>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Grid>
                <Grid item>
                  <NotificationsIcon
                    count={3}
                    id="basic-button"
                    aria-controls={openNotification ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openNotification ? "true" : undefined}
                    onClick={handleClickNotification}
                  />
                  <Menu
                    id="basic-menu"
                    anchorEl={notificationDrop}
                    open={openNotification}
                    onClose={handleCloseNotification}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Info</MenuItem>
                    <MenuItem onClick={handleClose}>Info</MenuItem>
                  </Menu>
                </Grid>

                <Grid item>
                  <Avatar
                    src={profilePic}
                    id="basic-button"
                    aria-controls={openProfile ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openProfile ? "true" : undefined}
                    onClick={handleClick}
                  />
                  <Menu
                    id="basic-menu"
                    anchorEl={profileDrop}
                    open={openProfile}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} background={"#202125"}>
          <DrawerHeader>
            <Stack direction={"row-reverse"} alignItems={"center"}>
              <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
              <Stack direction={"row"} spacing={0.4} alignItems={"center"}>
                <img src={logo} alt="logo" />
                <Typography color="white" fontWeight={"bold"} variant="h5">
                  Confiniti.&#174;
                </Typography>
              </Stack>
            </Stack>
          </DrawerHeader>
          <List sx={{ marginTop: "2rem" }}>
            <NavLink to="/companydashboard/dashboard/:company_id">
              <SidebarSelector
                open={open}
                text={"Dashboard"}
                icon={icon_comdashboard}
              />
            </NavLink>
            <SidebarSelector
              open={open}
              text={"Responses"}
              icon={icon_comresponse}
            />
            <NavLink to="/companydashboard/joborinternship/:company_id">
              <SidebarSelector
                open={open}
                text={"Job/Internships"}
                icon={icon_joborintern}
              />
            </NavLink>
            <NavLink to="/companydashboard/product/:company_id">
              <SidebarSelector
                open={open}
                text={"Product"}
                icon={icon_product}
              />
            </NavLink>
            <NavLink to="/companydashboard/sponsorpool/:company_id">
              <SidebarSelector
                open={open}
                text={"Sponsor Pool"}
                icon={icon_sponsorpool}
              />
            </NavLink>
            <NavLink to="/companydashboard/techevents/:company_id">
              <SidebarSelector
                open={open}
                text={"Tech Events"}
                icon={icon_techevents}
              />
            </NavLink>
            <NavLink to="/companydashboard/">
              <SidebarSelector
                open={open}
                text={"Merchandise"}
                icon={icon_merchandise}
              />
            </NavLink>
            <SidebarSelector open={open} text={"Space"} icon={icon_space} />
            <NavLink to="/companydashboard/">
              <SidebarSelector open={open} text={"Food"} icon={icon_food} />
            </NavLink>
          </List>
          <Divider color={"white"} />
        </Drawer>

        <Routes>
          <Route path="/dashboard/:company_id" element={<ComDashboard />} />
          <Route
            path="/joborinternship/:company_id"
            element={<ComJoborInternship />}
          ></Route>
          <Route
            path="/joborinternship/createJoborIntern/:company_id"
            element={<CreateJoborInternship />}
          />
          <Route
            path="/product/:company_id"
            element={<ComMvpProduct />}
          ></Route>
          <Route
            path="/sponsorpool/:company_id"
            element={<ComSponsorPool />}
          ></Route>
          <Route
            path="/techevents/:company_id"
            element={<ComTechEvents />}
          ></Route>
        </Routes>
      </Box>
    </>
  );
};
