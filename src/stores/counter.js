import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  actions: {
    increaseCount(amount) {
      this.count += amount;
    },
    decreaseCount(amount) {
      this.count -= amount;
    },
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return 'even';
      return 'odd';
    },
  },
});
