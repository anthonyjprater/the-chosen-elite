<template>
 
</template>

  

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const grade = ref('');

const submitForm = () => {
  if (!name.value || !email.value || !grade.value) {
    alert("Please fill in all fields correctly.");
    return;
  }
  console.log("Form submitted:", { name: name.value, email: email.value, grade: grade.value });
};
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
  

button:focus-visible {
  scale: 0.95;
  color: rgba(0, 0, 0, 0.5);
  text-shadow: none;
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
