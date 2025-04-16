import { FormRadio } from "@components/FormRadio";
import { SectionHeader } from "@components/SectionHeader";
import { Box, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Specific } from "../SimpleOptions";

export const MonthDays = () => {
  const { control } = useFormContext();
  return (
    <Box>
      <SectionHeader title="Dzień miesiąca" />
      <Controller
        control={control}
        name="monthDayOption"
        defaultValue="everyMonthDay"
        render={({ field }) => (
          <RadioGroup {...field} className="flex">
            <FormRadio value="everyMonthDay" label="Każdy dzień miesiąca" />
            <Specific type="monthDays" />
          </RadioGroup>
        )}
      />
    </Box>
  );
};
