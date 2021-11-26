<template>
  <div class="time-wrapper">
    <div class="time-text">
      {{nowTime}}
    </div>
    <!-- <div @click="getNowTime">dianji</div> -->
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {nowTime, getNowTime} from '../hooks/useNowTime.js'
getNowTime()
console.log('Component is mounted!')
</script>

<style lang="scss" scoped>
.time-wrapper{
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}
@keyframes delayedFadeIn {
    0% {
        opacity: 0
    }

    50% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

.time-text{
  color: #fff;
  // color: rgba(255,255,255,.6);
  font-size: 36px;
  font-weight: inherit;
  text-shadow: 0 0 20px rgb(0 0 0 / 35%);
  cursor: pointer;
  transition: .25s;
  line-height: 20px;
  // animation-name: delayedFadeIn;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-delay: 0s;
  transform: scale(1);
  transition: .25s ease-out;
}
.time-text:hover{
  transform: scale(1.5);
}

</style>