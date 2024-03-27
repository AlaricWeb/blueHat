import defineMock from "!/config";
import { user } from "!/data/user";
export default defineMock([
  {
    url: "/user",
    method: "GET",
    validator(request) {
      const token = request.headers.token;
      return !token;
    },
    response(req, res, next) {
      const { query = {} } = req;
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: "custom response",
          query,
        })
      );
    },
  },
  {
    url: "/user",
    method: "GET",
    body: user.value,
  },
]);
