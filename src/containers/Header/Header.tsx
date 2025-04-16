import { NavItem } from "@components/NavItem";
import { tabs } from "@constants/tabs";
import { Box, IconButton } from "@mui/material";
import logo from "../../assets/logo.svg";
import { PersonOutline } from "@mui/icons-material";
import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <Box
      className="flex justify-between w-screen box-border bg-[#31363E]"
      sx={{ boxShadow: "0px 4px 2px 0px #00000012" }}
    >
      <Box className="flex items-center w-[240px] h-[64px] p-[24px]">
        <Link to="/">
          <Box className="w-[48px]">
            <img alt="company-logo" src={logo} />
          </Box>
        </Link>
      </Box>
      <Box className="flex items-center w-full gap-[24px]">
        {tabs.map((tab) => (
          <NavItem key={tab.value} tab={tab} />
        ))}
      </Box>
      <Box className="flex items-center flex justify-end w-[240px] h-[64px] px-[24px] py-[16px]">
        <IconButton>
          <PersonOutline className="text-white" />
        </IconButton>
      </Box>
    </Box>
  );
};
