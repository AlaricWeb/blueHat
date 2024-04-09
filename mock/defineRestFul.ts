import Mock from "mockjs";
import { MockHttpItem } from "vite-plugin-mock-dev-server";
import { loadEnv } from "vite";
import { createDefineMock, defineMockData as df } from "vite-plugin-mock-dev-server";
import path from "node:path";
const env = loadEnv("development", "");
const delay = 1000;
export const defineMock = createDefineMock((mock) => {
  mock.url = path.join(env.VITE_BASE_URL, mock.url);
  return mock;
});

// 4. restful 配置
const data: any = {};
const defineData = (url: string, list: any) => (data[url] = list);
const response = (data: any): MockHttpItem["response"] => {
  return function (req, res, next) {
    if (req.params.id) {
      data = data[0];
    }
    const result = JSON.stringify({ code: 0, msg: "获取成功", result: data });
    res.end(result);
  };
};
const createRestFul = (url: string): MockHttpItem[] => [
  {
    url,
    method: "GET",
    delay,
    response: response(data[url]),
  },
  {
    url,
    method: "POST",
    delay,
    response: response(data[url]),
  },
  {
    url: `${url}/:id`,
    method: "GET",
    delay,
    response: response(data[url]),
  },
  {
    url: `${url}/:id`,
    method: "PUT",
    delay,
    response: response(data[url]),
  },
  {
    url: `${url}/:id`,
    method: "DELETE",
    delay,
    response: response(data[url]),
  },
];
export const router: MockHttpItem[] = [];
// 2. 生成mock 数据
const MockList = (mockTemp: object, count: number = 100) => {
  const publicField = { created_at: "@datetime", updated_at: "@datetime" };
  if (Array.isArray(mockTemp)) {
    mockTemp = mockTemp.map((item) => {
      return { ...item, ...publicField };
    });
    return Mock.mock(mockTemp);
  }

  const result = Mock.mock({
    [`list|${count}`]: [
      {
        "id|+1": 1,
        ...mockTemp,
        ...publicField,
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
