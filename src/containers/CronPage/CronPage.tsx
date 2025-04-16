import { Form } from "@features/Form";
import { AppsRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const CronPage = () => {
  return (
    <Box className="w-[960px] place-self-center p-[24px] gap-[24px] flex flex-col">
      <Box className="flex items-center gap-[8px]">
        <AppsRounded sx={{ color: "#343330" }} />
        <Typography
          variant="h2"
          sx={{ fontSize: "32px", fontWeight: 600, color: "#14181F" }}
        >
          Cron
        </Typography>
      </Box>
      <Form />
    </Box>
  );
};
