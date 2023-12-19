<script setup>
import { defineEmits } from 'vue';


const emits = defineEmits(['click']);

const handleClick = () => {
  emits('click');
};
</script>

<template>
    <button class="review-btn" @click="handleClick">Leave a review</button>
</template>

<style scoped>
button.review-btn {
  background-color: rgba(55, 255, 55, 0.87);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  color: var(--white);
  font-weight: bold;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  /* letter-spacing: 1px; */
  z-index: 2;
}

button.review-btn:hover,
button.review-btn:focus-visible {
  scale: 0.95;
}

button.review-btn:active {
  scale: 0.9;
  color: rgba(0, 0, 0, 0.5);
  text-shadow: none;
}

@media (min-width: 768px) {
  button.review-btn {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>