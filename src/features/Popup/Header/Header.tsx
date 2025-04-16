import { Box, Typography } from "@mui/material";
import { useHeader } from "./hooks/useHeader";

export const Header = () => {
  const { cron } = useHeader();

  return (
    <Box className="flex flex-col gap-[4px] border-b border-[#EFF1F5]">
      <Typography
        variant="h3"
        component="h3"
        sx={{ fontSize: "12px", fontWeight: 500 }}
      >
        Harmonogram
      </Typography>
      <Typography sx={{ fontSize: "18px" }}>{cron}</Typography>
    </Box>
  );
};
