<script setup lang="ts">
import { computed, defineAsyncComponent, ref, type Component } from 'vue'
const names: string[] = ['添加用户', '移除用户', '更新用户']
const namesR = ref<string[]>(names)
//初始不加载，设为3
const indexR = ref(3)

//需要Promise对象
const components: Component[] = [
  defineAsyncComponent(() => import('./AddUser.vue')),
  defineAsyncComponent(() => import('./DelUser.vue')),
  defineAsyncComponent(() => import('./UpdateUser.vue'))
]

//声明不了样式，而是属性
// const styleR = computed (() => (index: number) => {
//   if(index == indexR.value) {
//     color: 'red';
//     text-decoration: 'undeline'
//   }
// })

const styleR = computed(() => (index: number) => {
  if (index == indexR.value) {
    return { color: 'red', line: 'underline' }
  }
  return { color: 'black', line: 'none' }
})
const componentsC = computed(() => components[indexR.value])
</script>
<template>
  <div>
    <h1>Homework - 组件动态切换</h1>
    <p>无需路由的动态加载组件。切换组件时获取组件索引，更新加载组件以及功能描述文字样式。</p>

    <!-- 没有数据不用v-model -->
    <!-- <span v-for="(c, index) of namesR" :key="index" v-model="indexR" :value="index"> -->
    <br />
    <br />
    <span
      v-for="(c, index) of namesR"
      :key="index"
      @click="indexR = index"
      :style="{
        color: styleR(index).color,
        'text-decoration': styleR(index).line,
        'margin-right': '10px'
      }">
      {{ c }}
    </span>
    <p>
      <component :is="componentsC" />
    </p>
  </div>
</template>
