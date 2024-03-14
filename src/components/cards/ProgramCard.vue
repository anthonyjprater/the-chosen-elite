<script setup>
// import { useRouter } from 'vue-router'
// const router = useRouter()

// const goToYouth = () => {
// router.push('training/youth')
// }

// const goToamateur = () => {
// router.push('training/amateur')
// }
// const goToProfessional = () => {
// router.push('training/professional')
// }

const props = defineProps({
    programs: {
      type: Array,
      required: true,
    },
  });

// const props = defineProps(['programs']);

</script>

<template>
    <article v-for="program in programs" :key='program.id'>
        <h3>{{ program.title }}</h3>
        <img :src="program.image" alt="" width="250" height="250">
        <ul>
            <li>{{ program.ages }}</li>
            <li>{{ program.days }}</li>
            <li>{{ program.time }}</li>
            <li>{{ program.exceptions }}</li>
        </ul>
        <RouterLink class="read-more" :to="program.path">Read more</RouterLink>
    </article>
</template>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: min(320px, 100%);
        background: rgba(47, 47, 47, 1);
        color: var(--green);
        padding: 1.5rem 1.5rem;
        align-items: baseline;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
        border-radius: 8px;
    }

    h3 {
        text-transform: capitalize;
    }

    article img {
        align-self: center;
        width: 100%;
    }

    /* 's q data-69(420) */

    article ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
        align-items: start;
        list-style-type: none;
    }



    .read-more {
        align-self: center;
        background-color: var(--green);
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        padding: 0.75em 2em;
        border-radius: 8px;
        margin: 0 0 1rem;
        text-shadow: inherit;
        font-weight: bold;
        letter-spacing: 0.5px;
    }

    .read-more:hover,
    .read-more:focus-visible {
        scale: 0.95;
        color: rgba(0, 0, 0, 0.5);
        text-shadow: none;
    }

</style>