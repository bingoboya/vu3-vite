<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
const str1 = ref('asasd1')
const aa = 'sss'

const str2 = ref('asasd2')


const emit = defineEmits(['fatherClick'])

const sonClick = () => {
  console.log(222);
  emit('fatherClick', 333)
}

const testClick = () => {
  console.log('testClick', str1.value, aa);
}


const count = ref(0)
defineExpose({
  str1, str2, testClick
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="http://222.128.19.51:38081/" target="_blank">wly</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <button @click="sonClick">sonClick</button>
  <el-button>ele-button</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
