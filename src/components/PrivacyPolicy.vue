<script setup>

import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'

const sections = ref([
    {
    id: 'information-collection',
    title: 'Information Collection and Use',
    content: `While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, postal address, phone number, and date of birth ("Personal Information").`,
    subsections: [
        {
        id: 'information-we-collect',
        title: 'Information We Collect',
        items: [
            'Personal Information: When you register for our services, we collect personal details such as your name, email address, and phone number.',
            'Minor\'s Information: For participants under 18, we collect the minor\'s name, age, and emergency contact information.',
            'Health Information: We may collect relevant health information to ensure safe participation in our basketball programs.',
            'Payment Information: When you make a purchase, we collect payment details, which may include credit card information.',
            'Usage Data: We collect information on how the Site is accessed and used ("Usage Data"). This may include your computer\'s Internet Protocol address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.'
        ]
        }
    ]
    },
    {
    id: 'use-of-data',
    title: 'Use of Data',
    content: '[Your Company Name] uses the collected data for various purposes:',
    items: [
        'To provide and maintain our Service',
        'To notify you about changes to our Service',
        'To allow you to participate in interactive features of our Service when you choose to do so',
        'To provide customer support',
        'To gather analysis or valuable information so that we can improve our Service',
        'To monitor the usage of our Service',
        'To detect, prevent and address technical issues',
        'To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information'
    ]
    },
    {
    id: 'data-security',
    title: 'Data Security',
    content: `The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.`
    },
    {
    id: 'disclosure-of-data',
    title: 'Disclosure of Data',
    content: `We may disclose your Personal Information in the good faith belief that such action is necessary to:`,
    items: [
        'Comply with a legal obligation',
        'Protect and defend the rights or property of Chosen Elite Academy',
        'Prevent or investigate possible wrongdoing in connection with the Service',
        'Protect the personal safety of users of the Service or the public',
        'Protect against legal liability'
    ]
    },
    {
    id: 'data-protection-rights',
    title: 'Your Data Protection Rights',
    content: `We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.`
    },
    {
    id: 'policy-changes',
    title: 'Changes to This Privacy Policy',
    content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.`
    },
    {
    id: 'contact-us',
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us:`,
    items: [
        'By email: chosen2handle@gmail.com',
        'By phone number: 425-299-0864'
    ]
    }
])

const expandedSections = ref({})
const userStore = useUserStore()
const { termsAccepted } = storeToRefs(userStore)

const toggleSection = (sectionId) => {
    expandedSections.value[sectionId] = !expandedSections.value[sectionId]
}

const acceptPrivacyPolicy = () => {
      userStore.setTermsAccepted(!termsAccepted.value)
}

</script>

<template>
  <section class="privacy-section">
    <div class="privacy-policy">
      <h1 id="privacy-policy-title">Privacy Policy</h1>
      <p>Last updated: 9-25-2024</p>
      <p>Chosen Elite Academy ("we", "us", or "our") operates TeamChosenElite.com. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</p>
  
      <nav aria-label="Privacy Policy Sections">
        <ul>
          <li v-for="section in sections" :key="section.id">
            <a :href="`#${section.id}`">{{ section.title }}</a>
          </li>
        </ul>
      </nav>
  
      <section v-for="section in sections" :key="section.id" :id="section.id">
        <h2>
          <button 
            @click="toggleSection(section.id)"
            :aria-expanded="expandedSections[section.id]"
            :aria-controls="`content-${section.id}`"
          >
            {{ section.title }}
            <span aria-hidden="true">{{ expandedSections[section.id] ? '▼' : '►' }}</span>
          </button>
        </h2>
        <div :id="`content-${section.id}`" v-show="expandedSections[section.id]">
          <p>{{ section.content }}</p>
          <template v-if="section.items">
            <ul>
              <li v-for="(item, index) in section.items" :key="index">{{ item }}</li>
            </ul>
          </template>
          <template v-if="section.subsections">
            <div v-for="subsection in section.subsections" :key="subsection.id">
              <h3 :id="subsection.id">{{ subsection.title }}</h3>
              <ul>
                <li v-for="(item, index) in subsection.items" :key="index">{{ item }}</li>
              </ul>
            </div>
          </template>
        </div>
      </section>
      <div class="privacy-policy-acceptance">
      <input 
        type="checkbox" 
        id="accept-privacy-policy" 
        :checked="termsAccepted"
        @change="acceptPrivacyPolicy"
        aria-describedby="privacy-policy-description"
      />
      <label for="accept-privacy-policy">I have read and agree to the Privacy Policy</label>
      <p id="privacy-policy-description" class="visually-hidden">
        By checking this box, you confirm that you have read, understood, and agree to our Privacy Policy.
      </p>
    </div>

    <RouterLink class="sign-up" :to="{ name: 'signup'}">Sign up for training</RouterLink>

    </div>
  </section>
  </template>
  
  <style scoped>

section.privacy-section {
    background: rgba(47, 47, 47, 1);
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    align-items: baseline;
    justify-content: center;
    width: 100vw;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(0deg, rgba(47,47,47,.7), rgba(0,0,0,1));
    text-align: left;
}

  .privacy-policy {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    gap: 2rem;
    padding: 2rem;
    background: rgba(33, 33, 33, 1);
    border-radius: 8px;
    filter: drop-shadow(0px 0px 5px #000);
    line-height: 1.5;
}
  
  h1, h2, h3 {
    /* color: #333; */
    line-height: 2;
    margin-block-start: 1rem;
  }
  
  button {
    background: none;
    border: none;
    font-size: 1.2em;
    color: var(--green);
    text-shadow: 1px 1px 1px #000;
    cursor: pointer;
    text-align: left;
    width: 100%;
    padding: 10px 0;
  }
  
  button:hover {
    text-decoration: underline;
  }
  
  h2 button:focus,
  h2 button:focus-visible {
    padding: 1rem;
  }

  ul {
    padding-left: 20px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav li {
    margin-bottom: 10px;
  }
  
  nav a {
    color: #0056b3;
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: underline;
  }

  p {
    text-shadow: 2px 2px 2px #000;
  }

  input {
    margin-right: 10px;
  }

  a.sign-up {
  font-weight: bold;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  text-decoration: underline;
}
  </style>