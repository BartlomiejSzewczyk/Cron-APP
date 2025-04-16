import { CloseRounded } from "@mui/icons-material";
import { Backdrop, Box, Fade, IconButton, Modal } from "@mui/material";
import { Minutes } from "./Minutes";
import { FormProvider, useForm } from "react-hook-form";
import { Header } from "./Header";
import { FormButton } from "@components/FormButton";
import { Hours } from "./Hours";
import { MonthDays } from "./MonthDays";
import { Months } from "./Months";
import { WeekDays } from "./WeekDays";
import { SaveButton } from "./SaveButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: "max-content",
  maxWidth: "1250px",
};

interface PopupProps {
  closePopup: () => void;
}

export const Popup = ({ closePopup }: PopupProps) => {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <Modal
        open={true}
        onClose={closePopup}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 100,
          },
        }}
        className="bg-color-[#FFFFFF]"
      >
        <Fade in={true}>
          <Box sx={style} className="flex flex-col gap-[16px]">
            <Box className="text-right">
              <IconButton onClick={closePopup}>
                <CloseRounded fontSize="small" />
              </IconButton>
            </Box>
            <Header />
            <Box className="flex gap-[24px]">
              <Minutes />
              <Hours />
            </Box>
            <Box className="flex w-full justify-between gap-[24px]">
              <MonthDays />
              <Months />
              <WeekDays />
            </Box>
            <Box className="flex gap-[16px] justify-end">
              <FormButton
                variant="outlined"
                onClick={closePopup}
                sx={{
                  color: "black",
                  bgcolor: "#FBFBFB",
                  border: "1px solid #DBDBDB",
                }}
              >
                Zamknij
              </FormButton>
              <SaveButton closePopup={closePopup} />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </FormProvider>
  );
};
