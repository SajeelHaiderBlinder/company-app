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
import { FlatButton } from "../../../Styles/styledComponents/Buttons/FlatButton";
import { useNavigate } from "react-router";
import { ChartContainer } from "@mui/x-charts";
import { LineChart, LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
const pData1 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels1 = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export const ComJoborInternship = () => {
  const navigate = useNavigate();
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack spacing={5}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h5">Post a Job/Internship</Typography>
          <FlatButton
            backgroundColor="#393939"
            color="white"
            onClick={() => navigate("createJoborIntern")}
          >
            Create New
          </FlatButton>
        </Stack>

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
        <Stack>
          <Typography variant="h5">Analytics</Typography>
          <LineChart
            width={500}
            height={300}
            series={[
              { data: pData, label: "pv" },
              { data: uData, label: "uv" },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
          />

          <ChartContainer
            width={500}
            height={300}
            series={[{ type: "line", data: pData }]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{
              ".MuiLineElement-root": {
                stroke: "#8884d8",
                strokeWidth: 2,
              },
              ".MuiMarkElement-root": {
                stroke: "#8884d8",
                scale: "0.6",
                fill: "#fff",
                strokeWidth: 2,
              },
            }}
            disableAxisListener
          >
            <LinePlot />
            <MarkPlot />
          </ChartContainer>
        </Stack>
      </Stack>
    </Box>
  );
};
