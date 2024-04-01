<script setup lang="ts">
import request from "@/utils/request"
import { onMounted } from "vue"
const GetMenu = async () => {
    const menu = await request.get('/menu');
}
onMounted(() => {
    GetMenu();
})
</script>

<template>
    菜单
</template>
