import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

import LinearProgress from "@mui/material/LinearProgress";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "react-multi-carousel/lib/styles.css";
import { DashboardJobCard } from "../../../Utils/UserDashboard/DashboardJobCard/DashboardJobCard";
import { Dropdown, MenuButton, Menu, MenuItem } from "@mui/base";
import icon_dashboard from "../../../Assets/UserDashboard/icon_dashboard.png";
import { Avatar, Grid, Paper, Stack, alpha } from "@mui/material";
import { RecruitmentJobCard } from "../../../Utils/Recruitment/RecruitmentJobCard/RecruitmentJobCard";
import { StyledTriggerButton } from "../../../Styles/styledComponents/DropDown/StyledMenuButton";
import {
  StyledMenuItem,
  StyledListbox,
} from "../../../Styles/styledComponents/DropDown/StyledMenuItem";
import { RoundButton } from "../../../Styles/styledComponents/Buttons/RoundButton";
import { NetworkingCard } from "../../../Utils/Networking/NetworkingCard";
import content from "../../../StaticContent/UserDashboard/communities.json";
import { CommunitiesCard } from "../../../Utils/CommunitiesCard/CommunitiesCard";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import github from "../../../Assets/UserDashboard/communities/community_github.png";
import gdsc from "../../../Assets/UserDashboard/communities/community_gdsc.png";
import mlsa from "../../../Assets/UserDashboard/communities/community_mlsa.png";
import { ProductCard } from "../../../Utils/ComDashboard/ProductCard";

import { BarChart } from "@mui/x-charts/BarChart";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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

const data = [
  { label: "Group A", value: 400, color: "#0088FE" },
  { label: "Group B", value: 300, color: "#00C49F" },
  { label: "Group C", value: 300, color: "#FFBB28" },
  { label: "Group D", value: 200, color: "#FF8042" },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

// export default function PieChartWithCustomizedLabel() {
//   return (
//     <PieChart
//       series={[
//         {
//           outerRadius: 80,
//           data,
//           arcLabel: getArcLabel,
//         },
//       ]}
//       sx={{
//         [`& .${pieArcLabelClasses.root}`]: {
//           fill: 'white',
//           fontSize: 14,
//         },
//       }}
//       {...sizing}
//     />
//   );
// }

export const ComMvpProduct = () => {
  const navigate = useNavigate();

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack spacing={5}>
        <Stack alignItems={"center"} textAlign={"center"} spacing={1}>
          <Typography variant="h4" fontWeight={"bold"}>
            {content.heading}
          </Typography>
          <Typography variant="h6">{content.description}</Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Typography variant="h4">Directory of MVP products</Typography>
        </Stack>
        <Stack>
          <Paper
            elevation={3}
            sx={{ border: "2px solid black", padding: "5%" }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <ProductCard
              title="Lorem Ipsum"
              img={mlsa}
              description="Lorem Ipsum Dolor Sit Amet Consectetur. Pellentesque Cras Mattis Sed laculis Porttitor Ttncidunt Elit Ut Enim. Ornare Massa Lectus Nullam Feugiat Donec. ld Mi Sodales Gravida Tellus Ipsum. Risus Dignissim El. Onec. ld Mi Sodales Gravida Tellus Ipsum. Risus Dignissim El"
              buttonText="Read More"
            />
          </Paper>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
          <PieChart
            series={[
              {
                outerRadius: 80,
                data,
                arcLabel: getArcLabel,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontSize: 14,
              },
            }}
            {...sizing}
          />
          <BarChart
            width={500}
            height={300}
            series={[
              {
                data: pData,
                label: "pv",
                id: "pvId",
                yAxisKey: "leftAxisId",
              },
              {
                data: uData,
                label: "uv",
                id: "uvId",
                yAxisKey: "rightAxisId",
              },
            ]}
            xAxis={[{ data: xLabels, scaleType: "band" }]}
            yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
            rightAxis="rightAxisId"
          />
        </Stack>
      </Stack>
    </Box>
  );
};
