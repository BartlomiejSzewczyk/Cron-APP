import { FormSelect } from "@components/FormSelect";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useMemo } from "react";
import { useSpecific } from "./hooks/useSpecific";
import { useFormContext, useWatch } from "react-hook-form";
import {
  advancedInputOptions,
  AdvancedInputType,
} from "@constants/inputOptions";
import { FormRadio } from "@components/FormRadio";

interface SpecificProps {
  type: AdvancedInputType;
}

export const Specific = ({ type }: SpecificProps) => {
  const { control, register } = useFormContext();
  const data = advancedInputOptions[type];
  const active = useWatch({ control, name: data.watch }) === data.specific.key;
  const { items, setItems, increase, decrease } = useSpecific({
    active,
    type,
  });
  const menuOptions = useMemo(
    () =>
      [...Array(data.specific.menuItems)].map((_, index) => (
        <MenuItem key={`${type}${index}`} value={index}>
          {index}
        </MenuItem>
      )),
    []
  );
  return (
    <>
      <FormRadio value={data.specific.key} label={data.specific.label} />
      <FormSelect
        {...register(data.specific.key)}
        className="w-[550px]"
        value={items}
        multiple
        onChange={(e: SelectChangeEvent<unknown>) => {
          const arr = e.target.value;
          if (Array.isArray(arr)) {
            setItems(arr.map((x) => Number(x)));
          }
        }}
        clear={() => {
          setItems([0]);
        }}
        disabled={!active}
        increase={increase}
        decrease={decrease}
      >
        {menuOptions}
      </FormSelect>
    </>
  );
};
