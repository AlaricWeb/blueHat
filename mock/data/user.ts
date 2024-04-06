import { defineData } from "!/config";

export const menu = defineData("menu", [
  {
    id: 1,
    title: "控制台",
    parent_id:0,
    icon:"mi:archive",
    route_path: '/console',
    created_at: "@datetime", updated_at: "@datetime" 
  },
  {
    id: 2,
    title: "工单管理",
    parent_id:0,
    icon:"mi:bold",
    route_path: "/workorder",
    created_at: "@datetime", updated_at: "@datetime" 
  },
  {
    id: 3,
    title: "设备管理",
    parent_id:2,
    route_path: "/device",
    created_at: "@datetime", updated_at: "@datetime" 
  },
  {
    id:4,
    title:"权限管理",
    parent_id:0,
    route_path:"/auth",
    created_at: "@datetime", updated_at: "@datetime" 
  },
  {
    id:5,
    title:"菜单",
    parent_id:4,
    route_path:"/system/menu",
    created_at: "@datetime", updated_at: "@datetime" 
  },
  {
    id:6,
    title:"管理员",
    parent_id:4,
    route_path:"/system/user",
    created_at: "@datetime", updated_at: "@datetime" 
  },{
    id:7,
    title:"角色",
    parent_id:4,
    route_path:"/system/role",
    created_at: "@datetime", updated_at: "@datetime" 
  }
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
