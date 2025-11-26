<script setup>
import { ref } from 'vue'
import MainHeader from './MainHeader.vue'
import TryoutsLink from '../links/TryoutsLink.vue'
import SpecialEventLink from '../links/SpecialEventLink.vue'

const transparent = ref(true)

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  text: {
    type: String,
    default: "",
  },
  showButton: {
    type: Boolean,
    default: false,
  },
  backGroundImage: {
    type: String,
    default: "",
  }
});

const title = ref(props.item.title);
// const description = ref(props.item.description);
const bgImage = ref(props.backGroundImage)

console.log(bgImage)
</script>

<template>
  <div class="main-hero">
    <MainHeader :isTransparent="transparent" />
    <h2 class="hero-headline" v-motion-slide-visible-once-left :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }" >{{ title }}</h2>
    <div class="links">
      <RouterLink class="sign-up" :to="{ name: 'apply-form'}">Sign up for training</RouterLink>
      
    </div>

  </div>
</template>

<style scoped>
.main-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100vw;
  background: center/ cover no-repeat url('@/assets/placeholder-bg.jpg');
  /* background-image: v-bind('bgImage'); */
  padding: 4rem 3rem;
  position: relative;
}

.main-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))
}

h2.hero-headline {
  font-size: 1.5rem;
  color: var(--white);
  width: max(30%,200px);
  text-wrap: balance;
  line-height: 1.3;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.sign-up {
  background-color: rgba(55, 255, 55, 0.87);
  padding: 0.35em 1em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  color: var(--white);
  font-weight: bold;
  letter-spacing: 1px;
  z-index: 2;
}

.sign-up:focus-visible,
.sign-up:hover {
    scale: 0.95;
    color: rgba(255, 255, 255, 1);
    text-shadow: none;
}

.main-hero > header {
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 3;
}

.main-nav ul {
  background-color: transparent;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}
.links > a {
  width: 100%;
  text-align: center;
}
.links > a:hover {
  scale: 0.95;
  color: rgba(255, 255, 255, 1);
  text-shadow: none;
}
.links > a:focus-visible {
  scale: 0.95;
  color: rgba(255, 255, 255, 1);
  text-shadow: none;
}
.links > a.sign-up {
  padding: 1em 1.5em;
}
.links > a.tryouts {
  padding: 0.35em 1em;
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


@media (min-width: 768px) {
  .main-hero {
    height: 95vh;
    gap: 5rem;
    padding: 5rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .sign-up {
    padding: 1em 1.5em;
  }

  h2.hero-headline {
    font-size: 2.5rem;
  }

}
</style>
