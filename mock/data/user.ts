import { defineData } from "!/config";
export const menu = defineData("menu", [
  {
    id: 1,
    title: "控制台",
    route_path: '/console'
  },
  {
    id: 2,
    title: "工单管理",
    route_path: "/workorder"
  },
  {
    id: 3,
    title: "设备管理",
    route_path: "/device"
  },
], false);
export const role = defineData("role", {
  name: "@csentence(3)",
});
export const user = defineData("user", {
  name: "@cname",
  avatar: "@image(100x100)",
  account: /\d{5,10}\w{10}/,
  "system_role_id|1-10": 1,
});
