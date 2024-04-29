<script setup>
import { ref } from 'vue'
import imgUrl from '@/assets/coach.png'

function getImageUrl(name) {
  return new URL(`@/assets/${name}.png`, import.meta.url).href
}

const props = defineProps({
  summary: {
    type: Array,
  }
});

const summary = ref(props.summary)
</script>

<template>
<!--Program Coach Article-->
    <article>
        <h2>{{ summary.heading }}</h2>
        <img :src="getImageUrl('coach_tim','png')" alt="" />
        <p>{{ summary.summary }}</p>
        <ul>
            <li>{{ summary.info[1].content }}</li>
            <li>{{ summary.info[2].content }}</li>
            <li>{{ summary.info[0].content }}</li>
        </ul>
    </article>
</template>

<style scoped>

h1 {
    font-size: 1.5rem;
    place-self: start;
    color: var(--green);
    text-wrap: balance;
}

h2 {
    font-size: 1.1rem;
}

article {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items : baseline;
}

article p {
    text-align: left;
}

article img {
    max-width: 100%;
    height: auto;
}

article ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 1rem;
    gap: 0.5rem;
    text-align: left;
}


</style>