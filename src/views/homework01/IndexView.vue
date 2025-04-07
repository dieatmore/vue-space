<script setup lang="ts">
import { defineAsyncComponent, ref, watch, type Component } from 'vue'
const components: { name: string; component: Component }[] = [
  {
    name: '添加用户',
    component: defineAsyncComponent(() => import('./AddUser.vue'))
  },
  {
    name: '移除用户',
    component: defineAsyncComponent(() => import('./DelUser.vue'))
  },
  {
    name: '更新用户',
    component: defineAsyncComponent(() => import('./UpdateUser.vue'))
  }
]

const indexR = ref(0)
const styleR = ref<{}[]>([])
const componentR = ref()
//watch实现
watch(indexR, () => {
  components.forEach((c, index) => {
    if (index == indexR.value) {
      styleR.value[index] = { color: 'red', 'text-decoration': 'underline' }
      componentR.value = components[indexR.value]?.component
    } else styleR.value[index] = { color: 'black', 'text-decoration': 'none' }
  })
})
</script>
<template>
  <div>
    <h1>Homework - 组件动态切换</h1>
    <p>无需路由的动态加载组件。切换组件时获取组件索引，更新加载组件以及功能描述文字样式。</p>
    <br />
    <br />
    <span
      v-for="(c, index) of components"
      :key="index"
      @click="indexR = index"
      :style="{
        ...styleR[index],
        'margin-right': '10px'
      }">
      {{ c.name }}
    </span>
    <p>
      <component :is="componentR" />
    </p>
  </div>
</template>
