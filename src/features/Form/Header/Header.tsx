import { FormButton } from "@components/FormButton";
import { AddRounded, CloseRounded, DragIndicator } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box className="flex items-center w-full border-b-[#EFF1F5] border-b pb-[24px]">
      <Box className="flex-grow gap-[8px] flex">
        <DragIndicator />
        <Typography sx={{ fontSize: "16px" }}>Harmonogram</Typography>
      </Box>
      <Box className="gap-[8px] flex">
        <FormButton
          startIcon={<CloseRounded />}
          variant="outlined"
          sx={{
            color: "black",
            bgcolor: "#FBFBFB",
            border: "1px solid #DBDBDB",
          }}
        >
          Zamknij
        </FormButton>
        <FormButton
          startIcon={<AddRounded />}
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "#5699F6",
          }}
        >
          Zapisz
        </FormButton>
      </Box>
    </Box>
  );
};
