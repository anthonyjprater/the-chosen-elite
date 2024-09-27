<script>

import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'ConditionalLink',
  props: {
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const userStore = useUserStore()
    const { termsAccepted } = storeToRefs(userStore)

    const isLinkEnabled = computed(() => termsAccepted.value)

    const handleClick = (event) => {
      if (!isLinkEnabled.value) {
        event.preventDefault()
        alert('Please accept the terms and conditions to proceed.')
      }
    }

    return {
      isLinkEnabled,
      handleClick
    }
  }
}

</script>

<template>
  <a 
    :href="href" 
    @click="handleClick" 
    :class="{ 'disabled': !isLinkEnabled }"
    :aria-disabled="!isLinkEnabled"
  >
    {{ text }}
  </a>
</template>

<style scoped>
a { 
    color: white;
    text-decoration: none;
    position: relative;
  
}

a:hover {
    color: white;
    text-decoration: none;
}

a.disabled {
    /* background-color: rgba(255,0,0,0.5); */
    color: #008CBA;
    pointer-events: none;
    text-decoration: none;
    border: none;
    position: relative;
}

a.disabled::before {
    position: absolute;
    inset: 0;
    color: #fff;
    content: 'Please Review Our Terms of Service Agreement';
    font-size: 0.75rem;
    text-shadow: 1px 1px 1px #000;
    letter-spacing: 0.5px;
}
</style>