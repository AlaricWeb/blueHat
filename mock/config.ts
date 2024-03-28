import { loadEnv } from "vite";
import { createDefineMock, defineMockData as df } from "vite-plugin-mock-dev-server";

import Mock from "mockjs";
import path from "node:path";
const env = loadEnv("development", "");
export function defineMockData(name: string, temp: {}) {
  const data = Mock.mock({
    "list|10": [{ "id|+1": 1, ...temp, created_at: "@datetime", updated_at: "@datetime" }],
  });
  return df(name, data.list);
}
export const data: any = {};
export function defineData(name: string, temp: any) {
  const findByID = function (id: string) {
    return this.find((item: any) => item.id == id);
  };
  const dropByID = function (id: string) {
    const index = this.findIndex((item: any) => item.id == id);
    if (index == -1) return false;
    return this.splice(index, 1);
  };
  const create = function (data: any) {
    console.log(data);
  };
  const update = function (id: string, newData: object) {
    const index = this.findIndex((item: any) => item.id == id);
    if (index == -1) return false;
    return Object.assign(this[index], newData);
  };
  const { list } = Mock.mock({
    "list|3": [{ "id|+1": 1, ...temp, created_at: "@datetime", updated_at: "@datetime" }],
  });
  const methods = {
    findByID,
    dropByID,
    update,
    create,
  };
  data[name] = Object.assign(list, methods);
  return data[name];
}
export default createDefineMock((mock) => {
  mock.url = path.join(env.VITE_BASE_URL, mock.url);
  return mock;
});
