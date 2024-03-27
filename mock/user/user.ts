import { defineMockData } from "vite-plugin-mock-dev-server";

export const user = defineMockData("user", [
  { id: "1", title: "title1", content: "content1" },
  { id: "2", title: "title2", content: "content2" },
]);
