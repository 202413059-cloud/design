<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import WelcomeItem from './components/WelcomeItem.vue'
</script>

<template>
  <main style="text-align: center; padding: 50px">
    <h1>🌿 Design Patterns 테스트 화면</h1>
    <HelloWorld msg="컴포넌트 연결 확인 중" />
    <TheWelcome />
    <WelcomeItem />
  </main>
</template>

<style scoped>
h1 {
  color: #42b883;
}
</style>
