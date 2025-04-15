<script setup lang="ts"></script>
<template>
  <div>
    <h1>
      <router-link to="/" style="text-decoration: none; display: block; margin: 20px 10px">
        主页
      </router-link>
    </h1>
    <br />
    <br />

    <h3>Homeworks</h3>
    <br />
    <ul>
      <li>
        <router-link to="/homework01">Homework01 - 组件动态切换</router-link>
      </li>
      <br />
      <li>
        <router-link to="/homework02">Homework02 - CheckBox双向互交绑定</router-link>
      </li>
      <br />
      <li>
        <router-link to="/homework03">Homework03 - 封装暴露组件数据对象</router-link>
      </li>
      <br />
      <li>
        <router-link to="/homework04">Homework04 - Slot插槽</router-link>
      </li>
    </ul>
    <br />
    <br />

    <h3>Experiments</h3>
    <br />
    <ul>
      <li>
        <router-link to="/experiment02">Experiment02 - Vue双向绑定实验</router-link>
      </li>
      <br />
      <li>
        <router-link to="/experiment03">Experiment03 - 单一数据源实验</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
a {
  text-decoration: none;
}
</style>
