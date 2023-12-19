<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import MainHeader from './components/headers/MainHeader.vue'
import MainFooter from './components/footers/MainFooter.vue'
import MainHero from './components/heros/MainHero.vue';
import ProgramSection from './components/ProgramSection.vue';
import HeadCoach from './components/HeadCoach.vue';
import MainCarousel from './components/MainCarousel.vue';
import ImageGallery from './components/ImageGallery.vue';
import MainContact from './components/MainContact.vue';
import MainSignUp from './components/MainSignUp.vue';
import TrainingPrograms from './views/TrainingPrograms.vue';
import ApplyForm from './views/ApplyForm.vue';
import AboutUs from './views/AboutUs.vue';
import GalleryView from './views/GalleryView.vue';

</script>

<template>
  <!-- <MainHeader /> -->
  <main>
    <RouterView />
    <!-- <AboutUs /> -->
    <!-- <applyForm /> -->
    <!-- <TrainingPrograms /> -->
    <!-- <MainHero />
    <ProgramSection />
    <HeadCoach />
    <MainCarousel />
    <ImageGallery />
    <MainContact />
    <MainSignUp /> -->
  </main>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <MainFooter />
</template>

<style scoped>
  main {
    grid-area: main;
  }
</style>
