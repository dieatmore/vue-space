<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import type { Teacher } from './type'
const loadingVue = defineAsyncComponent(() => import('@/components/LoadingVue.vue'))
const departmentVue = defineAsyncComponent(() => import('./DepartmentTeacherVue.vue'))
const selected = ref<{ teacher: Teacher }>()
</script>
<template>
  <div>
    <div>
      <h1>Homework03 - 封装暴露组件数据对象</h1>
      <p>
        选择的教师：
        <span v-if="selected?.teacher.id">
          {{ selected?.teacher.name }}/{{ selected?.teacher.id }}
        </span>
      </p>
      <div>
        <suspense>
          <template #default>
            <departmentVue ref="selected" />
          </template>
          <template #fallback>
            <loadingVue />
          </template>
        </suspense>
      </div>
    </div>
  </div>
</template>
