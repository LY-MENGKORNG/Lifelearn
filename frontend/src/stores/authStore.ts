import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: ref<boolean>(false),
    user: ref<User>(),
  }),
  actions: {
    register: (user: User) => {

    },
    login: () => {

    },
    logout: () => {

    }
  }
})
