<script setup>
import MainHeader from '@/components/headers/MainHeader.vue'

</script>

<template>
  <MainHeader />
  <section>
  <h5>Come Back Soon!
  This Page is Under Construction.</h5>
  </section>
</template>

<style scoped>

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 33, 33, 1);
  width: 100vw;
  padding: 3rem 1.5rem;
  gap: 2rem;
}

h5 {
  background: var(--green);
  text-shadow: 1px 1px 1px #000;
  padding: 1rem;
}

</style>