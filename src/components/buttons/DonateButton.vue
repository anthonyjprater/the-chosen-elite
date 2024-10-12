<script setup>

</script>

<template>
    <a class="sign-up" href="https://donate.stripe.com/test_fZeaGm95tdytgBqfYY">Donate</a>
</template>

<style scoped>
a.sign-up {
  background-color: rgba(55, 255, 55, 0.87);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  color: var(--white);
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  z-index: 2;
}

a.sign-up:focus-visible,
a.sign-up:hover {
    scale: 0.95;
    color: rgba(255, 255, 255, 1);
    text-shadow: none;
}

a.sign-up {
    padding: 1.25em 2.5em;
  }
</style>