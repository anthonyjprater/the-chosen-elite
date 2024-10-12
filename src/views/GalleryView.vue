<script setup>
import MainHeader from '@/components/headers/MainHeader.vue';
import PhotoGallery from '@/components/PhotoGallery.vue';

</script>

<template>
  <MainHeader />
  <section>
    <PhotoGallery />
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