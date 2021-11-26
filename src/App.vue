<script setup>
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from 'components/HelloWorld.vue'
import MainContent from 'components/MainContent.vue'
import Clock from 'components/Clock.vue'
import logo from './assets/logo.png'
import Background from './assets/bg.jpg'
const fatherClick = (val) => {
  console.log('fatherClick', val);
  // str1, str2, sonClick
  const {str1, str2, testClick} = hw.value
  console.log(str1, str2);
  testClick()
}
const hw = ref(null)
const gre = ref('green')


</script>

<template>
  <div class="bg" :style="'background-image:url('+ Background +');'">
    <!-- <img alt="Vue logo" :src="logo" /> -->
    <!-- <img alt="Vue logo" :src="Bg" /> -->
    <Clock />
    <MainContent />
    <!-- <el-input></el-input> -->
    <!-- <HelloWorld ref="hw" msg="Hello Vue 3 + Vite" @fatherClick="fatherClick"/> -->
  </div>
</template>
<style lang="scss" scoped>
.bg{
  color: v-bind(gre);
  height: 100%;
  background-position: center;
  background-size: cover;
  padding-top: 10vh;
}
</style>

