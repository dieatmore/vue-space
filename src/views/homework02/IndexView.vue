<script setup lang="ts">
import { ref } from 'vue'
const work = [1, 2, 3, 4, 5]
const holiday = [6, 7]
const workCheckR = ref(false)
const holidayCheckR = ref(false)
const dates = [1, 2, 3, 4, 5, 6, 7]
const datesR = ref<number[]>([])

const quickChangeDateF = () => {
  //覆盖数据
  const data = []
  workCheckR.value && data.push(...work)
  holidayCheckR.value && data.push(...holiday)
  datesR.value = data
}

const changeDateF = () => {
  workCheckR.value = work.every(day => datesR.value.includes(day))
  holidayCheckR.value = holiday.every(day => datesR.value.includes(day))
}
</script>
<template>
  <div>
    <p>
      <label>
        <!-- 触发click事件没有触发v-model -->
        <input type="checkbox" v-model="workCheckR" @change="quickChangeDateF" />
        工作日 |
      </label>
      <label>
        <input type="checkbox" v-model="holidayCheckR" @change="quickChangeDateF" />
        周末 |
      </label>
    </p>
    <template v-for="(day, index) of dates" :key="index">
      <label>
        <input type="checkbox" :value="day" v-model="datesR" @change="changeDateF" />
        星期 {{ day }} |
      </label>
    </template>
  </div>
</template>
