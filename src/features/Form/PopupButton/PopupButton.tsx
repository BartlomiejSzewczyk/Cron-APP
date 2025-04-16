import { FormButton } from "@components/FormButton";
import { Box } from "@mui/material";
import { usePopupButton } from "./hooks/usePopupButton";
import { Popup } from "@features/Popup";

export const PopupButton = () => {
  const { openPopup, closePopup, open } = usePopupButton();

  return (
    <>
      <Box>
        <FormButton
          onClick={openPopup}
          variant="outlined"
          sx={{
            color: "black",
            bgcolor: "#FBFBFB",
            border: "1px solid #DBDBDB",
          }}
        >
          Ustaw harmonogram
        </FormButton>
      </Box>
      {open && <Popup closePopup={closePopup} />}
    </>
  );
};
