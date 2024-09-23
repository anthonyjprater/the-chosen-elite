<script setup>
import MainHeader from '@/components/headers/MainHeader.vue'

</script>
<template>
<MainHeader />
<section>
    <h2 class="hign-up">Sign up for training</h2>
    <p>Leave your contacts and we will call you back</p>
    <form id="contactform" action="https://formsubmit.co/chosen2handle@gmail.com" method="POST">
        <div class="form-inputs">
        <div>
            <!-- <label for="name">Name:</label> -->
            <input id="name" v-model="name" name="name" type="text" placeholder="Name"/>
            <span>{{ nameError }}</span>
        </div>
        <div>
            <!-- <label for="phoneNumber">Phone Number:</label> -->
            <input id="phoneNumber" v-model="phoneNumber" name="telephone" autocorrect="off" autocomplete="tel" spellcheck="false" type="tel" placeholder="Phone"/>
            <span>{{ phoneNumberError }}</span>
        </div>
        <div>
            <!-- <label for="email">Email Address:</label> -->
            <input id="email" v-model="email" type="email" name="email" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="Email"/>
            <span>{{ emailError }}</span>
        </div>
       
            <!-- <label for="message">Message:</label> -->
            <textarea maxlength="200" cols="100" rows="10" id="message" v-model="message" name="message" autocapitalize="none" autocorrect="off" spellcheck="false" data-ms-editor="true" data-ac-ext="true" placeholder="Message"></textarea>
        
        </div>
        <p class="privacy-message">By clicking button "send" you agree to the privacy policy and data processing</p>
        <button class="btn-sign-up" type="submit">Submit</button>
    </form>
</section>
</template>
<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 33, 33, 1);
  width: 100vw;
  padding: 3rem 1.5rem;
  gap: 2rem;
}

h2 {
  color: var(--green);
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  border-radius: 8px;
}

div.form-inputs {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding: 1.5rem 0;
  width: 100%;
  background: rgba(47, 47, 47, 1);
  border-radius: 8px;
}

input {
  padding: 1rem;
  width: min(250px, 100%);
  letter-spacing: 1px;
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;
  text-shadow: 1px 1px 1px var(--white);
  transition: 0.25s ease;
}

textarea {
  padding: 1rem;
  width: min(250px, 100%);
  letter-spacing: 1px;
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;
  text-shadow: 1px 1px 1px var(--white);
  transition: 0.25s ease;
  resize: none;
  height: 100px;
}

input::placeholder,
textarea::placeholder
{
  color: rgba(55, 255, 55, 0.87);
  text-shadow: 1px 1px 0px #000;
  transition: 0.25s ease-in-out;
}



input:focus::placeholder,
input:focus,
textarea:focus::placeholder,
textarea:focus
{
  color: black;
  text-shadow: 1px 1px 0px #fff;
}

input:focus,
textarea:focus
{
  background-color: rgba(55, 255, 55, 0.87);
}

div.form-inputs div {
  width: min(300px, 600px);
}



#name {
  flex-grow: 2;
}

#email {
  flex: 1;
}

#phoneNumber {
  flex-grow: 2;
}

p.privacy-message {
  font-size: 0.75rem;
}

.btn-sign-up {
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

.btn-sign-up:hover,
.btn-sign-up:focus-visible {
    scale: 0.95;
    color: rgba(0, 0, 0, 0.5);
    text-shadow: none;
}


@media (min-width: 768px) {
  div.form-inputs {
    flex: row wrap;
  }

  textarea {
    width: min(600px, 100%);
  }
}
</style>
