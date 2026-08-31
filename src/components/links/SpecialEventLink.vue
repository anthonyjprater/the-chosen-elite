<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<!--
    <RouterLink class="sign-up pulse-link" :to="{ name: 'tryouts'}">Team Chosen Tryouts</RouterLink>
-->

  <a href="https://pci.jotform.com/form/251396985429070" class="sign-up pulse-link">Team Chosen Tryouts</a>

  </template>

<style scoped>
a.sign-up {
  background-color: rgba(55, 255, 55, 0.87);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  color: var(--white);
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
    padding: 1em 1.5em;
  }
</style>
