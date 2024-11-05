<template>
  <div class="payment-component">
    <h2>Choose Your Session Package</h2>
    <div class="upcoming-week">
      <h3>Upcoming Week:</h3>
      <p>
        <span>{{ weekRange.start }}</span> - <span>{{ weekRange.end }}</span>
      </p>
    </div>
    <div class="session-options">
      <button
        v-for="option in sessionOptions"
        :key="option.sessions"
        class="session-button"
        :class="{ 'selected': selectedOption?.sessions === option.sessions }"
        @click="selectOption(option)"
      >
        {{ option.sessions }} {{ option.sessions === 1 ? 'Session' : 'Sessions' }}
        <br>
        ${{ option.price }}
      </button>
    </div>
    <div v-if="selectedOption" class="payment-actions">
      <div class="selected-option">
        Selected: {{ selectedOption.sessions }} 
        {{ selectedOption.sessions === 1 ? 'Session' : 'Sessions' }} 
        for ${{ selectedOption.price }}
      </div>
      <a 
        :href="paymentLink"
        class="payment-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Proceed to Payment
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { termsAccepted } = storeToRefs(userStore)

const PAYMENT_LINKS = {
  1: 'https://book.stripe.com/dR615sd9018A3IY4gg',
  10: 'https://book.stripe.com/28o15s6KCcRi2EUcMP',
  20: 'https://book.stripe.com/eVaeWi5Gy8B2djyeUW',
  default: 'https://teamchosenelite.com/signup'
}

const sessionOptions = [
  { sessions: 1, price: 20 },
  { sessions: 10, price: 150 },
  { sessions: 20, price: 300 },
]

const selectedOption = ref(null)

const weekRange = computed(() => {
  const today = new Date()
  const currentDay = today.getDay()
  const daysUntilSunday = currentDay === 0 ? 0 : 7 - currentDay
  
  const sunday = new Date(today)
  sunday.setDate(today.getDate() + daysUntilSunday)
  
  const saturday = new Date(sunday)
  saturday.setDate(sunday.getDate() + 6)
  
  return {
    start: sunday.toDateString(),
    end: saturday.toDateString()
  }
})

const paymentLink = computed(() => 
  PAYMENT_LINKS[selectedOption.value?.sessions] || PAYMENT_LINKS.default
)

function selectOption(option) {
  selectedOption.value = option
  userStore.setTermsAccepted(!termsAccepted.value)
  localStorage.setItem('termsAccepted', termsAccepted.value.toString())
}
</script>

<style scoped>
.payment-component {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 600px;
  margin: 0 auto;
}

.session-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 20px;
}

.session-button {
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.session-button:hover {
  background-color: var(--green);
  text-shadow: 
    1px 1px 1px rgba(0, 0, 0, 0.8),
    2px 2px 2px rgba(0, 0, 0, 0.8),
    3px 3px 3px rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
  filter: drop-shadow(0px 0px 2px rgb(7, 7, 7));
}

.session-button:active {
  transform: scale(0.75);
}

.session-button.selected {
  background-color: #45a049;
  box-shadow: 0 0 10px rgba(69, 160, 73, 0.5);
  transform: scale(1.15);
}

.payment-actions {
  margin-top: 20px;
}

.selected-option {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8);
  margin-bottom: 20px;
  text-align: center;
}

.payment-button {
  display: block;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #008CBA;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
}

.payment-button:hover {
  background-color: white;
  color: #008CBA;
  outline: 3px solid #008CBA;
  font-weight: bold;
}

.upcoming-week p {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.8);
}
</style>