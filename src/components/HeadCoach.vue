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
                <p class="headcoach-details">Meet Timothy Prater, a basketball virtuoso hailing from the heart of Louisiana. From a tender age, Timothy's love affair with basketball ignited a flame that would shape his destiny. Fuelled by an unwavering passion and an unyielding work ethic, he embarked on a journey marked by dedication and innovation.</p>

<p>Timothy's basketball journey began as a varsity player in 8th grade, setting the stage for a remarkable career trajectory. Yet, his story transcends mere accolades; it's a testament to his commitment to the game he loves. After years of honing his skills on the court, he felt a calling to give back, to impart his knowledge and expertise to the next generation of hoop dreamers.</p>

<p>His foray into coaching was a natural evolution, driven by a desire to nurture talent and cultivate greatness. As he trained a group of local high school kids, he witnessed their transformation, their ascent to collegiate and even professional ranks. It was a realization of the profound impact of skill development, of unlocking potential and instilling a mindset of excellence.</p>

<p>But Timothy's coaching philosophy extends beyond the basics; it's about instilling versatility and adaptability. He believes in crafting not just players, but complete athletes, capable of excelling in any position on the court. With a focus on ball handling prowess, he earned the moniker "ChosenHandle," a testament to his legendary skills and innovative training methods.</p>

<p>As an exceptional basketball trainer, Coach Prater embodies excellence and dedication. His unique blend of expertise and inspiration empowers athletes to transcend their limitations and reach new heights. With a strategic focus on fundamentals and tactical brilliance, he's become a beacon of guidance for aspiring ballers worldwide.</p>

<p>Join Coach Tim on a journey of transformation, where passion meets purpose, and greatness knows no bounds. Elevate your game with the #BasketballCoach #TrainingGuru who's redefining the art of basketball mastery.</p>
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
        <img :src="getImageUrl('coach_tim','png')" alt="" width="320px" height="480px">
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
