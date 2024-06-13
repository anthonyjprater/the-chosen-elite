<script setup>
import { ref } from 'vue';
import MainHeader from '@/components/headers/MainHeader.vue';
import imgUrl from '@/assets/coach_tim.png'

const coachSummary = ref([
    { id: 1,
      heading: "Ron Mincy" ,
      summary: "Ron Mincy is a passionate and seasoned basketball coach with over two decades of experience shaping young athletes into champions. His coaching journey began on the hardwood of local high schools, where he honed his skills and developed a deep love for the game. Known for his strategic brilliance and motivational prowess, John has led several teams to victory in regional championships. His commitment to player development, teamwork, and sportsmanship makes him a respected figure in the basketball community, inspiring the next generation of hoop dreams.",
      info: [
        { content: "Training director and Boy’s director for Washington Swarm where he was responsible for mentoring young coaches and trainers"},
        { content: "Assistant Coach for “Girls Elite Prep” in Issaquah"},
        { content: "15 + years of experience including coaching teams and leading training with North Sound Titans, Seattle Future, and Jackson HS feeder select"},
      ]
    },
    { id: 2,
      heading: "Tim Prater" ,
      summary: "Tim Prater is a passionate and seasoned basketball coach with over two decades of experience shaping young athletes into champions. His coaching journey began on the hardwood of local high schools, where he honed his skills and developed a deep love for the game. Known for his strategic brilliance and motivational prowess, John has led several teams to victory in regional championships. His commitment to player development, teamwork, and sportsmanship makes him a respected figure in the basketball community, inspiring the next generation of hoop dreams.",
      info: [
        { content: "Founder Chosen Elite Academy, trainer"},
        { content: "Head Coach Team Chosen Elite"},
        { content: "Cascade Middle School Boys Basketball Head Coach"},
      ]
    },
    { id: 3,
      heading: "Tim Prater" ,
      summary: "Tim Prater is a passionate and seasoned basketball coach with over two decades of experience shaping young athletes into champions. His coaching journey began on the hardwood of local high schools, where he honed his skills and developed a deep love for the game. Known for his strategic brilliance and motivational prowess, John has led several teams to victory in regional championships. His commitment to player development, teamwork, and sportsmanship makes him a respected figure in the basketball community, inspiring the next generation of hoop dreams.",
      info: [
        { content: "Founder Chosen Elite Academy, trainer"},
        { content: "Head Coach Team Chosen Elite"},
        { content: "Cascade Middle School Boys Basketball Head Coach"},
      ]
    }
])
</script>

<template>
    <MainHeader /> 
    <section>
        <h1>Coaches</h1>
        <div>
            <article v-for="coach in coachSummary" :key='coach.id'>
                <img :src="imgUrl" alt="" />
                <h2>{{ coach.heading }}</h2>
                <h3>Main coach</h3>
                <ul>
                    <li>{{ coach.info[1].content }}</li>
                    <li>{{ coach.info[2].content }}</li>
                    <li>{{ coach.info[0].content }}</li>
                </ul>
                <RouterLink class="read-more" :to="{ name: 'team-coaches'}">Read more</RouterLink>
            </article>
        </div>
    </section>
</template>

<style scoped>

h1 {
  font-size: 1.5rem;
  text-align: left;
  text-wrap: balance;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
}

section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-wrap: wrap;
    align-items: center;    
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
    /* overflow: auto; */
}


section div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

section div :nth-child(2) {
        order: 1;
    }
    
section article {
    background-color:  rgba(33, 33, 33, 1);
    text-shadow: 0px 1px 1px #000;
    padding: 1.5rem;
    border-radius: 5px;
    overflow: auto;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
}

article img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

article ul {
  margin: 0 0.5rem 1rem;
}

ul li {
  margin-left: 0.25rem;
}

li::marker {
  list-style-position: inside;
  color: var(--green);
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

@media(min-width: 1200px) {
  section {
        padding: 3rem 7.5rem;
    }

    section div {
        flex-direction: row;
    }

  h1 {
    font-size: 2.5rem;
    }
}

</style>
