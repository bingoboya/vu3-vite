<script setup>
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from 'components/HelloWorld.vue'
import MainContent from 'components/MainContent.vue'
import Clock from 'components/Clock.vue'
import logo from './assets/logo.png'
import gongan from './assets/gongan.png'
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
// const footerTxt = '© 2021 bingo <a href="https://www.baidu.com" target="_blank">wanliyang</a>'
const footerTxt = '© 2019 Zheng Jie <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>'
const caseNumber = '京ICP备2022003262号'
</script>

<template>
  <div class="bg" :style="'background-image:url('+ Background +');'">
    <!-- <img alt="Vue logo" :src="logo" /> -->
    <!-- <img alt="Vue logo" :src="Bg" /> -->
    <Clock />
    <!-- <div>
      <form action="https://www.baidu.com/s">
			  <input type="text" name="wd"/><input type="submit"  value="百度一下"/>
		  </form>
    </div> -->
    <div id="searchBar">
      <form action="https://www.baidu.com/s" style="height:100%;">
        <input type="text" id="inputSearch" name="word" size="30" placeholder="搜索" autocomplete="off">
		  </form>
    </div>
    <MainContent />
    <!-- <el-input></el-input> -->
    <!-- <HelloWorld ref="hw" msg="Hello Vue 3 + Vite" @fatherClick="fatherClick"/> -->
    <div style="position: fixed;
    bottom: 0;
    width: 100%;height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-family: Arial,serif;
    font-size: 12px;
    letter-spacing: 1px;">
      <!-- <span v-html="footerTxt" /> -->
      <!-- <span> ⋅ </span> -->
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo" target="_blank">
        <img :data-src="gongan" style="width: 20px;
    height: 20px;margin-right: 12px;" :src="gongan">
        <span class="ali-report-link-text" style="margin-right: 12px">京公网安备 11010602104093号</span>
      </a>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" style="cursor: pointer;
    color: inherit;
    text-decoration: none;">{{ caseNumber }}</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#inputSearch {
    outline: 0;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    // color: inherit;
    background-color: transparent;
    font-size: 14px;
    font-family: var(--fonts-light);
    text-align: center;
}
#searchBar {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 230px;
    max-width: 80%;
    height: 43px;
    border-radius: 30px;
    color: rgba(255,255,255,.8);
    background-color: rgba(255,255,255,.25);
    box-shadow: rgb(0 0 0 / 20%) 0 0 10px;
    // -webkit-backdrop-filter: blur(10px);
    // -webkit-filter: blur(10px);
    overflow: hidden;
    transition: color .25s,background-color .25s,box-shadow .25s,left .25s,opacity .25s,top .25s,width .25s;
}
.bg{
  color: v-bind(gre);
  height: 100%;
  background-position: center;
  background-size: cover;
  padding-top: 10vh;
}
</style>

