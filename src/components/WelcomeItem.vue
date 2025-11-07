<template>
  <div class="item">
    <h2>🚀 WelcomeItem 컴포넌트 수정 완료!</h2>
    <p>이건 이제 진짜 내 코드야 😎</p>

    <button @click="toggleMsg">
      {{ showMsg ? '숨기기' : '보이기' }}
    </button>

    <p v-if="showMsg" class="msg">✅ Vue 연결 정상 작동 중!</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMsg = ref(false)
const toggleMsg = () => {
  showMsg.value = !showMsg.value
}
</script>

<style scoped>
.item {
  text-align: center;
  border: 2px dashed #42b883;
  border-radius: 10px;
  padding: 30px;
  margin: 20px auto;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #369c6e;
}

.msg {
  margin-top: 15px;
  color: #2c3e50;
  font-weight: bold;
}
</style>
