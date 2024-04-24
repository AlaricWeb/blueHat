<script setup lang="ts">
import { ElIcon, ElMenuItem, ElSubMenu } from "element-plus";
import { h } from "vue";
import { Document, Folder } from "@element-plus/icons-vue";
import { Icon } from "@iconify/vue"
export interface MenuItem {
  name: string;
  route_path: string;
  icon: string;
  [props: string]: any;
}
const model = defineModel<Array<MenuItem>>({ required: true });
interface Props {
  option: any[];
}
const TreeMenu = (props: Props) => {
  return props.option.map((item) => {
    if (item.children?.length) {
      return h(
        ElSubMenu,
        {
          index: item.route_path || item.id.toString(),
        },
        {
          default: () => {
            const childNode = TreeMenu({ option: item.children });
            return childNode;
          },
          title: () => [
            h(ElIcon, null, () => {
              if (item.icon) {
                return h(Icon, { icon: item.icon });
              } else {
                return h(Folder);
              }
            }),
            h("span", item.title),
          ],
        }
      );
    }
    return h(
      ElMenuItem,
      {
        index: item.route_path,
      },
      () => [
        h(ElIcon, null, () => {
          if (item.icon) {
            return h(Icon, { icon: item.icon });
          } else {
            return h(Document);
          }
        }),
        h("span", null, item.title),
      ]
    );
  });
};
</script>
<template>
  <ElMenu unique-opened router background-color="#000000 ">
    <TreeMenu :option="model"></TreeMenu>
  </ElMenu>
</template>
<style lang="scss" scoped>
.el-menu {
  width: 220px;
  border: none;
  height: 100vh;
}
</style>
