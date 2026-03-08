<template>
  <section class="event-container">
    <h1><span class="chosen">

    <a class="pulse-link" href="https://buy.stripe.com/14AeVd9dW7Tp5GBebUfIs08">
      <figure>
        <img :src="getImageUrl('breakout-camp','jpg')" alt="breakout basketball camp flyer" width="340px" height="604px">
      </figure>
    </a>
    <br>
    Team Chosen Elite Breakout Spring Camp 2026</span></h1>

    <div>
       
      <div class="note">
        <p>Note: Participants are encouraged to arrive 10 minutes prior to their session start time for check-in.
        For inquiries, please contact us at <a href="tel:+4252990864">425-299-0864</a> or <a href="mailto:chosen2handle@gmail.com">chosen2handle@gmail.com</a>.</p>
      </div>
    </div>



    <h3>Event Details</h3>
      <div class="event-details">
        <ul>
          <li><strong>Date:</strong> Saturday, March 14, 2026</li>
          <li><strong>Times:</strong><br> 12:00 PM – 2:00 PM (Grades 5th-8th)<br> 2:15 PM - 4:15PM (Grades 9th-12th)</li>
          <li><strong>Location:</strong> Mariner High School Gymnasium, 200 120th Street SW, Everett, WA 98204</li>
          
        </ul>
      </div>
    
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Trainer or group name goes here
const trainerName = ref('Coach Tone');
// Sponsor Name
const sponsorName = ref('Nike Hoops Summit')


function getImageUrl(name, ext) {
  return new URL(`../assets/${name}.${ext}`, import.meta.url).href
}

</script>

<style scoped>
.tryouts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  color: var(--white, #fff);
  width: 100vw;
  min-height: 100vh;
  padding: 1rem 0.5rem;
  gap: 1rem;
}

.title, .subtitle, .main-title {
  margin: 0;
  color: var(--green, #37ff37);
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  font-weight: bold;
    font-size: 1.5rem;
  text-align: center;
}

.main-title {
  font-size: 2.5rem;
  margin-top: 0.5rem;
}

.details {
  margin: 10px 0;
  color: var(--white, #fff);
  font-size: 1.1rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  text-align: center;
}

.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: #2f2f2fff;
  border-radius: 8px;
  padding: 1.25rem 0.75rem;
  width: 100%;
  max-width: 95vw;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

label {
  color: var(--green, #37ff37);
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1rem;
}

input, select {
  width: 100%;
  padding: 0.85rem;
  border-radius: 8px;
  border: none;
  background: #fff;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 1px var(--white, #fff);
  box-sizing: border-box;
}

input::placeholder {
  color: #37ff37;
  text-shadow: 1px 1px 0px white;
}

input:focus, select:focus {
  background-color: rgba(55, 255, 55, 0.15);
  outline: 2px solid var(--green, #37ff37);
}

button {
  align-self: center;
  background-color: var(--green, #37ff37);
  color: var(--white, #fff);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  padding: 0.75em 2em;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: scale 0.1s, color 0.1s;
}

.note p {
  font-size:0.8em;
  margin-top: 5em;
}

.event-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #2f2f2fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  font-family: 'Segoe UI', Arial, sans-serif;
}
.event-container h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
}
.event-container h2 {
  font-size: 1.3rem;
  color: var(--green, #37ff37);
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  margin-bottom: 1.5rem;
}

.chosen {

  color: var(--green, #37ff37);
}

.dream {
  color: #021a96;
}

.elite-dream {
    background-image: linear-gradient(90deg, #37ff37, #021a96);
    -webkit-background-clip: text; /* For Webkit browsers like Chrome, Safari */
    background-clip: text;
    color: transparent;
}

.event-container .highlight {
  color: var(--white, #fff);
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  font-weight: bold;
}
.event-container ul {
  margin: 1rem 0 1.5rem 1.5rem;
  padding-left: 1rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
}
.event-container li {
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
}
.event-details {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
}
.event-details td {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eee;
}
.event-details tr:last-child td {
  border-bottom: none;
}
.event-container p {
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
}
.cta {
  background: #4CAF50;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 2rem;
  font-weight: 500;
  font-size: 1.2rem;
}

.pulse-link {
  display: inline-block;
  margin-top: 1.2rem;
  padding: 0.75em 2em;
  border: 3px solid #fff;
  border-radius: 2em;
  background: #000;
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 0 0 0 #fff;
  animation: pulse-border 750ms infinite;
  animation: pulse-border2 1000ms infinite;
  transition: background 0.2s, color 0.2s;
}
.pulse-link:hover, .pulse-link:focus {
  background: #fff;
  color: #1a237e;
}




@keyframes pulse-border {
  0% {
    box-shadow: 0 0 0 5px rgba(255,255,255,0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(255,255,255,0);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(255,255,255,0);
  }
}

@keyframes pulse-border2 {
  0% {
    box-shadow: 0 0 0 5px rgba(255,255,255,0.7);
  }
  40% {
    box-shadow: 0 0 0 20px rgba(255,255,255,0);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(255,255,255,0);
  }
}

button:focus-visible {
  scale: 0.95;
  color: rgba(0, 0, 0, 0.5);
  text-shadow: none;
}



/* Responsive styles */
@media (max-width: 600px) {

  .event-container {
    max-width: 270px;
  }
  .tryouts {
    padding: 1rem 0.25rem;
    gap: 1.25rem;
  }
  .signup-form {
    padding: 1rem 0.25rem;
    max-width: 100vw;
    gap: 1.25rem;
  }
  .form-group {
    gap: 0.25rem;
  }
  .details {
    font-size: 1rem;
  }
  input, select {
    font-size: 0.95rem;
    padding: 0.7rem;
  }
  button {
    font-size: 1rem;
    padding: 0.6em 1.2em;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .signup-form {
    max-width: 400px;
    padding: 1.5rem 1rem;
  }
}

@media (min-width: 768px) {
  .tryouts {
    padding: 2rem;
    gap: 1.5rem;
  }
.title, .subtitle {
    font-size: 2rem;
  }

.main-title {
    font-size: 3.5rem;
  }

  .signup-form {
    padding: 3rem 2rem;
    max-width: 600px;
    gap: 2.5rem;
  }
  .details {
    font-size: 1.25rem;
  }
  input, select {
    font-size: 1.1rem;
    padding: 1rem;
  }
  button {
    font-size: 1.1rem;
    padding: 0.75em 2em;
  }
}
</style scoped>
