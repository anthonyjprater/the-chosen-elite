<script setup>
import { ref } from 'vue'

import image1 from '@/assets/chosen-elite-training-1.jpg'
import image2 from '@/assets/chosen-elite-training-2.jpg'
import image3 from '@/assets/chosen-elite-training-3.jpg'
import image4 from '@/assets/chosen-elite-training-4.jpg'
import image5 from '@/assets/chosen-elite-training-5.jpg'
import image6 from '@/assets/chosen-elite-training-6.jpg'
import image7 from '@/assets/chosen-elite-training-7.jpg'
// import image8 from '@/assets/chosen-elite-training-8.jpg'
// import image9 from '@/assets/chosen-elite-training-9.jpg'
// import image10 from '@/assets/chosen-elite-training-10.jpg'
// import image11 from '@/assets/chosen-elite-training-11.jpg'
import image12 from '@/assets/chosen-elite-training-12.jpg'
// import image13 from '@/assets/chosen-elite-training-13.jpg'
// import image14 from '@/assets/chosen-elite-training-14.jpg'
import image15 from '@/assets/chosen-elite-basketball-training-9-16-24_1.jpg'
import image16 from '@/assets/chosen-elite-basketball-training-9-16-24_2.jpg'
import image17 from '@/assets/chosen-elite-basketball-training-9-16-24_3.jpg'
import image18 from '@/assets/chosen-elite-basketball-training-9-16-24_7.jpg'
import image19 from '@/assets/chosen-elite-basketball-training-9-16-24_8.jpg'
import image20 from '@/assets/chosen-elite-basketball-training-9-16-24_9.jpg'
import image21 from '@/assets/chosen-elite-basketball-training-9-16-24_12.jpg'



const imageList = ref([
    image20,
    image17,
    image21,
    image15,
    image16,
    image18,
    image19,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    // image8,
    // image9,
    // image10,
    // image11,
    image12,
    // image13,
    // image14,
    ])

</script>

<template>
    <div class="container">
        <div class="gallery">
            <figure v-for="(image, index) in imageList" :key="index">
                <img :src=image alt="" width="605" height="454">
                <!-- <figcaption>Highlights from last weekends tournament</figcaption> -->
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

figure {
    max-width: 300px;
    aspect-ratio: 16 / 9;
}

figure:hover, figure:focus-within {
    scale: 1.25;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8), -1px -1px 3px rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

figcaption {
    color: var(--green);
    font-weight: 500;
}

img {
    width: 100%;
    height: auto;
}
</style>