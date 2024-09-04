import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import Modals from './plugins/modals'
import { MotionPlugin } from '@vueuse/motion'
import VWave from 'v-wave'
import { createPinia } from 'pinia'
import './registerServiceWorker'
import { createHead } from '@unhead/vue'

const head = createHead()
const pinia = createPinia()
// createApp(App).use(Modals).mount('#app')

createApp(App)
  .use(head)
  .use(router)
  .use(Modals)
  .use(MotionPlugin)
  .use(VWave)
  .use(pinia)
  .mount('#app')

// MENU NAVIGATION-------------------------------------------------------------------------------------------------------
const nav = document.querySelector('.main-nav')
const trigger = document.querySelector('.menu-trigger')
const menu = document.querySelector('.main-nav ul')
const footerMenu = document.querySelectorAll('.footer-sub-menu')

// Hide menu on open.
menu.classList.add('hide')

// Toggle menu open/closed.
const toggleMenu = (status) => {
  if (status == 'false') {
    menu.classList.remove('hide')
    trigger.setAttribute('aria-expanded', 'true')
    trigger.setAttribute('aria-label', 'Close submenu.')
  } else {
    menu.classList.add('hide')
    trigger.setAttribute('aria-expanded', 'false')
    trigger.setAttribute('aria-label', 'Open submenu.')
  }
}

// Set initial state for the button.
// trigger.setAttribute('aria-expanded', 'false')
// trigger.setAttribute('aria-label', 'Open submenu.')

// Listen for button click
trigger.addEventListener('click', function () {
  const status = trigger.getAttribute('aria-expanded')
  toggleMenu(status)
})

// Close menu when user tabs outside the menu.
document.addEventListener('focusin', (e) => {
  if (e.target.closest('nav') !== nav && window.innerWidth < 800) {
    toggleMenu(true)
  }
})

// Close menu when user clicks outside the menu.
document.addEventListener('click', (e) => {
  if (e.target.closest('nav') !== nav && window.innerWidth < 800) {
    toggleMenu(true)
  }
})

// UNHIDE MENU ON LARGE SCREENS
if (window.innerWidth > 768) {
  menu.classList.remove('hide')
}

// SUB-MENU NAVIGATION-------------------------------------------------------------------------------
// Find all sub-menus.
const subMenus = document.querySelectorAll('.main-nav ul ul')
// Find all sub-menu trigger buttons. */
const menuTriggers = document.querySelectorAll('.sub-menu-trigger')

// Hide all sub-menus.
subMenus.forEach((subMenu) => {
  subMenu.classList.add('hide')
})

/**
 * Toggle sub-menu open/closed.
 * @param {DOM node} parent
 * @param {boolean} status
 */
const toggleSubMenu = (parent, status) => {
  const trigger = parent.querySelector('button')
  const subMenu = parent.querySelector('ul')
  if (status == 'false') {
    parent.classList.add('open')
    subMenu.classList.remove('hide')
    trigger.setAttribute('aria-expanded', 'true')
    trigger.setAttribute('aria-label', 'Close news menu.')
  } else {
    parent.classList.remove('open')
    subMenu.classList.add('hide')
    trigger.setAttribute('aria-expanded', 'false')
    trigger.setAttribute('aria-label', 'Open news menu.')
  }
}

// For each trigger button:
// - add a down-arrow
// - set aria attributes
// - add event listener
menuTriggers.forEach((trigger) => {
  trigger.classList.add('sub')
  trigger.setAttribute('aria-expanded', 'false')
  trigger.setAttribute('aria-label', 'Open news menu.')
  trigger.addEventListener('click', function () {
    const parent = trigger.parentElement
    const status = trigger.getAttribute('aria-expanded')
    toggleSubMenu(parent, status)
  })
})

// Close sub-menus when user tabs outside menu.
document.addEventListener('focusin', (e) => {
  let currentSubMenu = document.querySelector('.open')
  if (
    currentSubMenu &&
    e.target.closest('.has-sub-menu') !== currentSubMenu &&
    window.innerWidth < 768
  ) {
    toggleSubMenu(currentSubMenu, true)
  }
})

// Close sub-menus when user clicks outside menu.
document.addEventListener('click', (e) => {
  let currentSubMenu = document.querySelector('.open')
  if (
    currentSubMenu &&
    e.target.closest('.has-sub-menu') !== currentSubMenu &&
    window.innerWidth < 768
  ) {
    toggleSubMenu(currentSubMenu, true)
  }
})

// // FOOTER NAVIGATION-------------------------------------------------------------------
const footerSubMenus = document.querySelectorAll('.footer-nav ul ul')
// Find all sub-menu trigger buttons. */
const footerMenuTriggers = document.querySelectorAll('.footer-nav-trigger')

// Hide all sub-menus.
footerSubMenus.forEach((subMenu) => {
  subMenu.classList.add('hide')
})

/**
 * Toggle sub-menu open/closed.
 * @param {DOM node} parent
 * @param {boolean} status
 */
const toggleFooterSubMenu = (parent, status) => {
  const trigger = parent.querySelector('button')
  const subMenu = parent.querySelector('ul')
  if (status == 'false') {
    parent.classList.add('open')
    subMenu.classList.remove('hide')
    trigger.setAttribute('aria-expanded', 'true')
    trigger.setAttribute('aria-label', 'Close news menu.')
  } else {
    parent.classList.remove('open')
    subMenu.classList.add('hide')
    trigger.setAttribute('aria-expanded', 'false')
    trigger.setAttribute('aria-label', 'Open news menu.')
  }
}

// For each trigger button:
// - add a down-arrow
// - set aria attributes
// - add event listener
footerMenuTriggers.forEach((trigger) => {
  trigger.classList.add('sub')
  trigger.setAttribute('aria-expanded', 'false')
  trigger.setAttribute('aria-label', 'Open news menu.')
  trigger.addEventListener('click', function () {
    const parent = trigger.parentElement
    const status = trigger.getAttribute('aria-expanded')
    toggleFooterSubMenu(parent, status)
  })
})

// Close sub-menus when user tabs outside menu.
document.addEventListener('focusin', (e) => {
  let currentSubMenu = document.querySelector('.open')
  if (
    currentSubMenu &&
    e.target.closest('.has-sub-menu') !== currentSubMenu &&
    window.innerWidth < 768
  ) {
    toggleFooterSubMenu(currentSubMenu, true)
  }
})

// Close sub-menus when user clicks outside menu.
document.addEventListener('click', (e) => {
  let currentSubMenu = document.querySelector('.open')
  if (
    currentSubMenu &&
    e.target.closest('.has-sub-menu') !== currentSubMenu &&
    window.innerWidth < 768
  ) {
    toggleFooterSubMenu(currentSubMenu, true)
  }
})

// footerMenu.forEach((subMenu) => {
//   if (window.innerWidth > 768) {
//     subMenu.classList.remove('hide')
//   }
// })

function reportWindowSize() {
  footerMenu.forEach((subMenu) => {
    // if (window.innerWidth > 768) {
    //   subMenu.classList.remove('hide')
    // }
    window.innerWidth > 768 ? subMenu.classList.remove('.hide') : subMenu.classList.add('.hide')
  })
}

window.onresize = reportWindowSize
