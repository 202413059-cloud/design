<template>
  <div class="container">
    <h2>Chain of Responsibility: 저녁 메뉴 추천기 🍽️</h2>

    <select v-model="condition">
      <option disabled value="">조건을 선택하세요</option>
      <option>한식</option>
      <option>매운</option>
      <option>다이어트</option>
      <option>배달</option>
      <option>기타</option>
    </select>

    <button @click="getMenu">추천받기</button>

    <div v-if="menu" class="menu-box">
      <p>{{ menu }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  KoreanHandler,
  SpicyHandler,
  DietHandler,
  DeliveryHandler,
  DefaultHandler
} from './CoR'  

const condition = ref('')
const menu = ref('')

function getMenu() {
  const korean = new KoreanHandler()
  const spicy = new SpicyHandler()
  const diet = new DietHandler()
  const delivery = new DeliveryHandler()
  const def = new DefaultHandler()

  korean.setNext(spicy).setNext(diet).setNext(delivery).setNext(def)
  menu.value = korean.recommend(condition.value)
}
</script>

<style scoped>
/* 생략 */
</style>
