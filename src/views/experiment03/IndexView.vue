<script setup lang="ts">
import { RouterView } from 'vue-router'
import OrderCostView from './OrderCostView.vue'
</script>
<template>
  <div>
    <h1>实验三 单一数据源实验</h1>
    <div class="sidebar">
      <router-link to="/experiment03/shoplist">美食</router-link>
      |
      <router-link to="/experiment03/location">本地</router-link>
      |
      <router-link to="/experiment03/run">跑腿</router-link>
    </div>
    <OrderCostView />
    <router-view />
  </div>
</template>
<style scoped>
.sidebar {
  margin-left: 30px;
}
a {
  text-decoration: none;
}
</style>
