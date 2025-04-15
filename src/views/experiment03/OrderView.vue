<script setup lang="ts">
import { ref } from 'vue'
import type { Order } from './data/homework02'
import { getOrdersService } from './service'
const ordersHistory = getOrdersService()
const orders = ref<Order[]>([])
ordersHistory.value.forEach(s => s.quantity > 0 && orders.value.push(s))
</script>
<template>
  <div v-for="(order, index) of orders" :key="index">
    {{ order.item.name }}/{{ order.quantity }}
  </div>
</template>
