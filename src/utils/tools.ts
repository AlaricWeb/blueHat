export function groupBy<T extends object>(data: T[], ByKey: keyof T): Record<string, T> {
  const result: any = {};
  data.forEach((item) => (result[item[ByKey]] = item));
  return result;
}
export function builderTree(data: any, id = "id", pid = "parent_id", children = "children") {
  let build: any = {};
  for (let item of data) {
    build[item[id]] = { ...item };
    build[item[id]][children] = [];
  }

  let tree = [];
  for (let key in build) {
    if (build.hasOwnProperty(key) && build[build[key][pid]]) {
      build[build[key][pid]][children].push(build[key]);
    } else {
      tree.push(build[key]);
    }
  }

  return tree;
}
type PageConfig = {
  query: {
    page: number;
    limit: number;
  };
  total: number;
  listing: [];
};
export function useReactive<T extends PageConfig>(param: T) {
  console.log(param);
  return () => {};
}
