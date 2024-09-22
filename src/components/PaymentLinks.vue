<template>
    <div class="payment-component">
      <h2>Choose Your Session Package</h2>
      <div class="upcoming-week">
        <h3>Upcoming Week:</h3>
        <p>
            <span>{{ upcomingWeek[0].toDateString() }}</span> - <span>{{ upcomingWeek[6].toDateString() }}</span>
        </p>
      </div>
      <div class="session-options">
        <button
          v-for="option in sessionOptions"
          :key="option.sessions"
          class="session-button"
          :class="{ 'selected': selectedOption === option }"
          @click="selectOption(option)"
        >
          {{ option.sessions }} {{ option.sessions === 1 ? 'Session' : 'Sessions' }}
          <br>
          ${{ option.price }}
        </button>
      </div>
      <p class="selected-option" v-if="selectedOption">
        Selected: {{ selectedOption.sessions }} {{ selectedOption.sessions === 1 ? 'Session' : 'Sessions' }} for ${{ selectedOption.price }}
      </p>
      <button v-if="selectedOption" class="payment-button" @click="proceedToPayment">
        <a :href="`${ proceedToPayment() }`">Proceed to Payment</a>
      </button>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  
  // Computed property for upcoming week dates
  const upcomingWeek = computed(() => {
    const today = new Date();
    const currentDay = today.getDay();
    const daysUntilSunday = currentDay === 0 ? 0 : 7 - currentDay;
    
    const sunday = new Date(today);
    sunday.setDate(today.getDate() + daysUntilSunday);
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(sunday);
      date.setDate(sunday.getDate() + i);
      weekDates.push(date);
    }
    
    return weekDates;
  });
  
  // Computed property for session options and prices
  const sessionOptions = computed(() => [
    { sessions: 1, price: 20 },
    { sessions: 10, price: 150 },
    { sessions: 20, price: 300 },
  ]);
  
  const selectedOption = ref(null);
  
  function selectOption(option) {
    selectedOption.value = option;
  }
  
  function proceedToPayment() {
    // Here you would implement the logic to redirect to the payment form
    // For now, we'll just log the selected option
    // console.log('Proceeding to payment for:', selectedOption.value.sessions,' sessions');

    switch (selectedOption.value.sessions) {
    case 1:
    //   return "Perfect for a quick tune-up! This single session will give you a taste of what we offer.";
        return 'https://book.stripe.com/dR615sd9018A3IY4gg';
    case 10:
        return 'https://book.stripe.com/28o15s6KCcRi2EUcMP';
    //   return "Great choice! Our 10-session package is ideal for those committed to steady progress.";
    case 20:
        return 'https://book.stripe.com/eVaeWi5Gy8B2djyeUW';
    //   return "Excellent decision! With 20 sessions, you're on your way to achieving significant results.";
    default:
        return 'https://teamchosenelite.com/signup';
    //   return "Please select a session package to see more information.";
  }
    // You could use a switch statement here to redirect to different payment forms
    // based on the number of sessions selected
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
  
  
  span {
    margin-bottom: 5px;
  }
  
  .session-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    margin-top: 20px;
  }
  
  .session-button {
    flex: 1 1 30%;
    min-width: 120px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  
  .session-button:hover {
    background-color: var(--green);
    text-shadow: 
    1px 1px 1px rgba(0, 0, 0, 0.8),
    2px 2px 2px rgba(0, 0, 0, 0.8),
    3px 3px 3px rgba(0, 0, 0, 0.8)
    ;
    scale: 1.1;
    filter: drop-shadow(0px 0px 2px rgb(7, 7, 7));
  }

  .session-button:active {
    scale: 0.75;
  }

  .session-button.selected {
  background-color: #45a049;
  box-shadow: 0 0 10px rgba(69, 160, 73, 0.5);
  transform: scale(1.15);
}

  .selected-option {
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8)
    ;
    margin-top: 20px;
  }

  
  
  .payment-button {
    display: block;
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background-color: #008CBA;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .payment-button:hover {
    background-color: #007B9A;
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
  
  @media (max-width: 600px) {
    .session-button {
      flex: 1 1 100%;
    }
  }
  </style>