<template>
  <section class="welcome">
    <h1>🎉 Welcome 컴포넌트 수정 완료!</h1>
    <p>이건 TheWelcome.vue에서 바꾼 내용이야.</p>

    <button @click="count++">클릭 수: {{ count }}</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>
.welcome {
  text-align: center;
  padding: 60px 0;
}

h1 {
  color: #42b883;
  font-size: 2rem;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #42b883;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #369c6e;
}
</style>
