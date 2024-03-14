<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  isTransparent: {
    type: Boolean,
    default: true,
  },
})

const isHidden = ref(true);
const isHiddenSub = ref(true);
const hideClass = ref(true);

const navigation = ref()
const team = ref()
const programs = ref()

function getImageUrl(name, ext) {
  return new URL(`../../assets/${name}.${ext}`, import.meta.url).href
}

// const window = globalThis.window;

// window.addEventListener('resize', () => {
//       if (window.innerWidth > 768 ) {
//         toggleHideClass()
//         console.log(window.innerWidth)
//       } 
//   console.log(isHidden)
// })

onMounted(() => {
  if ( window.innerWidth > 768 ) {
    toggleHideClass()
    // console.log(window.innerWidth)
  }

  window.addEventListener('scroll', () => {
  // console.log(window.scrollY)
  if ( window.scrollY >= 650 && window.innerWidth > 768 ){
    navigation.value.style.opacity = 0
  } else {
    navigation.value.style.opacity = 1
  }
})
})



const toggleHideClass = () => {
  isHidden.value = !isHidden.value
  // hideClass.value === 'hide' ? '' : 'hide';
}

const toggleHideSubClass = () => {
  isHiddenSub.value = !isHiddenSub.value
}

const toggleHideSubClassMenu = () => {
  hideClass.value = !hideClass.value
}



</script>

<template>
    <header class="header" :class="{ transparent: props.isTransparent }">
        <RouterLink :to="{ name: 'home'}" class="logo-link">
          <img :src="getImageUrl('elite-logo', 'svg')" class="logo" alt=""/>
          <span class="sr-only">Go to Team Chosen Elite Home Page</span>
        </RouterLink>
        <nav id="navigation" class="main-nav">
          <a href="#main" class="skip-link">Skip navigation</a>
            <button class="menu-trigger" @click="toggleHideClass">
            <svg class="icon" viewBox="0 0 30 30">
            <path
                    d="M0 6h28v3h-28v-3zM0 14h28v3h-28v-3zM0 22h28v3h-28v-3z"
            ></path>
            <!-- <path d="M31 14l6 6 6-6z"></path> -->
            </svg>
            <span class="sr-only">Main menu</span>
            </button>
            <ul class="team" :class="[{ transparent: isTransparent }, { hide: isHidden }]" ref="navigation">
                <li class="has-sub-menu">
                  <button class="sub-menu-trigger" data-button="menu-btn" @click="toggleHideSubClass">Elite Team</button>
                  <ul :class="[{ hidden: isHiddenSub }]" class="sub-menu"  ref="team">
                    <RouterLink :to="{ name: 'home'}">Home</RouterLink>
                    <RouterLink :to="{ name: 'about-us'}">About Us</RouterLink>
                    <RouterLink :to="{ name: 'team-coaches'}">Coaches</RouterLink>
                    <li><a href="#">Merch</a></li>
                  </ul>
                </li>
                <li class="has-sub-menu">
                  <button class="sub-menu-trigger" data-button="program-btn" @click="toggleHideSubClassMenu">Training Programs</button>
                  <ul :class="[{ hidden: hideClass }]" class="sub-menu programs"  ref="programs">
                    <li><RouterLink :to="{ name: 'youth'}">Children</RouterLink></li>
                    <li><RouterLink :to="{ name: 'amateur'}">Amateur</RouterLink></li>
                    <li><RouterLink :to="{ name: 'professional'}">Advanced</RouterLink></li>
                  </ul>
                </li>
                <li><RouterLink :to="{ name: 'references'}">References</RouterLink></li>
                <li><RouterLink :to="{ name: 'photo-gallery'}">Gallery</RouterLink></li>
                <li><RouterLink :to="{ name: 'news'}">News</RouterLink></li>
                <li><RouterLink :to="{ name: 'contact'}">Contact</RouterLink></li>
                <li><RouterLink :to="{ name: 'training-grounds'}">Training Grounds</RouterLink></li>
                <li><RouterLink :to="{ name: 'apply-form'}">Apply</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

/* HEADER STYLES */
header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  background-color: var(--grey);
  margin-bottom: 2rem;
}
header.transparent {
  background: rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

nav.main-nav ul.transparent {
  background: rgba(0, 0, 0, 0.9);
}

.logo-link {
  z-index: 3;
}

.logo {
  width: 3em;
  height: 3em;
  padding: 1px 5px;
  margin: 0 0 0 1ch;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}


/* NAV STYLES */
button {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  /*-webkit-appearance: button;*/
  border: 0;
  background: none;
}

button:hover {
  cursor: pointer;
}

button:hover,
button:focus,
button:active {
  background: none;
  border-color: inherit;
  border-radius: 0;
}

.skip-link {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

.skip-link:focus {
  clip: unset;
  clip-path: unset;
  height: auto;
  width: auto;
  margin: 0;
  padding: 1rem 1.5rem;
  background: white;
  z-index: 1;
}

.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

.icon {
  display: inline-block;
  width: 2rem;
  height: 2em;
  stroke-width: 0;
  stroke: currentColor;
  fill: var(--white);
}

.main-nav {
  position: relative;
  width: fit-content;
}

.main-nav ul,
.main-nav ul ul {
  position: absolute;
  max-width: fit-content;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  left: -50px;
  z-index: 1;
  color: var(--white);
  background: var(--grey);
  z-index: 3;
}

.main-nav li {
  position: relative;
}

.main-nav ul ul a {
  margin-inline-end: 0.95rem;
}

.main-nav a,
.menu-trigger,
.sub-menu-trigger {
  display: block;
  margin-block-end: 1ch;
  margin-inline-end: 1ch;
  padding: 0.3rem 0.3rem;
  color: inherit;
  text-decoration: none;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-weight: bold;
}

.main-nav ul.sub-menu {
  left: -100px;
  top: 0;
}

.main-nav a:hover,
.main-nav a:focus,
.menu-trigger:hover,
.menu-trigger:focus,
.has-sub-menu:hover,
.has-sub-menu:focus {
  color: white;
  border-color: black;
}
.main-nav ul.hide,
.main-nav ul ul.hidden {
  display: none;
}

@media(min-width: 768px) {

header {
  gap: 3rem;
  font-size: 1rem;
}

.logo {
  width: 5rem;
  height: 5rem;
}

.sub::after {
  display: inline-block;
  margin-inline-start: 0.5rem;
  content: "▶";
  transform: rotate(90deg);
}

.menu-trigger {
  display: none;
}

.main-nav ul {
  position: relative;
  flex-direction: row;
  padding: 0.5rem 0 0 0;
  font-weight: bold;
  z-index: 3;
}

.main-nav ul ul {
  position: relative;
  max-width: initial;
  left: 0;
}

.main-nav ul.sub-menu {
  left: 0;
}
.sub-menu-trigger {
  line-height: 1.5;
}

.sub-menu {
  background: var(--grey);
}

.main-nav > ul li:hover:not(.open) {
  border-bottom: 3px solid var(--green);
}

.main-nav {
  align-self: start;
}

.main-nav > ul {
  gap: 1rem;
}

.apply {
  background-color: var(--green);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  padding: 0.75em 1.5em;
  border-radius: 8px;
}

.apply:hover,
.apply:focus-visible {
  scale: 0.95;
}

}

</style>