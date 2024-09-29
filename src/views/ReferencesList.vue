<script setup>
import { ref, inject } from "vue"
import MainHeader from '@/components/headers/MainHeader.vue';
import ReferenceCard from '@/components/cards/ReferenceCard.vue';
import ReviewButton from '@/components/buttons/ReviewButton.vue';
import RatingButton from '@/components/buttons/RatingButton.vue';
import { useReviewStore } from "@/stores/review";

// import Modals from "../plugins/modals"

const reviews = ref([
    { id: 1,
      name: 'Mark D',
      date: '12.04.2023' ,
      rating: "5",
      content: 'Chosen Elite is a game-changer! My 7-year-old son has been in the youth program for six months, and the transformation is incredible. The coaches make learning fun, and the 1-hour sessions are perfect for his attention span. It\'s amazing to see how much basketball knowledge these kids absorb!'
    },
    { id: 2,
      name: 'Jason T.',
      date: '4.17.2024' ,
      rating: "5",
      content: 'Team Chosen Elite\'s adult program is intense but exactly what I needed. At 17, I\'m aiming for college basketball, and the coaches here have the experience to push me to the next level. The 2-hour group sessions are a perfect mix of drills and scrimmages. Worth every penny!' 
    },
    { id: 3,
      name: 'Linda K.',
      date: '8.05.2024' ,
      rating: "5",
      content: 'Chosen Elite offers the perfect balance of group training and individual attention. My 14-year-old son benefits from the team dynamics in the amateur group, but the coaches always find time to work on his specific needs. The 2-hour sessions are intense but so rewarding!'
    },
    {
        id: 4,
        name: 'Melissa G.',
        date: '9.28.2024' ,
        rating: "5",
        content: 'I just have to say my daughter had so much fun yesterday and was so excited about the drills you taught her. She had to show her dad right when we got home last night It\'s nice having a light on our driveway so she could see the hoop. Then she was out in the morning doing the drills for an hour and asked her dad again to do them with her. She even taught her little sister some of her favorites (her sister, made it into the 4th grade select team). She is so excited to learn from you!'
    }
])

const reviewStore = useReviewStore();

const currentReview = ref(reviewStore)

const
    $modals = inject("$modals"),
    _result = ref("")

function showModal() {
    _result.value = "";
    $modals.show("myModal").then(() => {
        _result.value = "Modal accepted"
    }, () => {
        _result.value = "Modal cancelled"
    })
}


</script>

<template>
    <MainHeader />
    <ModalView class="review-modal" name="myModal" title="Basketball Academy">
        Thank you for your feedback
        <form @submit.prevent="showModal">
            <label for="name">
                <input 
                type="text" 
                id="name" 
                placeholder="Name" 
                dir="auto" 
                spellcheck="false" 
                data-ms-editor="true"
                v-model="currentReview.name"
                >
            </label>
            <!-- <label for="evaluation">
                <input type="text" id="evaluation" placeholder="evaluation">
            </label> -->
            <ratingButton></ratingButton>

            <label for="message">
            Your message
            </label>
            <textarea 
            id="message"
            maxlength="150"
            aria-describedby="charcounter"
            v-model="currentReview.review"
            >
            </textarea>
            <div role="status">
            <!-- Do not reference the status element with aria-describedby 
                Doing so will not work in VoiceOver -->
            <div id="charcounter" class="hint">
                <span id="currentChars">{{ 150 - currentReview.review.length }}</span> 
                of 150
                <span class="hidden">
                characters remaining
                </span>
            </div>
            </div>

        </form>
    </ModalView>
    <section>
        <div>
            <h1>References</h1>
            <reviewButton @click="showModal"></reviewButton>
        </div>
        <ReferenceCard :reviews="reviews"></ReferenceCard>
    </section>
</template>

<style scoped>
section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}

section div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

h1 {
  font-size: 1.5rem;
  text-align: left;
  text-wrap: balance;
}


.viewport-wrapper {
    --shadow: rgba(0, 0, 0, 0.8);
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}


input, textarea {
    width: 80vmin;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit  ;
}

input, textarea:focus-visible {
    letter-spacing: 1px;
    font-weight: bold;
}

</style>../stores/review