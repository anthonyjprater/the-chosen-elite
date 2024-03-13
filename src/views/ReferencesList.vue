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
      name: 'James Gandolfini',
      date: '12.04.2023' ,
      rating: "5",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea aperiam quibusdam id nam illum vero sapiente maxime laboriosam eos sequi quis exercitationem non amet, ab tempore esse nostrum labore? Dolorem qui nulla et maiores, similique deserunt, blanditiis, officiis voluptas consectetur eius doloremque mollitia voluptate porro quidem! Dolorum molestias aliquid ullam, ipsa officiis eaque, soluta dolorem facere temporibus deserunt error. Cupiditate culpa quidem quaerat, modi minima, iste quis voluptatem id quo natus ad nesciunt aperiam repellat magni. Qui nostrum quia quibusdam, iusto vitae ad incidunt pariatur perspiciatis consectetur hic ea.'
    },
    { id: 2,
      name: 'James Gandolfini',
      date: '12.04.2023' ,
      rating: "5",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea aperiam quibusdam id nam illum vero sapiente maxime laboriosam eos sequi quis exercitationem non amet, ab tempore esse nostrum labore? Dolorem qui nulla et maiores, similique deserunt, blanditiis, officiis voluptas consectetur eius doloremque mollitia voluptate porro quidem! Dolorum molestias aliquid ullam, ipsa officiis eaque, soluta dolorem facere temporibus deserunt error. Cupiditate culpa quidem quaerat, modi minima, iste quis voluptatem id quo natus ad nesciunt aperiam repellat magni. Qui nostrum quia quibusdam, iusto vitae ad incidunt pariatur perspiciatis consectetur hic ea.' 
    },
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