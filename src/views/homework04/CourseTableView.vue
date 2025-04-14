<script setup lang="ts">
import type { Course } from './type'
const props = defineProps<{ courses: Course[] }>()
</script>
<template>
  <div>
    <table>
      <tr>
        <th>#</th>
        <th>课程名称</th>
        <th>操作</th>
      </tr>
      <tr v-for="(c, index) of props.courses" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td><slot name="action" :course="c"></slot></td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
table {
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #000;
}
</style>
