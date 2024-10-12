import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useReviewStore = defineStore('review', () => {
  const name = ref('')
  const rating = ref(0)
  const review = ref('')
  function getRating(newValue) {
    rating.value = newValue
  }

  return { name, review, rating, getRating }
})
