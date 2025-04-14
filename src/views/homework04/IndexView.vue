<script setup lang="ts">
import { ref } from 'vue'
import { listCourses } from '../experiment01/services'
import CourseTableView from './CourseTableView.vue'
import type { Course } from './type'
const courses = listCourses()
const selectCourseR = ref<Course>()
</script>
<template>
  <div>
    <h1>Homework04 - Slot插槽</h1>
    <p>
      选择的课程：
      <span style="color: red">{{ selectCourseR?.name }}</span>
    </p>
    <CourseTableView :courses="courses">
      <template #action="prop">
        <button @click="selectCourseR = prop.course">EDIT</button>
      </template>
    </CourseTableView>
  </div>
</template>
