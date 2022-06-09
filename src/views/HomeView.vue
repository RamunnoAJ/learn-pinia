<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount(2)">--</button>
      <button @click="storeCounter.decreaseCount(1)">-</button>
      <button @click="storeCounter.increaseCount(1)">+</button>
      <button @click="storeCounter.increaseCount(2)">++</button>
    </div>
    <hr>
    <div>
      This counter is: {{ storeCounter.oddOrEven }}
    </div>
    <hr>
    <div>
      <h3>Edit counter:</h3>
      <input type="number" v-model="storeCounter.count">
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
import Counter from '../components/Counter.vue'

const storeCounter = useCounterStore()
</script>

<style>
.home {
  text-align: center;
}

.count {
  font-size: 60px;
  margin: 20px;
}

.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>