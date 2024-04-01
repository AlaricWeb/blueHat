<script setup lang="ts">
import requset from "@/utils/request"
import { onMounted } from 'vue';
import NavMenu from "@/layout/NavMenu.vue"

onMounted(() => {
})
</script>

<template>
    <ElContainer>
        <ElAside>fsfsdf</ElAside>
        <ElContainer>
            <ElHeader>
                <NavMenu />
            </ElHeader>
            <ElMain>
                <RouterView></RouterView>
            </ElMain>
        </ElContainer>
    </ElContainer>
</template>
