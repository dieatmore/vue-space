<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Item, Shop } from './data/homework02'
import { getOrdersService, getShopService } from './service'
const shopR = ref<Shop>()
const params = useRoute().params
getShopService(params.sid as string).then(s => (shopR.value = s))
const orders = getOrdersService()
const add = (item: Item) => {
  const order = orders.value.find(order => order.item == item)
  if (order) order.quantity++
  else {
    orders.value.push({ quantity: 1, item: item })
  }
}
const remove = (item: Item) => {
  const order = orders.value.find(order => order.item == item)
  if (order && order.quantity > 0) order.quantity--
}
const thisCost = (item: Item) => {
  const order = orders.value.find(order => order.item == item)
  if (order) return order?.quantity
  else return 0
}
</script>
<template>
  <div>
    <h2 style="text-align: center">{{ shopR?.name }}</h2>
    <template v-for="(item, index) of shopR?.items" :key="index">
      <div class="card">
        <img :src="item.url" style="width: 200px; padding: 5px" alt="" />
        <div class="incard">
          {{ item.name }}
          <br />
          价格：{{ item.price }}
          <br />
          月销量：{{ item.sales }}
          <br />
          <button @click="remove(item)">-</button>
          {{ thisCost(item) }}
          <button @click="add(item)">+</button>
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped>
.card {
  display: block;
  border-radius: 15px;
  padding: 5px;
}
.incard {
  display: inline-block;
  vertical-align: top;
}
.card:hover {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
