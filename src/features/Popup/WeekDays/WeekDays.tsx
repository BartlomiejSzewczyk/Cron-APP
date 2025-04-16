import { FormRadio } from "@components/FormRadio";
import { SectionHeader } from "@components/SectionHeader";
import { Box, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Specific } from "../SimpleOptions";

export const WeekDays = () => {
  const { control } = useFormContext();
  return (
    <Box>
      <SectionHeader title="Dzień tygodnia" />
      <Controller
        control={control}
        name="weekDaysOption"
        defaultValue="everyWeekDay"
        render={({ field }) => (
          <RadioGroup {...field} className="flex">
            <FormRadio value="everyWeekDay" label="Każdy dzień tygodnia" />
            <Specific type="weekDays" />
          </RadioGroup>
        )}
      />
    </Box>
  );
};
