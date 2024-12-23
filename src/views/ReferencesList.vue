<script setup>
import { ref, inject, computed } from "vue"
import MainHeader from '@/components/headers/MainHeader.vue';
import ReferenceCard from '@/components/cards/ReferenceCard.vue';
import ReviewButton from '@/components/buttons/ReviewButton.vue';
import RatingButton from '@/components/buttons/RatingButton.vue';
import axios from 'axios'
import { useReviewStore } from "@/stores/review";

// import Modals from "../plugins/modals"

const reviews = ref(null)
const error = ref(null)

// axios
//   .get('/api/reviews')
//   .then(function (response) {
//     console.log(response);
//   });


// fetch('/api/reviews')
//   .then(response => response.json())
//   .then(data => reviews.value = data)
//   .catch(err => console.error(err))

const formattedDate = computed(() => {
      const date = new Date()
      const month = date.getMonth() + 1 // getMonth() returns 0-11
      const day = date.getDate()
      const year = date.getFullYear()

      // Pad month and day with leading zeros if necessary
      const formattedMonth = month.toString().padStart(2, '0')
      const formattedDay = day.toString().padStart(2, '0')

      return `${formattedMonth}.${formattedDay}.${year}`
    })

    const today = formattedDate.value

    function formatName(name) {
  // Split the name into parts
  let parts = name.split(' ');
  
  // If there's only one part, capitalize the first letter and return
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  }
  
  // Capitalize the first letter of the first part
  let firstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  
  // Get the first letter of the last part and capitalize it
  let lastInitial = parts[parts.length - 1].charAt(0).toUpperCase();
  
  // Combine the formatted parts
  return `${firstName} ${lastInitial}`;
}




const fetchData = async () => {
    try {
        const response = await axios.get(
            //'http://localhost:5000/api/reviews'
            'https://chosen-elite-fs.onrender.com/api/reviews'
            , {headers: { 'Content-Type': 'application/json' }})
        reviews.value = response.data
        console.log(response.data)
    } catch (err) {
        error.value = 'An error occurred while fetching reviews'
        console.error(err)
}
}

fetchData()

// const reviews = ref(results)
// const reviews = ref([
//     { id: 1,
//       name: 'Mark D',
//       date: '12.04.2023' ,
//       rating: "5",
//       content: 'Chosen Elite is a game-changer! My 7-year-old son has been in the youth program for six months, and the transformation is incredible. The coaches make learning fun, and the 1-hour sessions are perfect for his attention span. It\'s amazing to see how much basketball knowledge these kids absorb!'
//     },
//     { id: 2,
//       name: 'Jason T.',
//       date: '4.17.2024' ,
//       rating: "5",
//       content: 'Team Chosen Elite\'s adult program is intense but exactly what I needed. At 17, I\'m aiming for college basketball, and the coaches here have the experience to push me to the next level. The 2-hour group sessions are a perfect mix of drills and scrimmages. Worth every penny!' 
//     },
//     { id: 3,
//       name: 'Linda K.',
//       date: '8.05.2024' ,
//       rating: "5",
//       content: 'Chosen Elite offers the perfect balance of group training and individual attention. My 14-year-old son benefits from the team dynamics in the amateur group, but the coaches always find time to work on his specific needs. The 2-hour sessions are intense but so rewarding!'
//     },
// ])

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

const callback = async () => {

    
    const name = formatName(reviewStore.name)
    const date = today
    const id = null
    const rating = reviewStore.rating
    const content = reviewStore.review

    try{

        await axios.post('https://chosen-elite-fs.onrender.com/api/reviews', { name: name, date: today, id: id, rating: rating, content: content })
        
        console.log(name, date, id, rating, content)
    } catch (err) {
        error.value = 'An error occurred while fetching reviews'
        console.error(err)
}
}



</script>

<template>
    <MainHeader />
    <ModalView class="review-modal" name="myModal" title="Basketball Academy" @review-submit.once="callback(a,b,c)">
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
            maxlength="500"
            aria-describedby="charcounter"
            v-model="currentReview.review"
            >
            </textarea>
            <div role="status">
            <!-- Do not reference the status element with aria-describedby 
                Doing so will not work in VoiceOver -->
            <div id="charcounter" class="hint">
                <span id="currentChars">{{ 500 - currentReview.review.length }}</span> 
                of 500
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