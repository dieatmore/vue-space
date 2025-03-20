<script setup lang="ts"></script>
<template>
  <div id="sidebar">
    <h3>Examples</h3>
    <ul>
      <li>
        <router-link to="/example01">Welcome</router-link>
      </li>
    </ul>
    <h3>Experiments</h3>
    <ul>
      <li>
        <router-link to="/experiment02">Experiment02 - Vue双向绑定实验</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
</style>
