<script setup lang="ts">
import requset from "@/utils/request"
import { onMounted } from 'vue';
const userinfo = async () => {
    const user = await requset({ url: "/user", method: "get" })
    console.log(user);
}

onMounted(() => {
    userinfo();
})
</script>
<template>
</template>
