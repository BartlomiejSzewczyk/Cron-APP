import { FormButton } from "@components/FormButton";
import { useHeader } from "../Header/hooks/useHeader";

interface SaveButtonProps {
  closePopup: () => void;
}

export const SaveButton = ({ closePopup }: SaveButtonProps) => {
  const { cron } = useHeader();

  return (
    <FormButton
      variant="contained"
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent("set-cron", {
            detail: { cron },
          })
        );
        closePopup();
      }}
      sx={{
        color: "white",
        bgcolor: "#5699F6",
      }}
    >
      Zatwierdź
    </FormButton>
  );
};
