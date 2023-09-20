import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { DashboardJobCard } from "../../../Utils/UserDashboard/DashboardJobCard/DashboardJobCard";
import { RecruitmentJobCard } from "../../../Utils/Recruitment/RecruitmentJobCard/RecruitmentJobCard";
import { CommunityEventCard } from "../../../Utils/Events/CommunityEventCard";
import { MvpCard } from "../../../Utils/ComDashboard/MvpCard";

import icon_dashboard from "../../../Assets/UserDashboard/icon_dashboard.png";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const ComDashboard = () => {
  const [completionPercentage, setCompletionPercentage] = React.useState(50);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack spacing={3}>
        <Paper
          sx={{
            backgroundColor: "#dadada",
            padding: "1%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography fontWeight="normal" variant="h6">
              Welcome to the Dashboard
            </Typography>
            <Typography fontWeight="bold" variant="h6">
              Company
            </Typography>
          </Stack>
          <img src={icon_dashboard} alt="icon dashboard" />
        </Paper>

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
          <Stack direction="row" spacing={3}>
            <DashboardJobCard
              img={icon_dashboard}
              heading="Frontend JS Developer"
              tag="Job"
              ceoName="Moiz"
              companyName="CEO Company"
            />
            <DashboardJobCard
              heading="Frontend JS Developer
              "
              img={icon_dashboard}
              tag="Job"
              ceoName="Moiz"
              companyName="CEO Company"
            />
            <DashboardJobCard
              img={icon_dashboard}
              heading="Frontend JS Developer
              "
              tag="Job"
              ceoName="Moiz"
              companyName="CEO Company"
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
          <Stack direction="row" spacing={3}>
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
          <Stack direction="row" spacing={3}>
            <CommunityEventCard />
          </Stack>
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#bf00c3",
            }}
          >
            Product/MVPs
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MvpCard
                  image={icon_dashboard}
                  title={`Card Title ${index}`}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};
