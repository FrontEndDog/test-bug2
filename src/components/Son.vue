

<template>
  <div>
    <ElSelectV2 :options="data"></ElSelectV2>
  </div>
</template>

<script setup lang="ts">
import { ElSelectV2 } from "element-plus";
import { reactive } from "vue";
const data = reactive([]);
</script>

<style scoped></style>
