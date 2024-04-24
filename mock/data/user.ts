import { defineRequest, defineRestFul } from "!/defineRestFul";
import menu from "./menu.json";
defineRestFul("/user", {
  name: "@cname",
});
defineRestFul("/system/menu", menu);
defineRequest({
  url: "/login/password",
  method: "POST",
  body(request) {
    return {
      code: 0,
      msg: "登录成功",
      result: {
        auth: "fsfsf",
      },
    };
  },
});
