import { defineStore } from "pinia"
import request from "../utils/request"
export default defineStore("user", {
    state() {
        return {
            userinfo: {},
            token: "",
            auth: []
        }
    },
    getters: {
        TreeList() {
            let build: any = {};
            for (let item of this.auth) {
                build[item['id']] = { ...item as object };
                build[item['id']]['children'] = [];
            }
            let tree = [];
            for (let key in build) {
                if (build.hasOwnProperty(key) && build[build[key]['parent_id']]) {
                    build[build[key]['parent_id']]['children'].push(build[key]);
                } else {
                    tree.push(build[key]);
                }
            }
            return tree
        }
    },
    actions: {
        async password(data: { account: string, password: string }) {
            const { data: { token, auth } } = await request.post("/login/password", data);
            this.auth = auth;
            this.token = token;
            return true;
        }
    },
    persist: true
})