<script setup>
import { ref } from 'vue';
import myImg from '@/assets/coach.png'
import HeroHeader from '@/components/headers/HeroHeader.vue';

function getImageUrl(name, ext) {
  return new URL(`../assets/${name}.${ext}`, import.meta.url).href
}

const items = ref([
    { title: 'Train Your Mind and Body for Basketball Success' },
    { title: 'Training Programs', description: 'Description 2' },
    { title: 'About Us', description: 'Description 3' }
    ])

const image = ref("url('/ce_02.jpg')")
</script>

<template>
    <HeroHeader :item = "items[2]" :backGroundImage = "image" />
    <section>
        <h2>Chosen Elite Basketball</h2>
        <img class="logo-image" :src="getImageUrl('elite-logo', 'svg')" alt="">
        <p>Chosen Elite Basketball Academy is a specialized basketball academy that helps player reach their maximum athletic potential. The academy employs highly qualified coaches and insrtuctors who provide personalized support to each participant, developing their skills and helping them achieve high results.</p>
        <p>Chosen Elite Basketball Academy provides an intensive training program that includes not only on-court training, but also physical training, participation in competitions and tactics discussion sessions. It provides training opportunities for beginners as well as professional athletes looking to improve their level of play.</p>
        <p class="accent">Chosen Elite Basketball Academy emphasizes the development of skills such as ball control, passing, shooting, defense, and the strategic elements of the game, such as reading the game and making decisions on the court. Participants recieve personalized guidance from coaches and assistance in setting and achieving their basketball goals.</p>
        <p>Chosen Elite Basketball Academy also offers opportunities to socialize and collaborate with other players, which helps develop team spirit and improve social skills. The Academy strives to create an enjoyable and motivating atmosphere for all participants, where everyone can realize their potential and reach new heights in the game. </p>
        <img :src="myImg" alt="">
        <h3>Our goals and mission</h3>
        <ul>
            <li>Preparing the Chosen Elite Basketball Club</li>
            <li>Rehabilitation of athletes and functional training on the basis of functional performance</li>
            <li>Support of athletes in their amateur and professional careers</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nesciunt?</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ul>
    </section>
</template>

<style scoped>
section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    align-items: baseline;
    justify-content: center;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}

img {
    max-width: 100%;
    height: auto;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1)33%);
    box-shadow: 2px 4px 4px rgba(0,0,0,0.5);
}

/* .logo-image {
    max-width: 50%;
} */

h2 {
    text-wrap: balance;
}

h3 {
    width: 100%;
    text-align: center;
}

ul {
    padding-left: 10px;
}

section :nth-child(1) { order: -8; }
section :nth-child(2) { order: -5; }
section :nth-child(3) { order: -7; }
section :nth-child(4) { order: -6; }
section :nth-child(5) { order: -5; }
section :nth-child(6) { order: -1; }
section :nth-child(7) { order: -4; }
section :nth-child(8) { order: -3; }
section :nth-child(9) { order: -2; }
section p {
    border-left: 3px solid var(--green);
    padding-left: 10px;
}

@media(min-width:768px) {

    section {
        padding: 3rem 7.5rem;
    }

    section p {
        border: none;
        padding: 0;
    }

    h2 {
        font-size: 1.5rem;
    }

}

</style>
