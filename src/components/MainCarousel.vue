<script setup>
import { ref } from "vue"
import CarouselItem from './CarouselItem.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = ref([
  { id: '1', title: 'Elevate Your Game with Our Elite Basketball Training Academy', content: "Discover your basketball potential with our premier training academy, where expert coaches, state-of-the-art facilities, and personalized programs await you. Develop agility, technique, and strategic prowess to dominate the court and become the player you've always aspired to be." },
  { id: '2', title: 'Transform Your Skills at Our Youth Basketball Training Academy', content: "Calling all young ballers! Join our youth training academy and boost your confidence with engaging sessions that focus on skill development, teamwork, and sportsmanship. Become a standout player and be part of our supportive community of aspiring athletes." },
  { id: '3', title: 'Score Big with Our Specialized Basketball Shooting Academy', content: "Unleash your shooting accuracy and consistency with our specialized shooting academy. Our expert coaches will analyze your technique and provide targeted drills, enabling you to become a clutch shooter and score big from beyond the arc. Don't miss this chance to become a scoring machine - enroll now!" }
])

const breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 3,
        wrapAround: "true",
        transition: "200",
        snapAlign: "end"
      }
    }

</script>

<template>
    <section class="info">
        <h2>Chosen Elite Academy</h2> 
        <span class="pitch">is the best choice for you</span>
        <div class="carousel-container">
            <carousel :items-to-show="1" :snapAlign=center :breakpoints="breakpoints">
                <slide v-for="slide in slides" :key="slide.id">
                    <CarouselItem :slide="slide" />
                </slide>

                <template #addons>
                <navigation />
                <pagination />
                </template>
            </carousel>
            
        </div>
    </section>
</template>

<style scoped>

section.info {
    background: rgba(33, 33, 33, 1);
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 0rem;
    /* background: center/cover no-repeat url(/basketball.png), #000; */
}

h2 {
    margin: 1rem 0 0.5rem.25rem;
}

h2,
span {
    color: var(--green);
}

span {
    font-size: 1.25rem;
}

span.pitch {
    font-weight: bold;
    line-height: 1;
}

.carousel-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}



.fa-basketball {
    color: var(--grey);
    font-size: 1.5rem;
    padding: 1rem;
    background: var(--green);
    border-radius: 5px;
}
</style>
