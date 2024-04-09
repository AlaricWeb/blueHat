import { defineRestFul } from "!/defineRestFul";
defineRestFul("/user", {
  name: "@cname",
});
defineRestFul("/menu", [
  {
    id: "@increment",
    title: "控制台",
    route_path: "/console",
  },
  {
    id: "@increment",
    title: "控制台",
    route_path: "/console",
  },
  {
    id: "@increment",
    title: "控制台",
    route_path: "/console",
  },
]);
