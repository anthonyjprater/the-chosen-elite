<script setup>
import { ref, onMounted } from 'vue'

const termsAccepted = ref(false)
const showFullTerms = ref(false)

const toggleFullTerms = () => {
    showFullTerms.value = !showFullTerms.value
}

const acceptTerms = () => {
    termsAccepted.value = !termsAccepted.value
    // Here you might want to send this information to your backend or store it in local storage
    // localStorage.setItem('termsAccepted', termsAccepted.value)
}

onMounted(() => {
    // Check if terms have been previously accepted (e.g., from localStorage)
    // termsAccepted.value = localStorage.getItem('termsAccepted') === 'true'
    })



</script>
  
<template>
    <section>
        <div class="terms-of-service">
          <h1 id="tos-title">Terms of Service Agreement</h1>
        
          <p>Welcome to The Chosen Elite Academy ("we," "our," or "us"). By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms").</p>
        
          <button
            @click="toggleFullTerms"
            :aria-expanded="showFullTerms"
            aria-controls="full-terms"
          >
            {{ showFullTerms ? 'Hide Full Terms' : 'Show Full Terms' }}
          </button>
        
          <div v-if="showFullTerms" id="full-terms" aria-labelledby="tos-title">
            <h2>1. Services</h2>
            <p>We provide basketball instruction and training services for both adults and children. Our services may include, but are not limited to, in-person training sessions, online coaching, instructional videos, and written materials.</p>
        
            <h2>2. User Accounts</h2>
            <p>2.1. You may need to create an account to access certain features of our website. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
            <p>2.2. You must provide accurate, current, and complete information during the registration process and keep your account information updated.</p>
        
            <h2>3. User Conduct</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:</p>
            <ul>
              <li>3.1. Use our services in any way that violates any applicable local, state, national, or international law or regulation.</li>
              <li>3.2. Impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity.</li>
              <li>3.3. Transmit any content that is unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene, or otherwise objectionable.</li>
            </ul>
        
            <!-- Add more sections here -->
        
            <h2>10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <RouterLink to="/contact">TeamChosenElite.com</RouterLink>.</p>
          </div>
        
          <div class="terms-acceptance">
            <input
              type="checkbox"
              id="accept-terms"
              :checked="termsAccepted"
              @change="acceptTerms"
              aria-describedby="terms-description"
            />
            <label for="accept-terms">I have read and agree to the Terms of Service</label>
            <p id="terms-description" class="visually-hidden">
              By checking this box, you confirm that you have read, understood, and agree to be bound by our Terms of Service.
            </p>
          </div>
        </div>
    </section>
</template>


<style scoped>

section {
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

div.terms-of-service {
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

h2 {
    line-height: 2;
    margin-block-start: 1rem;
}

a {
    text-decoration: underline;
}

.terms-acceptance input {
  margin-right: 0.5rem;
}

</style>