<script setup lang="ts">
import { onMounted } from 'vue';
import NavMenu from "@/layout/NavMenu.vue"
import Navication from "@/layout/Navication.vue"
import { Icon } from "@iconify/vue"
import useUserStore from "@/store/user"
const userStore = useUserStore();
onMounted(() => {

})
</script>
<template>
    <ElContainer>
        <ElAside width="auto">
            <NavMenu v-model="userStore.TreeList" />
        </ElAside>
        <ElContainer>
            <ElHeader class="layout-header">
                <div class="header">
                    <div class="left">
                        <Icon icon="mi:arrow-up"></Icon>
                    </div>
                    <div class="right">
                        <ElAvatar src="" :size="35"></ElAvatar>
                    </div>
                </div>
                <Navication class="tabs"></Navication>
            </ElHeader>
            <ElMain class="layout-main">
                <RouterView></RouterView>
            </ElMain>
        </ElContainer>
    </ElContainer>
</template>
<style scoped lang="scss">
.layout-header {
    padding: 0;
    height: auto;

    .header {
        height: 40px;
        display: flex;
        align-items: center;

        .left {
            padding-left: 10px;
            font-size: 1.5em;

            svg {
                color: #888;
                cursor: pointer;
            }
        }

        .right {
            flex-grow: 1; // 定义元素剩余空间所占比例  默认0 即不放大
            flex-shrink: 0; //定义子元素在空间不足时所占比例。默认为1，即缩小
            flex-basis: auto;
            display: flex;
            padding-right: 10px;
            flex-direction: row-reverse;
        }

    }

    .tabs {
        height: 35px;
        border-top: 1px solid #e0e8f6;

    }
}

.layout-main {
    background-color: #e0e8f6;
    padding: 10px;
    box-sizing: border-box;
}
</style>