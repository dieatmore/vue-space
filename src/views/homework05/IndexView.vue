<script setup lang="ts">
import { shallowRef } from 'vue'
import { createLoading } from './loading'
import { listCoursesService } from './service'
import type { Course } from './type'
const coursesR = shallowRef<Course[]>([])
const listCoursesF = () => {
  const loading = createLoading()
  listCoursesService()
    .then(courses => (coursesR.value = courses))
    .finally(() => loading.close())
}
</script>
<template>
  <div>
    <h1>Homework - 函数式全屏Loading遮罩组件</h1>
    <div>
      <button @click="listCoursesF">异步请求数据，4s响应后自动关闭全屏Loading遮罩</button>
      <ul>
        <li v-for="(c, index) of coursesR" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
