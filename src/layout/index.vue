<script setup lang="ts">
import requset from "@/utils/request"
const userinfo = async () => {
    const user = requset({ url: "/user", method: "get" })
    console.log(user);
}
import { onMounted } from 'vue';
onMounted(() => {
    userinfo();
})
</script>
<template>
    <ElContainer>
        <ElAside>
            afsf
        </ElAside>
        <ElContainer>
            <ElMain>main layout </ElMain>
        </ElContainer>
    </ElContainer>
</template>
