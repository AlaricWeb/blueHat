import Mock from "mockjs";
import { MockHttpItem, MockRequest } from "vite-plugin-mock-dev-server";
import { loadEnv } from "vite";
import { createDefineMock, defineMockData as df } from "vite-plugin-mock-dev-server";
import path from "node:path";
const env = loadEnv("development", "");
export const defineMock = createDefineMock((mock) => {
  mock.url = path.join(env.VITE_BASE_URL, mock.url);
  return mock;
});
// 4. restful 配置
const data: any = {};
const defineData = (url: string, list: any) => (data[url] = list);
const response = (data: any): MockHttpItem["response"] => {
  return function (req, res, next) {
    const result = JSON.stringify({ code: 0, msg: "获取成功", result: data });
    res.end(result);
  };
};
const createRestFul = (url: string): MockHttpItem[] => [
  {
    url,
    method: "GET",
    response: response(data[url]),
  },
  {
    url,
    method: "POST",
    response: response(data[url]),
  },
  {
    url: `${url}/:id`,
    method: "GET",
    response: response(data[url]),
  },
  {
    url: `${url}/:id`,
    method: "PUT",
    response: response(data[url]),
  },
  {
    url: `${url}/:id`,
    method: "DELETE",
    response: response(data[url]),
  },
];

export const router: MockHttpItem[] = [];
// 2. 生成mock 数据
const MockList = (mockTemp: object) => {
  const result = Mock.mock({
    "list|10": [
      {
        "id|+1": 1,
        ...mockTemp,
        created_at: "@datetime",
        updated_at: "@datetime",
      },
    ],
  }).list;
  return result;
};
export function defineRestFul(url: string, mockTemp: object) {
  const list = MockList(mockTemp);
  defineData(url, list);
  const result = createRestFul(url);
  router.push(...result);
}
export function defineRequest(MockHttpItem: MockHttpItem) {
  const result = defineMock(MockHttpItem);
  router.push(result);
}
