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
import content from "../../../StaticContent/UserDashboard/communities.json";
import { CommunitiesCard } from "../../../Utils/CommunitiesCard/CommunitiesCard";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import github from "../../../Assets/UserDashboard/communities/community_github.png";
import gdsc from "../../../Assets/UserDashboard/communities/community_gdsc.png";
import mlsa from "../../../Assets/UserDashboard/communities/community_mlsa.png";

export const Communities = () => {
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
          <Typography variant="h4">Tech Communities in Pakistan</Typography>
        </Stack>
        <Stack>
          <Grid container spacing={8} padding={2}>
            <Grid item xs={12} sm={6} md={4}>
              <NavLink to="/userdashboard/communities/1">
                <CommunitiesCard img={gdsc} />
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CommunitiesCard img={mlsa} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CommunitiesCard img={github} />
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};
