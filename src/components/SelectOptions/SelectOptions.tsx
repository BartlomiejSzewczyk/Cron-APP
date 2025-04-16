import {
  ArrowDropDownRounded,
  ArrowDropUpRounded,
  CloseRounded,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

interface SelectOptionsProps {
  clear: () => void;
  increase: () => void;
  decrease: () => void;
}

export const SelectOptions = ({
  clear,
  increase,
  decrease,
}: SelectOptionsProps) => {
  return (
    <Box className="flex items-center gap-[8px]">
      <IconButton className="w-[10px] h-[10px]" size="small" onClick={clear}>
        <CloseRounded fontSize="inherit" />
      </IconButton>
      <Box className="flex flex-col">
        <IconButton
          size="small"
          className="w-[16px] h-[16px]"
          onClick={increase}
        >
          <ArrowDropUpRounded fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          className="w-[16px] h-[16px]"
          onClick={decrease}
        >
          <ArrowDropDownRounded fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};
