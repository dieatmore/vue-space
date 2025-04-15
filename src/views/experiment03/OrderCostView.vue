<script setup lang="ts">
import { computed } from 'vue'
import { getOrdersService } from './service'
const orders = getOrdersService()
const muchF = computed(() => {
  let total = 0
  orders.value.forEach(order => (total += order.quantity * (order.item.price ?? 0)))
  return total.toFixed(2)
})
</script>
<template>
  <div class="ordercost">
    <router-link to="/experiment03/orders">订单：{{ muchF }}</router-link>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
.ordercost {
  display: inline-block;
  border-radius: 8px;
  background-color: orange;
  padding: 3px;
  margin: 10px 30px;
}
</style>
