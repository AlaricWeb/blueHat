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
    actions: {
        async password(data: { account: string, password: string }) {
            const { data: { token, auth } } = await request.post("/login/password", data);
            this.auth = auth;
            this.token = token;
            return true;
        }
    }
})