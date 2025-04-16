import { createFileRoute } from "@tanstack/react-router";
import { Route as SalesRoute } from "./sales";
import { Route as StatsRoute } from "./stats";
import { Route as BaseRoute } from "./base";
import { Route as CampaignRoute } from "./campaign";
import { Route as ProjectRoute } from "./project";
import { CronPage } from "@containers/CronPage";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CronPage />;
}

export const routes = {
  sales: SalesRoute,
  stats: StatsRoute,
  base: BaseRoute,
  campaign: CampaignRoute,
  project: ProjectRoute,
};
