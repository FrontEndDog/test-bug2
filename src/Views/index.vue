<template>
  <div style="height: 100px">
    <Son v-if="show"></Son>
    <div v-loading="loading">12348</div>
  </div>

  <button @click="test">显示</button>
  <button @click="test2">隐藏</button>
  <button @click="test3">跳转</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Son from "../components/Son.vue";

const router = useRouter();

const show = ref(true);
const loading = ref(true);

const test = () => {
  show.value = true;
  loading.value = true;
};

const test2 = () => {
  show.value = false;
  loading.value = false;
};

const test3 = () => {
  router.push("/index2");
};
</script>

<style scoped></style>
