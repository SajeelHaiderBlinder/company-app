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
export const RecruitmentJobCard = () => {
  return (
    <Paper elevation={3} sx={{ padding: "4%" }}>
      <Stack direction={"row"}>
        <Avatar />
        <Stack>
          <Typography variant="subtitle1">Junior Company</Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <Typography variant="h5">Software Engineering</Typography>
            <Typography variant="subtitle1">New</Typography>
          </Stack>
          <Stack direction={"row"} spacing={3}>
            <Typography variant="subtitle1">Location</Typography>
            <Typography variant="subtitle1">Full Time</Typography>
            <Typography variant="subtitle1">Salary</Typography>
            <Typography variant="subtitle1">Time</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography variant="subtitle1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
        libero, inventore obcaecati distinctio fugit hic voluptatibus quasi
        delectus dolore impedit expedita nostrum? Recusandae error culpa rem
        esse iusto quam eligendi!
      </Typography>
    </Paper>
  );
};
