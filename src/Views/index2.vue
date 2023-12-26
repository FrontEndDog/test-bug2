<template>
  <button @click="router.push('/')">返回</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="scss" scoped></style>
