<script setup>
import { ref } from 'vue';
import HeroHeader from '@/components/headers/HeroHeader.vue';
import ProgramSection from '@/components/ProgramSection.vue';
import HeadCoach from '@/components/HeadCoach.vue';
import MainCarousel from '@/components/MainCarousel.vue';
import ImageGallery from '@/components/ImageGallery.vue';
import MainContact from '@/components/MainContact.vue';
import MainSignUp from '@/components/MainSignUp.vue';
// import image from '@/assets/placeholder-bg.jpg'

const items = ref([
    { title: 'Train Your Mind and Body for Basketball Success' },
    { title: 'Training Programs', description: 'Description 2' },
    { title: 'About Us', description: 'Description 3' }
    ])

const image = ref("url('@/assets/placeholder-bg.jpg')")


</script>

<template>
    <HeroHeader :item = "items[0]" :backGroundImage="image" :showButton=true />
    <ProgramSection />
    <HeadCoach />
    <MainCarousel />
    <ImageGallery />
    <MainContact />
    <MainSignUp />
</template>

<style scoped>
@media (min-width: 768px) {

    section {
        padding: 3rem 7.5rem;
    }
}
</style>