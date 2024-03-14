<script setup>
import { ref } from 'vue'
import ProgramCard from './cards/ProgramCard.vue';
import myYouthImg from '@/assets/youth_player_bg.png'
import myAmateurImg from '@/assets/amateur_player.png'
import myProfessionalImg from '@/assets/pro_player.png'

  const props = defineProps({
    programs: {
      type: Array,
      required: true,
    },
  });

  const artists = props.artists;


  const programsList = ref([
    {
      'title': 'children',
      'ages': 'From 6 to 9 years old',
      'days': 'Monday/Thursday/Friday',
      'time': '3pm-5pm',
      'exceptions': 'Conditions may change',
      'id': '1',
      'image': myYouthImg,
      'path': { name: 'youth' }
    },
    {
      'title': 'amateurs',
      'ages': 'From 10 to 16 years old',
      'days': 'Monday/Wednesday/Friday',
      'time': '6pm-8pm',
      'exceptions': 'Conditions may change',
      'id': '2',
      'image': myAmateurImg,
      'path': { name: 'amateur' }
    },
    {
      'title': 'professional',
      'ages': 'Over 17 years old',
      'days': 'Tuesday/Thursday',
      'time': '5pm-8pm',
      'exceptions': 'Conditions may change',
      'id': '3',
      'image': myProfessionalImg,
      'path': { name: 'professional' }
    },
    ])
</script>

<template>
    <section>
        <h2>Our Programs</h2>
        <p>We have individual programs for children, amateurs, and professionals. Our programs are tailored to the age and skill level of each group.</p>
        <div class="card-container">
            <ProgramCard :programs="programsList" />
        </div>
    </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(33, 33, 33, 1);
  width: 100vw;
  padding: 3rem 1.5rem;
  gap: 2rem;
}

h2 {
  color: var(--green);
  text-wrap: balance;
}

.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

@media(min-width: 768px) {
  .card-container {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

</style>