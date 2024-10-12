<script setup>
import { ref } from 'vue'
import MainHeader from '../headers/MainHeader.vue'

const transparent = ref(true)

</script>

<template>
  <div class="main-hero">
    <MainHeader :isTransparent="transparent"/>
    <h2 class="hero-headline">Train Your Mind and Body for Basketball Success</h2>
    <button class="sign-up">Sign up for training</button>
  </div>
</template>

<style scoped>
.main-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100vw;
  background: center/ cover no-repeat url("/placeholder-bg.jpg");
  padding: 4rem 3rem;
  position: relative;
}

.main-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))
}

h2.hero-headline {
  font-size: 1.5rem;
  color: var(--white);
  width: max(30%,200px);
  text-wrap: balance;
  line-height: 1.3;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  z-index: 2;
}

button.sign-up {
  background-color: rgba(55, 255, 55, 0.87);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  color: var(--white);
  font-weight: bold;
  letter-spacing: 1px;
  z-index: 2;
}

button.sign-up:focus-visible,
button.sign-up:hover {
    scale: 0.95;
    color: rgba(0, 0, 0, 0.5);
    text-shadow: none;
}

.main-hero > header {
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 3;
}

.main-nav ul {
  background-color: none;
}

@media (min-width: 768px) {
  .main-hero {
    height: 55vh;
    gap: 5rem;
    padding: 5rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  button.sign-up {
    padding: 1em 1.5em;
  }

}
</style>
