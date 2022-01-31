<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="text-3xl font-bold underline dark:text-white">Hello world!</h1>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Test :user="user" @someChange="logChange($event)"/>
  </div>
</template>

<script lang="ts" setup>
import Test from '@/components/Test.vue'
import HelloWorld from '@/components/HelloWorld.vue'
const user = {
  id: 'some id'
}

function logChange (changeValue: number) {
  console.log(changeValue)
}
</script>
