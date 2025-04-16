import { SxProps, TextField, TextFieldProps, Theme } from "@mui/material";

interface FormInputProps extends Omit<TextFieldProps, "variant"> {
  sx?: SxProps<Theme>;
}

export const FormInput: React.FC<FormInputProps> = ({ sx = {}, ...props }) => {
  return (
    <TextField
      {...props}
      className="w-[420px]"
      size="small"
      sx={{
        ...sx,
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          fontSize: "14px",
          height: "40px",
          "& fieldset": {
            borderColor: "#E9EBF0",
          },
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
        },
      }}
    />
  );
};
