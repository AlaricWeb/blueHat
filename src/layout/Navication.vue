<script setup lang="ts">
 import {Icon} from "@iconify/vue"
 
</script>
<template>
    <div class="navication">
        <Icon icon="mi:chevron-double-left"></Icon>       
        <Icon icon="mi:home"></Icon>
        <div class="content">
            <div>fsfsf</div>
        </div>
        <Icon icon="mi:chevron-double-right"></Icon>
    </div>
</template>
<style scoped lang="scss">
    .navication{
        display: flex;
        align-items: center;
        svg{
            font-size: 1.5em;
            flex-shrink: 0;
            padding:0 8px;
            background-color: #fff;
        }
        .content{
            flex:1;
            
        }
    }
</style>