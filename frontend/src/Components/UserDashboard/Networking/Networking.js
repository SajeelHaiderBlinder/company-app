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
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const Networking = () => {
  
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
        <Typography variant="h5" fontWeight={"bold"}>
          Search People
        </Typography>
        <Stack>
          {/* <Dropdown>
            <StyledTriggerButton>Dashboard</StyledTriggerButton>
            <Menu slots={{ listbox: StyledListbox }}>
              <StyledMenuItem onClick={createHandleMenuClick("Profile")}>
                Profile
              </StyledMenuItem>
              <StyledMenuItem onClick={createHandleMenuClick("My account")}>
                My account
              </StyledMenuItem>
              <StyledMenuItem onClick={createHandleMenuClick("Log out")}>
                Log out
              </StyledMenuItem>
            </Menu>
          </Dropdown> */}
        </Stack>
        <Stack>
          <Grid container spacing={12} padding={"5%"}>
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
              in web development. Currently playing
              around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
            in web development. Currently playing
            around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
          in web development. Currently playing
          around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
            in web development. Currently playing
            around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
          in web development. Currently playing
          around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
        in web development. Currently playing
        around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
      in web development. Currently playing
      around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};
