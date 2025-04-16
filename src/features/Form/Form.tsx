import { Box } from "@mui/material";
import { Header } from "./Header";
import { Inputs } from "./Inputs";
import { PopupButton } from "./PopupButton";

export const Form = () => {
  return (
    <Box
      className="w-full border border-[#EFF1F5] rounded-[8px] gap-[24px] p-[24px] flex bg-[#FFFFFF] flex-col"
      sx={{ boxShadow: "4px 4px 10px 0px #00000005" }}
    >
      <Header />
      <Inputs />
      <PopupButton />
    </Box>
  );
};
