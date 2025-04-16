import { FormControlLabel, Radio, Typography } from "@mui/material";

interface FormRadioProps {
  value: string;
  label: string;
}

export const FormRadio = ({ value, label }: FormRadioProps) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={<Typography fontSize={"14px"}>{label}</Typography>}
    />
  );
};
