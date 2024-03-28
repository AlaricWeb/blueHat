import { defineData } from "!/config";
export const menu = defineData("menu", {
  title: "",
});
export const role = defineData("role", {
  name: "@csentence(3)",
});
export const user = defineData("user", {
  name: "@cname",
  avatar: "@image(100x100)",
  account: /\d{5,10}\w{10}/,
  "system_role_id|1-10": 1,
});
