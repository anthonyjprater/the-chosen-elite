<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import MainHeader from './components/headers/MainHeader.vue'
import MainFooter from './components/footers/MainFooter.vue'
// import MainHero from './components/heros/MainHero.vue';
// import ProgramSection from './components/ProgramSection.vue';
// import HeadCoach from './components/HeadCoach.vue';
// import MainCarousel from './components/MainCarousel.vue';
// import ImageGallery from './components/ImageGallery.vue';
// import MainContact from './components/MainContact.vue';
// import MainSignUp from './components/MainSignUp.vue';
// import TrainingPrograms from './views/TrainingPrograms.vue';
// import ApplyForm from './views/ApplyForm.vue';
// import AboutUs from './views/AboutUs.vue';
// import GalleryView from './views/GalleryView.vue';
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  title: 'The Chosen Elite Training Academy - Official Web Site - Home',
  description: 'Elevate your basketball skills at The Chosen Elite Academy. Expert training for youth and teens. Group, individual, and team programs available.',
  ogDescription: 'The Chosen Elite Academy: Where basketball dreams take flight. We offer expert training programs for youth and teens competing in AAU, high school, and club basketball. Our group and individual sessions, along with team try-outs, are designed to elevate your game. We believe every player can improve with purposeful training and practice. Join us and unlock your full potential on the court!',
  ogTitle: 'The Chosen Elite Academy | Elevate Your Basketball Game',
  ogImage: 'https://www.teamchosenelite.com/elite-logo.svg',
  twitterCard: 'summary_large_image',
  applicationName:'The Chosen Elite Training Academy - Official Web Site - Home',
  creator:'GameFaceLabs',
  robots: 'all',
  canonical: 'https://www.teamchosenelite.com',
  ogUrl:'https://www.teamchosenelite.com',
  ogType:'website',
  ogSiteName:'The Chosen Elite Acedemy',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes'
})



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
