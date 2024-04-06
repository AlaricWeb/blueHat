import { defineRestFul, defineRequest, router } from "!/restful";
import { menu, role, user } from "!/data/user";
import defineMock from "!/config";
defineRestFul("/system/role", role);
defineRestFul("/system/user", user);
defineRestFul("/system/menu", menu)
defineRequest('/login/password', function () {
    return {
        code: 0,
        data: {
            ...user[0],
            token: "324324324",
            auth: menu
        }
    }
}, "POST", { delay: 3000 })
export default defineMock(router);
