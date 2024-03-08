<script setup>

function getImageUrl(name, ext) {
  return new URL(`../assets/${name}.${ext}`, import.meta.url).href
}

</script>

<template>
    <section class="headcoach-bio">
        <div>
            <article>
                <h2>Head coach - Timothy Prater </h2>
                <p class="headcoach-details">Tim P. is an exceptional basketball training coach with a relentless dedication to the game. His expertise and motivating approach inspire athletes to surpass their limits, fostering a generation of skilled players. With a focus on fundamentals and strategic prowess, Tim P. has become a guiding force for aspiring ballers seeking to elevate their game to new heights. #BasketballCoach #TrainingGuru</p>
            </article>
            <h3>Accomplishments</h3>
            <ul>
                <li>NBA First Place Cup 2023</li>
                <li>Coach of the Year</li>
                <li>Coach of the Year</li>
                <li>Coach of the Year</li>
            </ul>
            <h3>Method</h3>
            <ul>
                <li>NBA First Place Cup 2023</li>
                <li>Coach of the Year</li>
                <li>Coach of the Year</li>
                <li>Coach of the Year</li>
            </ul>
        </div>
        <img :src="getImageUrl('coach','png')" alt="" width="320px" height="480px">
        <RouterLink class="sign-up" :to="{ name: 'apply-form'}">Sign up for training</RouterLink>
    </section>
</template>

<style scoped>
section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-direction: column;
    align-items: baseline;
    /* justify-content: center; */
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
}

section div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
}

h2 {
    font-size: 1.2rem;
}

article {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1rem;
}

ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 0 0 0 1.5rem;
}

img {
    width: 100%;
    height: auto;
    background: #000;
}

.sign-up {
  background-color: rgba(55, 255, 55, 0.87);
  padding: 0.35em 1em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  color: var(--white);
  font-weight: bold;
  letter-spacing: 1px;
  z-index: 2;
  /* align-self: center; */
}

.sign-up:focus-visible,
.sign-up:hover {
    scale: 0.95;
    color: rgba(0, 0, 0, 0.5);
    text-shadow: none;
}

@media(min-width: 768px) {

    section {
        position: relative;
    }

    div {
        width: 50vw;
    }

    img {
        width: min(500px, 50%);
        order: 3;
        position: absolute;
        top: -20px;
        left: 60%;
    }
    button.sign-up {
    padding: 1em 1.5em;
    align-self: flex-start;
  }
}

</style>
