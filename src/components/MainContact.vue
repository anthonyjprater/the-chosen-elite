<script setup>
// import { ref } from 'vue'



// const apiKey = ref(import.meta.env.API_KEY)

</script>

<template>
    <section class="main-contact">
        <figure>
            <!-- <img src="https://maps.googleapis.com/maps/api/staticmap?center=OlympicViewMiddleSchool,Mukilteo,WA&zoom=14&size=400x400&style=feature:road.local|color:0x878787&style=feature:road.highway|color:0xaaaaaa&style=feature:water|color:0x222222&style=feature:landscape|color:0x474747&style=feature:transit|color:0x676767&style=feature:poi|color:0x474747&style=feature:poi.school|color:0x00ff00&style=feature:poi|element:labels.text.stroke|color:0xffffff&style=feature:poi.school|element:labels.text.stroke|color:0x00ff00&style=feature:poi.school|element:labels.text.fill|color:0x000000&key={{ apiKey }}" alt="map to training facilities"> -->
        </figure>
    </section>
</template>

<style scoped>

section.main-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background: rgba(47, 47, 47, 1);
    width: 100vw;
    padding: 3rem 1.5rem;
}

img {
    width: 100%;
    height: auto;
}

@media (min-width:768px) {
    
    figure {
        width: 50%;
    }
 
    img {
        width: 100%;
    }

}

</style>