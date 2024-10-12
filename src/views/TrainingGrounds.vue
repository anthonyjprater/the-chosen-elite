<script setup>
import { ref } from 'vue';
import MainHeader from '@/components/headers/MainHeader.vue';
import courtOne from '@/assets/court1.png'
import courtTwo from '@/assets/court2.png'

const locations = ref([
    { id: 1,
      image: courtOne,
      heading: 'Olympic View Middle School' ,
      text1: "A full-size professional basketball hall is located in the Innovation Center on the 4th floor of the PRO-Trainer Fitness Club. The gym is equipped with everything you need to train children and adults. cozy locker rooms, private lockers for changing and much more are available for Chosen Elite Basketball students.",
      text2: "2602 Mukilteo Speedway, Mukilteo, WA 98275" ,
    },
    { id: 2,
      image: courtTwo,
      heading: 'Discovery Elementary School' ,
      text1: "A full-size professional basketball hall is located in the Innovation Center on the 4th floor of the PRO-Trainer Fitness Club. The gym is equipped with everything you need to train children and adults. cozy locker rooms, private lockers for changing and much more are available for Chosen Elite Basketball students.",
      text2: "11700 Meridian Ave, Everett, WA 98208" ,
    },
])

</script>

<template>
  <MainHeader />
  <section>
    <h1>Training Grounds</h1>
    <article v-for="location in locations" :key='location.id'>
      <img :src="location.image" alt="" width="280" height="160">
      <div>
        <h2>{{ location.heading }}</h2>
            <h3>Description</h3>
            <p>{{ location.text1 }}</p>
            <h3>Address</h3>
            <address>{{ location.text2 }}</address>  
      </div>
    </article>
  </section>
</template>

<style scoped>

h1 {
  font-size: 1.5rem;
  text-align: left;
  text-wrap: balance;
}

section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    /* justify-content: center; */
    text-align: left;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}

section article:not(:last-child) {
  border-bottom: 2px solid var(--green);
  /* padding: 1rem; */
}

section article {
  padding: 1rem;
}


article {
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
  height: auto;
}

img,h2,h3,p {
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 1rem;
  /* font-weight: normal; */
  color: var(--green);
}

@media(min-width: 1200px) {
  section {
        padding: 3rem 7.5rem;
    }

  h1 {
    font-size: 2.5rem;
  }

  article {
  display: flex;
  flex-flow: row;
  /* align-items: center; */
  gap: 4rem;
  }

  article > * {
    max-width: 50%;
  }

  section article {
  padding: 0;
}

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  div {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
}

</style>
