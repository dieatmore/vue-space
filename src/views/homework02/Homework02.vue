<script setup lang="ts">
import { ref } from 'vue'
const work: number[] = [1, 2, 3, 4, 5]
const holiday: number[] = [6, 7]
const select5 = ref(false)
const select2 = ref(false)
const dates: number[] = [1, 2, 3, 4, 5, 6, 7]
const datesR = ref<number[]>([])
const update5 = () => {
  const n = [1, 2, 3, 4, 5]
  if (select5.value) {
    datesR.value.push(...n),
      //数据去重
      (datesR.value = [...new Set(datesR.value)]),
      //数据排序
      (datesR.value = datesR.value.sort((a, b) => a - b)),
      console.log(datesR.value)
  } else {
    datesR.value.splice(0, 5), console.log(datesR.value)
  }
}
const update2 = () => {
  const n = [6, 7]
  if (select2.value) {
    datesR.value.push(...n),
      //数据去重
      (datesR.value = [...new Set(datesR.value)]),
      //数据排序
      (datesR.value = datesR.value.sort((a, b) => a - b)),
      console.log(datesR.value)
  } else {
    datesR.value.pop(), datesR.value.pop(), console.log(datesR.value)
  }
}
const dateC = () => {
  //选择周一至周五
  if (select5.value == false && work.every(day => datesR.value.includes(day))) {
    select5.value = true
  }
  //选择周六周日
  if (select2.value == false && holiday.every(day => datesR.value.includes(day))) {
    select2.value = true
  }
  //取消选择周一至周五
  if (select5.value == true && !work.every(day => datesR.value.includes(day))) {
    select5.value = false
  }
  //取消选择周六周日
  if (select2.value == true && !holiday.every(day => datesR.value.includes(day))) {
    select2.value = false
  }
}
// const all5R = ref<number[]>([])
// const all2R = ref<number[]>([])
// const choose5 = computed(() => all5R.value.length == work.length)
// const choose2 = computed(() => all2R.value.length == holiday.length)
</script>
<template>
  <div>
    <p>
      <label>
        <!-- 触发click事件没有触发v-model -->
        <input type="checkbox" v-model="select5" @change="update5" />
        工作日 |
      </label>
      <label>
        <input type="checkbox" v-model="select2" @change="update2" />
        周末 |
      </label>
    </p>
    <template v-for="(day, index) of dates" :key="index">
      <label>
        <input type="checkbox" :value="day" v-model="datesR" @change="dateC" />
        星期 {{ day }} |
      </label>
    </template>

    <!-- v-model和:checkbox冲突
    <p>
      <input type="checkbox" :checked="choose5" v-model="select5" />
      工作日 |
      <input type="checkbox" :checked="choose2" v-model="select2" />
      周末
    </p>
    <template v-for="(a, index) in work" :key="index">
      <input type="checkbox" :value="a" v-model="all5R" :checked="select5" />
      {{ a }} |
    </template>
    <template v-for="(b, index) in holiday" :key="index">
      <input type="checkbox" :value="b" v-model="all2R" :checked="select2" />
      {{ b }} |
    </template> -->
  </div>
</template>
