import { MockHttpItem, MockRequest } from "vite-plugin-mock-dev-server";

export const router: MockHttpItem[] = [];

// 自定义异常类
class ResourceNotFoundError extends Error {
  constructor(message: string, public errorCode: number) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// 定义操作方法接口
interface Operations<T> {
  getAll: (request: MockRequest, data: T[]) => T[];
  getOne: (request: MockRequest, data: T[]) => () => T;
  updateOne: (request: MockRequest, data: T[]) => () => T;
  createOne: (request: MockRequest, data: T[]) => () => T;
  deleteOne: (request: MockRequest, data: T[]) => () => T;
}

// 处理路由函数的高阶函数
const handleRoute = <T>(routeFunction: Function, data: T[]) => {
  return (request: MockRequest) => {
    try {
      return routeFunction(request, data);
    } catch (error) {
      if (error instanceof ResourceNotFoundError) {
        return {
          msg: error.message,
          code: error.errorCode,
        };
      } else {
        return {
          msg: "服务器内部错误",
          code: 500,
        };
      }
    }
  };
};

// 默认操作方法对象
const defaultOperations: Operations<any> = {
  getAll: (request, data) => {
    return data;
  },
  getOne: ({ params: { id } }, data) => {
    const result = data.find((item) => item.id == id);
    if (!result) throw new ResourceNotFoundError("资源不存在", 404);
    return result;
  },
  updateOne: ({ params: { id } }, data) => {
    const result = data.find((item) => item.id === id);
    if (!result) throw new ResourceNotFoundError("资源不存在", 404);
    return result;
  },
  createOne: ({ params: { id } }, data) => {
    const result = data.find((item) => item.id === id);
    if (!result) throw new ResourceNotFoundError("资源不存在", 404);
    return result;
  },
  deleteOne: ({ params: { id } }, data) => {
    const result = data.find((item) => item.id === id);
    if (!result) throw new ResourceNotFoundError("资源不存在", 404);
    return result;
  },
};

// 合并操作方法对象
const mergeOperations = <T>(
  defaultOps: Operations<T>,
  customOps?: Partial<Operations<T>>
): Operations<T> => {
  return { ...defaultOps, ...customOps };
};

// 定义 RESTful API
export function defineRestFul<T extends { id: number }>(
  name: string,
  data: T[],
  customOperations?: Partial<Operations<T>>
) {
  const operations = mergeOperations(defaultOperations, customOperations);
  const restAPIs: MockHttpItem[] = [
    { url: `/${name}`, method: "GET", body: handleRoute(operations.getAll, data) },
    { url: `/${name}/:id`, method: "GET", body: handleRoute(operations.getOne, data) },
    { url: `/${name}/:id`, method: "PUT", body: handleRoute(operations.updateOne, data) },
    { url: `/${name}`, method: "POST", body: handleRoute(operations.createOne, data) },
    { url: `/${name}/:id`, method: "DELETE", body: handleRoute(operations.deleteOne, data) },
  ];

  router.push(...restAPIs);
  return restAPIs;
}
export function query<T>(where: Partial<T>): T[] {
  return [];
}
