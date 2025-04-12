<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import type { Teacher } from './type'
const loadingVue = defineAsyncComponent(() => import('@/components/LoadingVue.vue'))
const departmentVue = defineAsyncComponent(() => import('./DepartmentTeacherVue.vue'))
const selectTeacher = ref<Teacher>()
</script>
<template>
  <div>
    <div>
      <h1>Homework03 - 封装暴露组件数据对象</h1>
      <p>
        选择的教师：
        <span v-if="selectTeacher?.id">{{ selectTeacher?.name }}/{{ selectTeacher?.id }}</span>
      </p>
      <div>
        <suspense>
          <template #default>
            <departmentVue v-model:selectteacher="selectTeacher" />
          </template>
          <template #fallback>
            <loadingVue />
          </template>
        </suspense>
      </div>
    </div>
  </div>
</template>
