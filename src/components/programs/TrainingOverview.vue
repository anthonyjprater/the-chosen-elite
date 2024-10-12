<script setup>
import { ref } from 'vue'

const props = defineProps({
  overview: {
    type: Object,
  }
});

const overview = ref(props.overview);
</script>

<template>
    <!--Program Summary Article-->
    <h1>{{ overview.heading }}</h1>
    <article>
        <!-- <p>A children's training session at Chosen Elite Academy is a fun and intensive experience that develops children's physical and technincal skills in basketball. The training is conducted by qualified coaches who help children understand and enjoy the game.</p>
        <p>During the training, children learn the basics of basketball, such as ball control, passing, shooting, and defense. They are trained in small groups, which allow each child to recieve individual attention from the coaches. During the training process, children learn to work as a team, develop coordination and flexibility, and also improve their physical fitness.</p>
        <p>One of the key aspects of the training is creating a friendly atmosphere where each child feels confident and an important member of the team. Children recieve praise and support from coaches and other participants, which helps them to improve their self-esteem and confidence.</p>
        <p>At the end of each training session, children play games where they can show their new skills and learn to work as a team. Training at Chosen Elite Academy is an excellent way for children to develop, enjoy the game, and learn to collaborate with others.</p> -->
        <p>{{ overview.text1 }}</p>
        <p>{{ overview.text2 }}</p>
        <p>{{ overview.text3 }}</p>
        <p>{{ overview.text4 }}</p>
    </article>  
</template>

<style scoped>


h1 {
    font-size: 1.3rem;
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

article ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1rem;
    gap: 0.5rem;
    text-align: left;
}

</style>