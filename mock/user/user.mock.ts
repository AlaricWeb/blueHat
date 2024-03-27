import defineMock from "!/config";
import { user } from "./user";
export default defineMock({
  url: "/user",
  method: "GET",
  body: user.value,
});
