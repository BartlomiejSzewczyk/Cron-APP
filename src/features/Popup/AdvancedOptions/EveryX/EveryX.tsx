import { FormSelect } from "@components/FormSelect";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useMemo } from "react";
import { useEveryX } from "./hooks/useEveryX";

import {
  advancedInputOptions,
  AdvancedInputType,
} from "@constants/inputOptions";
import { FormRadio } from "@components/FormRadio";
import { useFormContext, useWatch } from "react-hook-form";

interface EveryXProps {
  type: AdvancedInputType;
}

export const EveryX = ({ type }: EveryXProps) => {
  const { control, register } = useFormContext();
  const data = advancedInputOptions[type];
  const active = useWatch({ control, name: data.watch }) === data.everyX.key;
  const { item, setItem, increase, decrease } = useEveryX({
    active,
    type,
  });
  const menuOptions = useMemo(
    () =>
      [...Array(data.everyX.menuItems)].map((_, index) => (
        <MenuItem key={`${type}${index}`} value={index}>
          {index}
        </MenuItem>
      )),
    []
  );

  return (
    <>
      <FormRadio value={data.everyX.key} label={data.everyX.label} />
      <FormSelect
        {...register(data.everyX.key)}
        className="w-full"
        disabled={!active}
        value={item}
        onChange={(e: SelectChangeEvent<unknown>) =>
          setItem(Number(e.target.value))
        }
        clear={() => setItem(data.everyX.minValue)}
        increase={increase}
        decrease={decrease}
      >
        {menuOptions}
      </FormSelect>
    </>
  );
};
