<script setup lang="ts">
import { ref, watch } from 'vue'
import { listCourses, type Course } from './services'
const coursesR = ref(listCourses().sort((a, b) => a.term - b.term))
const selectCoursesR = ref<Course[]>([])
const pointTarget = 17.5
const pointR = ref(0)
watch(selectCoursesR, () => {
  //选择课程更新后，学分从零开始计算，选择的课程重新排序
  pointR.value = 0
  for (const c of selectCoursesR.value) {
    pointR.value += c.point
  }
  selectCoursesR.value.sort((a, b) => a.term - b.term)
})
</script>
<template>
  <div id="router">
    <h1>实验二 Vue双向绑定实验</h1>
    <div id="point">
      <span :style="{ color: pointR <= pointTarget ? 'red' : 'green' }">
        {{ pointR }}
      </span>
      /{{ pointTarget }}学分
    </div>
    <div id="courses">
      <template v-for="(c, index) of coursesR" :key="index">
        <label>
          <input type="checkbox" v-model="selectCoursesR" :value="c" />
          {{ c.name }}-{{ c.point }}({{ c.term }})
          <br />
        </label>
      </template>
    </div>
    <div id="courses2">
      <template v-for="(c, index) of selectCoursesR" :key="index">
        {{ c.name }}-{{ c.point }}({{ c.term }})
        <br />
      </template>
    </div>
  </div>
</template>
<style scoped>
#courses,
#courses2 {
  display: inline-block;
  border: 1px solid red;
  vertical-align: top;
}
</style>
