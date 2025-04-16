import { FormRadio } from "@components/FormRadio";
import { SectionHeader } from "@components/SectionHeader";
import { Box, RadioGroup } from "@mui/material";
import { Specific } from "../SimpleOptions";
import { Controller, useFormContext } from "react-hook-form";

export const Months = () => {
  const { control } = useFormContext();
  return (
    <Box>
      <SectionHeader title="Miesiąc roku" />
      <Controller
        control={control}
        name="monthsOption"
        defaultValue="everyMonth"
        render={({ field }) => (
          <RadioGroup {...field} className="flex">
            <FormRadio value="everyMonth" label="Każdy miesiąc roku" />
            <Specific type="months" />
          </RadioGroup>
        )}
      />
    </Box>
  );
};
