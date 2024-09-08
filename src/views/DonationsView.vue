<script setup>
import MainHeader from '@/components/headers/MainHeader.vue'
import DonationForm from '@/components/DonationForm.vue'

</script>

<template>
  <MainHeader />
  <section>
    <h1>The Chosen Elite: Empowering Every Child's Athletic Dreams</h1>
    <p>At The Chosen Elite, we believe that every child is both chosen and elite. Our mission is to provide all players, regardless of their skill level, disability, or financial situation, the opportunity to participate in our program and pursue their athletic aspirations.</p>
    <h2>Our Commitment</h2>
    <p>We strive to create an inclusive environment where every player can be part of something special. To make this possible, we rely on the generous support of our community through charitable donations.</p>
    <h2>How You Can Help</h2>
    <p>We welcome partnerships with businesses, individuals, and companies who share our vision. As a Non-Profit 501(c)(3) organization, all donations to The Chosen Elite are tax-deductible.</p>
    <p>Your contributions enable us to:</p>
    <ul>
        <li>Provide financial assistance to players who can't afford team fees</li>
        <li>Organize youth camps and clinics for the community</li>
        <li>Maintain and improve our programs</li>
    </ul>
    <h2>Become a Partner or Sponsor</h2>
    <p>Interested in making a difference? Contact us for information on partnership and sponsorship opportunities.</p>
    <h2>Tax Information</h2>
    <p>The Chosen Elite's Tax-ID Number and related documents are available upon request.</p>
    <p>Together, we can ensure that every child has the chance to shine on and off the field.</p>
  </section>
  <DonationForm />
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

h5 {
  background: var(--green);
  text-shadow: 1px 1px 1px #000;
  padding: 1rem;
}

h1 {
  font-size: 1.5rem;
  text-align: left;
  text-wrap: balance;
}

section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    /* justify-content: center; */
    text-align: left;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}

section article:not(:last-child) {
  border-bottom: 2px solid var(--green);
  /* padding: 1rem; */
}

section article {
  padding: 1rem;
}


article {
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
  height: auto;
}

img,h2,h3,p {
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 1rem;
  /* font-weight: normal; */
  color: var(--green);
}

@media(min-width: 1200px) {
  section {
        padding: 3rem 7.5rem;
    }

  h1 {
    font-size: 2.5rem;
  }

  article {
  display: flex;
  flex-flow: row;
  /* align-items: center; */
  gap: 4rem;
  }

  article > * {
    max-width: 50%;
  }

  section article {
  padding: 0;
}

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  div {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
}

</style>