import { Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GoogleLogo from "../../Assets/Header/Testimonials/GoogleLogo.png";
import content from "../../StaticContent/Header/testimonials.json";
import { TestimonialsCard } from "../../Utils/TestimonialsCard/TestimonialsCard";

export const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
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

  return (
    <Stack backgroundColor="#f4adf6" padding="5%" spacing={10}>
      <Stack>
        <Typography
          variant="h6"
          sx={{ textTransform: "uppercase" }}
          letterSpacing={4}
        >
          &#8211; {content.heading}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
          {content.subHeading}
        </Typography>
      </Stack>
      <Stack>
        <Carousel responsive={responsive}>
          <Stack marginRight={"2rem"}>
            <TestimonialsCard
              image={GoogleLogo}
              heading="Best product ever"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dicta. Omnis voluptatum laborum dignissimos, error laboriosam possimus
            non, necessitatibus voluptates veritatis ex id, vel veniam consectetur
            sunt nostrum tempora officia."
              ceoName="Sajeel"
              companyName="Company"
            />
          </Stack>
          <Stack marginRight={"2rem"}>
            <TestimonialsCard
              image={GoogleLogo}
              heading="Best product ever"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dicta. Omnis voluptatum laborum dignissimos, error laboriosam possimus
            non, necessitatibus voluptates veritatis ex id, vel veniam consectetur
            sunt nostrum tempora officia."
              ceoName="Sajeel"
              companyName="Company"
            />
          </Stack>
          <Stack marginRight={"2rem"}>
            <TestimonialsCard
              image={GoogleLogo}
              heading="Best product ever"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dicta. Omnis voluptatum laborum dignissimos, error laboriosam possimus
            non, necessitatibus voluptates veritatis ex id, vel veniam consectetur
            sunt nostrum tempora officia."
              ceoName="Sajeel"
              companyName="Company"
            />
          </Stack>
          <Stack marginRight={"2rem"}>
            <TestimonialsCard
              image={GoogleLogo}
              heading="Best product ever"
              body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dicta. Omnis voluptatum laborum dignissimos, error laboriosam possimus
            non, necessitatibus voluptates veritatis ex id, vel veniam consectetur
            sunt nostrum tempora officia."
              ceoName="Sajeel"
              companyName="Company"
            />
          </Stack>
        </Carousel>
      </Stack>
    </Stack>
  );
};
