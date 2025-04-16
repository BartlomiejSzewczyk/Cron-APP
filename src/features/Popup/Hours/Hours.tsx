import { Box, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { EveryBetween, EveryX, Specific } from "../AdvancedOptions";
import { SectionHeader } from "@components/SectionHeader";
import { FormRadio } from "@components/FormRadio";

export const Hours = () => {
  const { control } = useFormContext();
  return (
    <Box>
      <SectionHeader title="Godzina" />
      <Controller
        control={control}
        name="hourOption"
        defaultValue="everyHour"
        render={({ field }) => (
          <RadioGroup {...field} className="flex">
            <FormRadio value="everyHour" label="Każda godzina" />
            <EveryBetween type="hour" />
            <EveryX type="hour" />
            <Specific type="hour" />
          </RadioGroup>
        )}
      />
    </Box>
  );
};
