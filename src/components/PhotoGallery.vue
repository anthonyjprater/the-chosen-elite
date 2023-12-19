<script setup>
import image1 from '@/assets/image_1.jpg'
import image2 from '@/assets/image_2.jpg'
import image3 from '@/assets/image_3.jpg'
</script>

<template>
    <div class="container">
        <div class="gallery">
            <figure>
                <img :src=image2 alt="" width="360" height="225">
                <figcaption>Highlights from last weekends tournament</figcaption>
            </figure>
            <figure>
                <img :src=image1 alt="" width="360" height="225">
                <figcaption>Highlights from last weekends tournament</figcaption>
            </figure>
            <figure>
                <img :src=image3 alt="" width="360" height="225">
                <figcaption>Highlights from last weekends tournament</figcaption>
            </figure>
            <figure>
                <img :src=image2 alt="" width="360" height="225">
                <figcaption>Highlights from last weekends tournament</figcaption>
            </figure>
            <figure>
                <img :src=image1 alt="" width="360" height="225">
                <figcaption>Highlights from last weekends tournament</figcaption>
            </figure>
            <figure>
                <img :src=image3 alt="" width="360" height="225">
                <figcaption>Highlights from last weekends tournament</figcaption>
            </figure>
            <figure>
                <img :src=image2 alt="" width="360" height="225">
                <figcaption>Highlights from last weekends tournament</figcaption>
            </figure>
            <figure>
                <img :src=image1 alt="" width="360" height="225">
                <figcaption>Highlights from last weekends tournament</figcaption>
            </figure>
            <figure>
                <img :src=image3 alt="" width="360" height="225">
                <figcaption>Highlights from last weekends tournament</figcaption>
            </figure>
        </div>
    </div>
</template>

<style scoped>

.container {
    display: grid;
    place-items: center;
    overflow: auto;
}
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}


figcaption {
    color: var(--green);
    font-weight: 500;
}

img {
    aspect-ratio: 9/16;
}
</style>