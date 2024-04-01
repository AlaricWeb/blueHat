import { loadEnv } from "vite";
import { createDefineMock, defineMockData as df } from "vite-plugin-mock-dev-server";

import Mock from "mockjs";
import path from "node:path";
const env = loadEnv("development", "");
export const data: any = {};
export function defineData(name: string, list: any, is_mock: boolean = true) {
  if (is_mock) {
    list = Mock.mock({
      "list|3": [{ "id|+1": 1, ...list, created_at: "@datetime", updated_at: "@datetime" }],
    }).list;
  }
  data[name] = Mock.mock(list);
  return data[name];
}
export default createDefineMock((mock) => {
  mock.url = path.join(env.VITE_BASE_URL, mock.url);
  return mock;
});
