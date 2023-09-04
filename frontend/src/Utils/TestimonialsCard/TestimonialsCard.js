import { Avatar, Stack, Typography } from "@mui/material";

export const TestimonialsCard = ({ heading, body, ceoName, companyName }) => {
  return (
    <Stack
      backgroundColor="white"
      padding={"10%"}
      borderRadius={"20px"}
      spacing={2}
    >
      <Stack>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {heading}
        </Typography>
        <Typography variant="subtitle1" textAlign={"justify"} color={"#6f6c8f"}>
          {body}
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Avatar />
        <Stack>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {ceoName}
          </Typography>
          <Typography variant="subtitle1">{companyName}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
