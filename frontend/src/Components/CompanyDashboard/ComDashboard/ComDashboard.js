import React, { useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Paper from "@mui/material/Paper";
import { DashboardJobCard } from "../../../Utils/UserDashboard/DashboardJobCard/DashboardJobCard";
import { RecruitmentJobCard } from "../../../Utils/Recruitment/RecruitmentJobCard/RecruitmentJobCard";
import { CommunityEventCard } from "../../../Utils/Events/CommunityEventCard";
import { MvpCard } from "../../../Utils/ComDashboard/MvpCard";

import icon_dashboard from "../../../Assets/ComDashboard/block.png";
import { TestimonialsCard } from "../../../Utils/TestimonialsCard/TestimonialsCard";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const ComDashboard = () => {
  const carouselRef = useRef(null);

  const [completionPercentage, setCompletionPercentage] = React.useState(50);
  let box = document.querySelector(".sliderContainer");
  const handleLeftSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300; // Adjust the scroll amount as needed
    }
  };
  const handleRightSlide = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: "100%", min: "75%" }, // Adjust as needed
      items: 5,
    },
    desktop: {
      breakpoint: { max: "75%", min: "50%" }, // Adjust as needed
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: "50%", min: "25%" }, // Adjust as needed
      items: 2,
    },
    mobile: {
      breakpoint: { max: "25%", min: "0" }, // Adjust as needed
      items: 1,
    },
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack spacing={3}>
        <Stack
          direction={"row"}
          width={"75%"}
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

          <Carousel responsive={responsive}>
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
              <DashboardJobCard
                img={icon_dashboard}
                heading="Frontend JS Developer
            "
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
          </Carousel>

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
