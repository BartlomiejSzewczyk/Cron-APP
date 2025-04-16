import { Box, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { EveryBetween, EveryX, Specific } from "../AdvancedOptions";
import { SectionHeader } from "@components/SectionHeader";
import { FormRadio } from "@components/FormRadio";

export const Minutes = () => {
  const { control } = useFormContext();
  return (
    <Box>
      <SectionHeader title="Minuta" />
      <Controller
        control={control}
        name="minuteOption"
        defaultValue="everyMinute"
        render={({ field }) => (
          <RadioGroup {...field} className="flex">
            <FormRadio value="everyMinute" label="Każda minuta" />
            <EveryBetween type="minute" />
            <EveryX type="minute" />
            <Specific type="minute" />
          </RadioGroup>
        )}
      />
    </Box>
  );
};
