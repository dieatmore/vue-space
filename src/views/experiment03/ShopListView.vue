<script setup lang="ts">
import { ref } from 'vue'
import type { Shop } from './data/homework02'
import { listShopsService } from './service'
const shoplistR = ref<Shop[]>([])
listShopsService().then(s => (shoplistR.value = s.value))
</script>
<template>
  <div>
    <h2>附近的美食</h2>
    <br />
    <br />
    <div>
      <template v-for="(shop, index) of shoplistR" :key="index">
        <router-link :to="`/experiment03/shop/${shop.id}`" class="shoplist">
          <div class="card">
            <h3>{{ shop.name }}</h3>
            <br />
            评分：{{ shop.point }}
          </div>
          <br />
        </router-link>
      </template>
    </div>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
}
.shoplist {
  color: #000;
  text-decoration: none;
}
.card {
  border-radius: 15px;
  padding: 5px;
}
.card:hover {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
