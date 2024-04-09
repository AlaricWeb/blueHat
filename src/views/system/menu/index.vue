<script setup lang="ts">
import { VxeTable, VxePager, VxeColumn } from "vxe-table";
import request from "@/utils/request";
import { onMounted, reactive } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router"
const router = useRouter();
const pageConfig = reactive({
  query: {
    page: 1,
    limit: 10,
  },
  total: 100,
  loading: false,
  list: [],
});
type Query = {
  page: number;
  limit: number;
};
const fetch = async (where: Query | null = null) => {
  const params = where || {};
  pageConfig.loading = true;
  pageConfig.list = await request.get(router.currentRoute.value.fullPath, { params });
  pageConfig.loading = false;
  return true;
};
onMounted(() => {
  fetch();
});
</script>
<template>
  <VxeTable align="center" border :loading="pageConfig.loading" :data="pageConfig.list">
    <VxeColumn title="id" field="id" width="60"></VxeColumn>
    <VxeColumn title="菜单标题" field="title"></VxeColumn>
    <VxeColumn title="parent_id" field="parent_id"></VxeColumn>
    <VxeColumn title="icon" field="icon" width="60">
      <template #default="{ row }">
        <Icon :icon="row.icon"></Icon>
      </template>
    </VxeColumn>
    <VxeColumn title="created_at" field="created_at"></VxeColumn>
    <VxeColumn title="updated_at" field="updated_at"></VxeColumn>
  </VxeTable>
  <VxePager background v-model:current-page="pageConfig.query.page" v-model:page-size="pageConfig.query.limit"
    align="right" @page-change="fetch(pageConfig.query)" :total="pageConfig.total"
    :layouts="['Home', 'PrevJump', 'PrevPage', 'JumpNumber', 'NextPage', 'NextJump', 'End', 'Sizes', 'FullJump', 'Total',]">
  </VxePager>
</template>
