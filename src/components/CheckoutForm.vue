<script setup>
import PaymentLinks from '@/components/PaymentLinks.vue'
</script>

<template>
    
    <h1>
        Basketball Training Registration
    </h1>
    <p>
        Thank you for choosing our basketball training program! You're just one step away from enhancing your skills on the court. Please review your selected options below and proceed to the secure payment page to complete your registration.
    </p>
    <h2>
        Ready to Elevate Your Game?
    </h2>
    <p>
        Click the button below to proceed to our secure payment page. You'll be able to review all details one last time before completing your purchase.
    </p>
    <p>
        Proceed to Secure Payment
    </p>
    <h3>
        Secure Payment Guarantee
    </h3>
    <p>
        We use industry-standard encryption to protect your personal and financial information. Your payment will be processed securely, and your data will never be shared with third parties.
    </p>
    <h2>
        Need Assistance?
    </h2>
    <p>
        If you have any questions or need help with your registration, please don't hesitate to contact our support team:
    </p>

    <ul>
        <li><a href="mailto:chosen2handle@gmail.com">Email: chosen2handle@gmail.com</a></li>
        <li><a href="tel:+4252990864">Phone: (425) 299-0864</a></li>
    </ul>
    <p>
        We're excited to have you join our training program and can't wait to see you on the court!
    </p>
    
    <PaymentLinks />

    <p class="terms-acceptance">
        By proceeding to the payment page, you agree to our <RouterLink to="/terms">Terms of Service</RouterLink> and <RouterLink to="/privacy">Privacy Policy</RouterLink>. You also acknowledge that you have read and understood the Terms of Service and Privacy Policy.
    </p>

</template>

<style scoped>

h1,h2,h3 {
  text-shadow: 1px 1px 1px #000;
  padding: 1rem;
}

h2 {
  color: var(--green);
}

p {
    text-shadow: 1px 1px 0px #000;
}

ul {
    display: flex;
    flex-direction: column;
    align-items: left;
}

li {
    text-align: left;
}

p.terms-acceptance {
    font-size: 0.75rem;
}

a:hover {
    text-shadow: 1px 1px 1px #000;
    color: var(--green);
    text-decoration: none;
}

</style>
