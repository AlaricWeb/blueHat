import { loadEnv } from "vite";
import { createDefineMock } from "vite-plugin-mock-dev-server";
import path from "node:path";
const env = loadEnv("development", "");
export default createDefineMock((mock) => {
  mock.url = path.join(env.VITE_BASE_URL, mock.url);
  return mock;
});
