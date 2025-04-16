import { AppContainer } from "@containers/AppContainer";
import { Header } from "@containers/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <AppContainer>
      <Header />
      <Outlet />
    </AppContainer>
  ),
});
