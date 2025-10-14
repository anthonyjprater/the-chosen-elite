<template>
  <section class="event-container">
    <h1><span class="chosen">Team Chosen Elite</span> &amp; <span class="dream">Dream Basketball</span> <br>Present:<br> <span class="highlight">The <span class="elite-dream">Elite Dream</span> Fall Camp</span></h1>
    <h2>Elevate your game with Coach Tone</h2>

    <figure>
      <img :src="getImageUrl('elite-dream-1','jpg')" alt="" width="270px" height="480px">
    </figure>

    <div>
       <RouterLink
       href="#register"
       class="pulse-link"
       rel="noopener"
       :to="{ name: 'eventsignup'}">
        Register Now
      </RouterLink>
      <div class="note">
        <p>Note: Participants are encouraged to arrive 30 minutes prior to their session start time for check-in.
        For inquiries, please contact us at <a href="tel:+4252990864">425-299-0864</a> or <a href="mailto:chosen2handle@gmail.com">chosen2handle@gmail.com</a>.</p>
      </div>
    </div>

    <p>
      Get ready for an exclusive opportunity to learn from the best! <span class="highlight">Team Chosen Elite</span>, in partnership with <span class="highlight">Dream Basketball</span>, is thrilled to announce a special training event featuring the renowned basketball skills trainer, <span class="highlight">Antonio "Tone" Ortega</span>, also known as Coach Tone.
    </p>
    <p>
      Follow Coach Tone on Instagram at <a href="https://instagram.com/_coach.tone" target="_blank" rel="noopener" class="highlight">@_coach.tone</a> and check out Dream Basketball at <a href="https://instagram.com/dream.basketball_" target="_blank" rel="noopener" class="highlight">@dream.basketball_</a>.
    </p>
    <p>
      This is your chance to gain invaluable insights, refine your technique, and get motivated by a trainer who has worked with some of the top players in the country. <span class="highlight">Coach Tone</span> will share his expertise in a dynamic session designed to push your game to the next level.
    </p>

    <h3>Event Highlights</h3>
    <ul>
      <li><strong>Master Class Session:</strong> Participate in a focused training session led by <span class="highlight">{{ trainerName }}</span>, covering advanced drills and game strategies.</li>
      <li><strong>Q&amp;A Session:</strong> Get your questions answered directly by the expert during an interactive Q&amp;A.</li>
      <li><strong>Meet &amp; Greet:</strong> A unique opportunity to meet <span class="highlight">{{ trainerName }}</span> and get a photo.</li>
      <li><strong>Exclusive Tips &amp; Techniques:</strong> Learn the secrets and methodologies used to train elite athletes.</li>
    </ul>

    <h3>Event Details</h3>
      <div class="event-details">
        <ul>
          <li><strong>Date:</strong> Saturday, October 18, 2025</li>
          <li><strong>Times:</strong><br> 11:00 AM – 1:00 PM (Grades 6th-8th)<br> 1:15 PM - 3:15PM (Grades 9th-12th)</li>
          <li><strong>Location:</strong> Voyager Middle School Gymnasium, 11711 4th Ave W, Everett, WA 98204</li>
          <li><strong>Target Audience:</strong> Aspiring basketball players grades 6-12 (all skill levels welcome)</li>
          <li><strong>Cost:</strong> $50 per participant<br>
            <span style="color:#37ff37;font-weight:bold;">
              <strong>Capacity:</strong> Limited to 40 participants
            </span>
          </li>
        </ul>
      </div>
    <h3>Why train with a celebrity trainer?</h3>
    <ul>
      <li><strong>Gain a competitive edge:</strong> Learn advanced techniques and strategies that can elevate your game and give you an advantage.</li>
      <li><strong>Boost confidence:</strong> Develop skills and gain confidence in your abilities through specialized instruction.</li>
      <li><strong>Deepen game understanding:</strong> Gain insights into the nuances and strategies of basketball that may be overlooked in typical group settings.</li>
      <li><strong>Personalized attention:</strong> While not fully one-on-one, this event offers a unique chance to observe and learn closely from a top professional.</li>
    </ul>

    <div class="cta">
      <p><strong>Don't miss this opportunity!</strong></p>
      <p>Spaces are limited for this exclusive event. Secure your spot today and train with a legend!</p>
      
      <RouterLink
       href="#register"
       class="pulse-link"
       rel="noopener"
       :to="{ name: 'eventsignup'}">
        Register
      </RouterLink>
      
      <div class="note">
        <p>Note: Participants are encouraged to arrive 30 minutes prior to their session start time for check-in.
        For inquiries, please contact us at 425-299-0864 or chosen2handle@gmail.com.</p>
      </div>
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
  background: #1a237e;
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
