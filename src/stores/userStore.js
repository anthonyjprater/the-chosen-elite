// userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    termsAccepted: false,
    name: '',
    email: ''
  }),

  actions: {
    setTermsAccepted(value) {
      this.termsAccepted = value
    },
    setName(name) {
      this.name = name
    },
    setEmail(email) {
      this.email = email
    },
    resetUser() {
      this.termsAccepted = false
      this.name = ''
      this.email = ''
    }
  },

  getters: {
    isFormValid: (state) => {
      return state.termsAccepted && state.name.trim() !== '' && state.email.trim() !== ''
    }
  }
})
