<script setup lang="ts">
import { VxeTable, VxePager, VxeColumn, VxeTableInstance, VxeToolbarInstance } from "vxe-table";
import request from "@/utils/request";
import { onMounted, reactive, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router"
const tableRef = ref<VxeTableInstance>();
const toolbarRef = ref<VxeToolbarInstance>();
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
  try {
    const params = where || {};
    pageConfig.loading = true;
    pageConfig.list = await request.get(router.currentRoute.value.fullPath, { params });
    pageConfig.loading = false;
  } catch (error) {
    pageConfig.loading = false;
  }
  return true;
};
onMounted(() => {
  console.log(toolbarRef.value);

  fetch();
});
</script>
<template>
  <VxeToolbar ref="toolbarRef" custom print></VxeToolbar>
  <VxeTable align="center" border ref="tableRef" :loading="pageConfig.loading" :data="pageConfig.list">
    <VxeColumn type="seq" width="60"></VxeColumn>
    <VxeColumn title="id" field="id" width="60"></VxeColumn>
    <VxeColumn title="菜单标题" field="title" align="left"></VxeColumn>
    <VxeColumn title="图标" field="icon" width="60">
      <template #default="{ row }">
        <Icon :icon="row.icon"></Icon>
      </template>
    </VxeColumn>
    <VxeColumn title="创建时间" field="created_at"></VxeColumn>
    <VxeColumn title="更新时间" field="updated_at"></VxeColumn>
    <VxeColumn title="操作"></VxeColumn>
  </VxeTable>
  <VxePager background v-model:current-page="pageConfig.query.page" v-model:page-size="pageConfig.query.limit"
    align="right" @page-change="fetch(pageConfig.query)" :total="pageConfig.total"
    :layouts="['Home', 'PrevJump', 'PrevPage', 'JumpNumber', 'NextPage', 'NextJump', 'End', 'Sizes', 'FullJump', 'Total',]">
  </VxePager>
</template>
