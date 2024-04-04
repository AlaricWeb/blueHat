<script setup lang="ts">
  import {onMounted} from "vue"
  import useUserStore from "@/store/user"
  const userStore = useUserStore();
  onMounted(()=>{
    console.log(userStore.TreeList);
  })
</script>
<template>
    <div>
      404 NotFound 
    </div>
</template>

