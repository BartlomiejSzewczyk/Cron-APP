import { SelectOptions } from "@components/SelectOptions";
import { Select, SelectProps } from "@mui/material";
import clsx from "clsx";

type FormSelectProps = SelectProps & {
  clear?: () => void;
  increase?: () => void;
  decrease?: () => void;
};

export const FormSelect: React.FC<FormSelectProps> = ({
  clear = () => {},
  increase = () => {},
  decrease = () => {},
  children,
  className,
  ...props
}) => {
  return (
    <Select
      {...props}
      value={props.value ?? ""}
      sx={{ pointerEvents: props.disabled ? "none" : "auto" }}
      type="number"
      IconComponent={() => (
        <SelectOptions clear={clear} increase={increase} decrease={decrease} />
      )}
      className={clsx("h-[40px] w-[250px]", className)}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
          },
        },
      }}
    >
      {children}
    </Select>
  );
};
