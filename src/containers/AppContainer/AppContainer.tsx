import { Box } from "@mui/material";

interface AppContainerProps {
  children: React.ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return <Box className="font-inter w-screen h-screen">{children}</Box>;
};
