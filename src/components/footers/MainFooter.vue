<script setup>

function getImageUrl(name, ext) {
  return new URL(`../../assets/${name}.${ext}`, import.meta.url).href
}

</script>

<template>
    <footer role="contentinfo">
        <a href="#" data-v-ff36cf16=""><img :src="getImageUrl('elite-logo', 'svg')" class="logo" alt="" data-v-ff36cf16=""><span class="sr-only" data-v-ff36cf16="">Go to Team Chosen Elite Home Page</span></a>
        <div class="footer-nav">
            <ul>
                <li class="has-sub-menu">
                  <button class="footer-nav-trigger">General</button>
                  <ul class="footer-sub-menu">
                    <li><RouterLink :to="{ name: 'references'}">References</RouterLink></li>
                    <li><RouterLink :to="{ name: 'photo-gallery'}">Gallery</RouterLink></li>
                    <li><RouterLink :to="{ name: 'news'}">News</RouterLink></li>
                    <li><RouterLink :to="{ name: 'contact'}">Contact</RouterLink></li>
                    <li><RouterLink :to="{ name: 'training-grounds'}">Training Grounds</RouterLink></li>
                  </ul>
                </li>
                <li class="has-sub-menu">
                  <button class="footer-nav-trigger">Programs</button>
                  <ul class="footer-sub-menu">
                    <li><RouterLink :to="{ name: 'youth'}">Children</RouterLink></li>
                    <li><RouterLink :to="{ name: 'amateur'}">Amateur</RouterLink></li>
                    <li><RouterLink :to="{ name: 'professional'}">Advanced</RouterLink></li>
                    <li><RouterLink :to="{ name: 'apply-form' }">Apply</RouterLink></li>
                  </ul>
                </li>
                <li class="has-sub-menu">
                  <button class="footer-nav-trigger">Academy</button>
                  
                  <ul class="footer-sub-menu">
                      <li><RouterLink :to="{ name: 'about-us' }">About Us</RouterLink></li>
                      <li><RouterLink :to="{ name: 'team-coaches'}">Coaches</RouterLink></li>
                      <li><a href="/merch">Merch</a></li>
                  </ul>
                </li>
            </ul>
        </div>
        <address>
          <div class="footer-links">
            <div>
              <a href="mailto:nash.pluto@pmail.verse"><i class="fa-solid fa-phone"></i></a>
              <a href="mailto:nash.pluto@pmail.verse">tgprater81@gmail.com</a></div>
            <div>
              <a href="tel:+15555555555"><i class="fa-regular fa-envelope"></i></a>
              <a href="tel:+15555555555">(425) 299-0864</a></div>
            <div class="social-links">
              <a href=""><i class="fa-sharp fa-solid fa-paper-plane"></i></a>
              <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>
          <div class="copyright">
            <small>Copyright &copy; Chosen Elite Basketball Academy</small>
            <small>All rights reserved</small>
          </div>
        </address>
    </footer>
</template>

<style scoped>

footer {
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey);
  /* margin-top: 2rem; */
  padding: 1rem;
}

footer .logo {
    width: 7em;
    height: 7em;
}

.footer-nav {
  width: 90%;
  padding: 1rem 0;
}

.footer-nav > ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
}

.footer-nav ul ul.hide {
  display: none;
}


.sub::after {
  display: inline-block;
  margin-inline-start: 0.5rem;
  content: "▶";
  transform: rotate(90deg);
}


.footer-nav > ul li {
  width: 100%;
  list-style-type: none;
}

button.footer-nav-trigger {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em 0.5em;
  color: var(--white);
  text-transform: uppercase;
  background: transparent;
  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);
  border-radius: 0;
}
.footer-nav-trigger:hover,
.footer-nav-trigger:focus {
    background: var(--green);
    cursor: pointer;
    border-color: none;
}

.footer-nav-trigger:focus {
    outline: 1px solid rgba(255,255,255,0.7);
    outline-offset: -4px;
}

.footer-nav-trigger:active {
    transform: scale(0.99);
}
.footer-nav-trigger::after {
  display: inline-block;
  margin-inline-start: 0.5rem;
  color: var(--white);
  font-size: 0.75em;
  content: "▶";
  transform: rotate(90deg);
}

.footer-sub-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
}

footer address {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  gap: 2rem;
  padding: 2rem 0;
  font-size: 0.9rem;
}

address .footer-links {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.25rem;
}

address i {
  padding: 0.5em;
  border-radius: 50%;
  margin: 0 5px 0 0;
  color: var(--grey);
  background: var(--green);
}

address .social-links {
  align-self: center;
  display: flex;
  gap: 0.75rem;
}

address .copyright {
  display: flex;
  flex-direction: column;
  color: var(--white);
}

@media (min-width: 768px) {
  
  footer {
    flex-flow: column wrap;
    max-height: 400px;
    align-items: baseline;
  }

  footer address {
    width: 30%;
    align-items: baseline;
    padding: 1rem;
  }
  footer .footer-nav {
    order: 1;
    flex-grow: 2;
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding: 2rem;
    width: 65%;
  }

  .footer-nav > ul {
    flex-direction: row;
    width: 100%;
    align-items: baseline;
  }

  button.footer-nav-trigger {
    border: none;
    padding: 1em 0;
    color: var(--green);
  }

  button.footer-nav-trigger::after {
  display: none;
  }

  button.footer-nav-trigger:hover,
  button.footer-nav-trigger:focus {
    color: var(--green);
    background-color: transparent;
    outline: none;
    width:max-content;
    text-shadow: 1px 1px 1px rgba(255, 255, 255 0.5);
    scale: 0.95;
  }

  button.footer-nav-trigger:active {
    background-color: transparent;
  }
  
  li.has-sub-menu {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  .footer-sub-menu {
    text-align: left;
  }

  .footer-links div {
    align-self: baseline;
  }

  address .copyright {
    align-items: baseline;
  }

  
  
}
</style>
