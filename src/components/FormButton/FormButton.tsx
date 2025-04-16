import { Button, ButtonProps, SxProps, Theme } from "@mui/material";

interface FormButtonProps extends ButtonProps {
  sx?: SxProps<Theme>;
}

export const FormButton: React.FC<FormButtonProps> = ({
  children,
  sx = {},
  ...props
}) => {
  return (
    <Button
      {...props}
      size="large"
      className="flex py-[8px] px-[16px]"
      sx={{
        textTransform: "none",
        borderRadius: "8px",
        height: "40px",
        fontSize: "12px",
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};
