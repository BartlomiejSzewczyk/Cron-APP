import { Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <Typography
      variant="h4"
      component="h4"
      sx={{ fontSize: "14px", fontWeight: 700 }}
    >
      {title}
    </Typography>
  );
};
