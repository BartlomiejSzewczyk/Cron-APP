import { FormSelect } from "@components/FormSelect";
import { Box, MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";
import { useEveryBetween } from "./hooks/useEveryBetween";
import { useMemo } from "react";
import {
  advancedInputOptions,
  AdvancedInputType,
} from "@constants/inputOptions";
import { FormRadio } from "@components/FormRadio";

interface EveryBetweenProps {
  type: AdvancedInputType;
}

export const EveryBetween = ({ type }: EveryBetweenProps) => {
  const { register, control } = useFormContext();
  const data = advancedInputOptions[type];
  const active =
    useWatch({ control, name: data.watch }) === data.everyBetween.key;
  const {
    min,
    max,
    handleSetMin,
    handleSetMax,
    increaseMax,
    increaseMin,
    decreaseMax,
    decreaseMin,
  } = useEveryBetween({ active, type });

  const menuOptions = useMemo(
    () =>
      [...Array(data.everyBetween.menuItems)].map((_, index) => (
        <MenuItem key={`${type}${index}`} value={index}>
          {index}
        </MenuItem>
      )),
    []
  );

  return (
    <>
      <FormRadio
        value={data.everyBetween.key}
        label={data.everyBetween.label}
      />
      <Box className="flex gap-[16px] items-center">
        <FormSelect
          {...register(data.everyBetween.minKey)}
          disabled={!active}
          value={min}
          onChange={(e: SelectChangeEvent<unknown>) =>
            handleSetMin(Number(e.target.value))
          }
          clear={() => handleSetMin(data.everyBetween.minValue)}
          increase={increaseMin}
          decrease={decreaseMin}
        >
          {menuOptions}
        </FormSelect>
        <Typography>-</Typography>
        <FormSelect
          {...register(data.everyBetween.maxKey)}
          disabled={!active}
          value={max}
          onChange={(e: SelectChangeEvent<unknown>) =>
            handleSetMax(Number(e.target.value))
          }
          clear={() => handleSetMax(data.everyBetween.minValue + 1)}
          increase={increaseMax}
          decrease={decreaseMax}
        >
          {menuOptions}
        </FormSelect>
      </Box>
    </>
  );
};
