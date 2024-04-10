<script setup>
import MainHeader from '@/components/headers/MainHeader.vue'
import NewsFeed from '@/components/NewsFeed.vue';

</script>

<template>
  <MainHeader />
  <section>
    <h1>News</h1>
    <h5>Come Back Soon!
    This Page is Under Construction.</h5>
    <NewsFeed />
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

h1 {
  font-size: 1.5rem;
  text-align: left;
  text-wrap: balance;
}

h5 {
  background: var(--green);
  text-shadow: 1px 1px 1px #000;
  padding: 1rem;
}

</style>