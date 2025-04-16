import { FormSelect } from "@components/FormSelect";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useSpecific } from "./hooks/useSpecific";
import { useFormContext, useWatch } from "react-hook-form";
import {
  dayOfWeekMap,
  monthMap,
  simpleInputOptions,
  SimpleInputType,
} from "@constants/inputOptions";
import { FormRadio } from "@components/FormRadio";

interface SpecificProps {
  type: SimpleInputType;
}

export const Specific = ({ type }: SpecificProps) => {
  const { control, register } = useFormContext();
  const data = simpleInputOptions[type];
  const active = useWatch({ control, name: data.watch }) === data.specific.key;
  const { items, setItems, increase, decrease } = useSpecific({
    active,
    type,
  });

  const getMenuOptions = () => {
    switch (type) {
      case "months":
        return [...Array(data.specific.menuItems)].map((_, index) => (
          <MenuItem key={`${type}${index + 1}`} value={index + 1}>
            {monthMap[index + 1]}
          </MenuItem>
        ));
      case "monthDays":
        return [...Array(data.specific.menuItems)].map((_, index) => (
          <MenuItem key={`${type}${index + 1}`} value={index + 1}>
            {index + 1}
          </MenuItem>
        ));
      case "weekDays":
        return [...Array(data.specific.menuItems)].map((_, index) => (
          <MenuItem key={`${type}${index + 1}`} value={index + 1}>
            {dayOfWeekMap[index + 1]}
          </MenuItem>
        ));
      default:
        return null;
    }
  };

  return (
    <>
      <FormRadio value={data.specific.key} label={data.specific.label} />
      <FormSelect
        {...register(data.specific.key)}
        className="w-full"
        value={items}
        multiple
        onChange={(e: SelectChangeEvent<unknown>) => {
          const arr = e.target.value;
          if (Array.isArray(arr)) {
            setItems(arr.map((x) => Number(x)));
          }
        }}
        clear={() => {
          setItems([data.specific.minValue]);
        }}
        disabled={!active}
        increase={increase}
        decrease={decrease}
      >
        {getMenuOptions()}
      </FormSelect>
    </>
  );
};
