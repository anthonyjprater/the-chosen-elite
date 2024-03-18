<script setup>
import MainHeader from '@/components/headers/MainHeader.vue'
import NewsFeed from '@/components/NewsFeed.vue';

</script>

<template>
  <MainHeader />
  <section>
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

</style>