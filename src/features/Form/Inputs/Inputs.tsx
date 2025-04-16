import { FormInput } from "@components/FormInput";
import { Box } from "@mui/material";
import { CronInput } from "./CronInput";

export const Inputs = () => {
  return (
    <>
      <Box className="flex-col gap-[24px] flex">
        <Box
          className="flex items-center gap-[24px]"
          sx={{ fontSize: "14px", borderColor: "#E9EBF0" }}
        >
          <FormInput label="Nazwa" />
          <FormInput label="Komenda" />
        </Box>
        <CronInput />
      </Box>
    </>
  );
};
