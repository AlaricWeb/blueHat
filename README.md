# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.
  V1.80.1 还添加了每个模式映射的功能。例如，mapkey <f:o> <f2>只会将 Vomnibar 视为 f，<f2>而不会在其他模式下。在此示例中 o 表示 Vomnibar，您还可以使用 i(Insert Mode)、l(LinkHints)、f(FindMode)、v(VisualMode) 和 m(Marks)。
  [
  {
  "id": 1,
  "name": "秦丽",
  "avatar": "http://dummyimage.com/100x100",
  "account": "445697765JEDfUYAY02",
  "system_role_id": 4,
  "created_at": "2021-08-01 01:36:04",
  "updated_at": "1982-05-20 11:05:55"
  },
  {
  "id": 2,
  "name": "龚明",
  "avatar": "http://dummyimage.com/100x100",
  "account": "0346317054Ek7mldJoMQ",
  "system_role_id": 4,
  "created_at": "2008-07-03 13:30:37",
  "updated_at": "2019-11-05 08:22:34"
  },
  {
  "id": 3,
  "name": "卢涛",
  "avatar": "http://dummyimage.com/100x100",
  "account": "6266013475dc6WGnefls",
  "system_role_id": 5,
  "created_at": "1998-03-11 07:10:24",
  "updated_at": "1994-12-15 12:18:49"
  }
  ]
  fn({id:1}) 查找 id 返回等于 1 的 节点
  fn({id:1,name:"张三"}); 查找 id 等于 1 并且 name 等于张三
  fn({id:[1,3,4],name:"张三"})查找 id 等于 1,3,4 并且 name 等于张三
  fn({name:/\w/}) 使用正则查找
