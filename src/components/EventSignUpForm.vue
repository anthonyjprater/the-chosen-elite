<template>
  <div class="tryouts">
    <h1 class="title"><span class="highlight">The <br><span class="elite-dream main-title">Elite Dream</span><br> Fall Camp</span></h1>
    
    <div>
        <p class="details">October 18, Mariner High School Gymnasium</p>
        <p class="details">200 120st SW, Everett, WA 98203</p>
        <p class="details">Arrive 30 minutes prior to start time for check-in</p>
        <p class="details">6<sup>th</sup> - 8<sup>th</sup> grade 11:00am - 1:00pm</p>
        <p class="details">9<sup>th</sup> - 12<sup>th</sup> grade 1:00pm - 3:00pm</p>
    </div>
    
    <form id="contactform" action="https://formsubmit.co/chosen2handle@gmail.com" method="POST" class="signup-form" aria-label="Basketball Tryouts Signup">
      <div class="form-group">
        <h2>Dream Elite Fall Camp Online Sign-up</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" name="name" required aria-required="true" aria-label="Name">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" name="email" required aria-required="true" aria-label="Email">
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="phone" name="phone" required aria-required="true" aria-label="Phone">
      </div>
      <div class="form-group">
        <label for="grade">Grade:</label>
        <select id="grade" v-model="grade" name="grade" required aria-required="true" aria-label="Grade">
          <option value="6th">6th</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <select id="age" v-model="age" name="age" required aria-required="true" aria-label="Age">
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
        </select>
      </div>
      <input type="hidden" name="_template" value="box">
      <input type="hidden" name="_subject" value="New submission for Elite Dream Camp 2025!">
      <input type="hidden" name="_autoresponse" value="Thank you for signing up for the Fall Camp!">
      <input type="hidden" name="_next" value="https://buy.stripe.com/fZucN5gGoflR9WR6JsfIs07">
      <input type="hidden" name="_cc" value="prater.anthony.j@outlook.com">
      <button type="submit" aria-label="Submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const grade = ref('');
const age = ref('');

const submitForm = () => {
  if (!name.value || !email.value || !grade.value) {
    alert("Please fill in all fields correctly.");
    return;
  }
  console.log("Form submitted:", { name: name.value, email: email.value, grade: grade.value });
};
</script>

<style scoped>

h2 {
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #000;
  margin-bottom: 1.5rem;
  line-height: 2rem;
}

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
  background: #2f2f2f;
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
  background-color: rgba(225, 241, 225, 1);
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

button:hover,
button:focus-visible {
  scale: 0.95;
  color: rgba(0, 0, 0, 0.5);
  text-shadow: none;
}

.elite-dream {
    background-image: linear-gradient(90deg, #37ff37, #021a96);
    -webkit-background-clip: text; /* For Webkit browsers like Chrome, Safari */
    background-clip: text;
    color: transparent;
}

.highlight {
  color: var(--white, #fff);
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  font-weight: bold;
}

/* Responsive styles */
@media (max-width: 600px) {
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
</style>
