<template>
  <div class="app">
    <h1>🎨 디자인 패턴 선택기</h1>
    <p>아래 버튼 중 하나를 선택해보세요 👇</p>

    <div class="buttons">
      <button @click="current = 'builder'">Builder 패턴</button>
      <button @click="current = 'facade'">Facade 패턴</button>
      <button @click="current = 'chain'">Chain of Responsibility 패턴</button>
    </div>

    <div class="pattern-view">
      <Builder v-if="current === 'builder'" />
      <Facade v-if="current === 'facade'" />
      <ChainOfResponsibility v-if="current === 'chain'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 패턴별 컴포넌트 불러오기
import Builder from './patterns/Builder/Builder.vue'
import Facade from './patterns/Facade/Facade.vue'
import ChainOfResponsibility from './patterns/Chain_of_Responsibility/CoR.vue'

// 현재 선택된 패턴 상태
const current = ref('')
</script>

<style scoped>
.app {
  text-align: center;
  padding: 40px;
  font-family: 'Pretendard', 'Segoe UI', sans-serif;
}

h1 {
  color: #42b883;
  margin-bottom: 10px;
}

p {
  color: #555;
  margin-bottom: 25px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}

button:hover {
  background-color: #369c6e;
}

.pattern-view {
  margin-top: 20px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 20px;
  min-height: 200px;
}
</style>
