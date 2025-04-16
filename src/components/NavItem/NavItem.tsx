import { Tab } from "@constants/tabs";
import { ExpandMore } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { routes } from "@routes/index";
import { Link } from "@tanstack/react-router";

interface NavItemProps {
  tab: Tab;
}

export const NavItem = ({ tab: { value, label } }: NavItemProps) => {
  const route = routes[value];

  return (
    <Link key={value} to={route.to}>
      <Box className="flex items-center gap-[8px]">
        <Typography
          sx={{ fontSize: "12px" }}
          className="text-white text-[12px] font-medium"
        >
          {label}
        </Typography>
        <ExpandMore className="text-white" fontSize="small" />
      </Box>
    </Link>
  );
};
