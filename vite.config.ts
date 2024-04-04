import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import MockDevServer from "vite-plugin-mock-dev-server";

import path from "node:path";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, "");
  return {
    base: "/blueHat/",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "!": fileURLToPath(new URL("./mock", import.meta.url)),
      },
    },
    plugins: [
      vue(),
      MockDevServer({
        prefix: env.VITE_API_URL,
        log: "debug",
        reload: true,
        wsPrefix: ["/socket.io"],
        cors: true,
        formidableOptions: {
          // 配置上传资源存放目录
          uploadDir: path.join(process.cwd(), "example/uploads"),
          // 可修改上传资源名称
          filename: (_name: any, _ext: any, part: { originalFilename: any }) => {
            return part.originalFilename!;
          },
        },
        build: true,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    server: {
      host: true,
      proxy: {
        [env.VITE_BASE_URL]: {
          target: env.VITE_API_URL,
        },
      },
    },
  };
});
