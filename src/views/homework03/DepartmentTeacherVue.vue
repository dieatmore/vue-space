<script setup lang="ts">
import { ref, watch } from 'vue'
import { listDepartmentsService, listTeachersService } from './services'
import type { Department, Teacher } from './type'
const teacherR = ref<Teacher>()
defineExpose<{ teacher: ref<Teacher> }>({ teacher: teacherR })
const departments = await listDepartmentsService()
const departmentR = ref<Department>()
const teachersR = ref<Teacher[]>([])
const selected = ref(false)
watch(departmentR, async () => {
  selected.value = true
  //清除记录
  teacherR.value = {}
  teachersR.value = []
  departmentR.value?.id && (teachersR.value = await listTeachersService(departmentR.value.id))
})
</script>
<template>
  <div>
    <select style="margin-right: 10px" v-model="departmentR">
      <option></option>
      <option v-for="(department, index) of departments" :key="index" :value="department">
        {{ department.name }}
      </option>
    </select>
    <select v-if="selected" v-model="teacherR">
      <option v-for="(teacher, index) of teachersR" :key="index" :value="teacher">
        {{ teacher.name }}
      </option>
    </select>
  </div>
</template>
