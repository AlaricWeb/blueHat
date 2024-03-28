import { defineRestFul, router } from "!/restful";
import { menu, role, user } from "!/data/user";
import defineMock from "!/config";
defineRestFul("role", role);
defineRestFul("user", user);
defineRestFul("menu", menu);
export default defineMock(router);
