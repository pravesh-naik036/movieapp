import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    users : [
        { id: 1, name: 'John Doe', username: 'john', password: 'password123', role: 'user' },
        { id: 2, name: 'Jane Smith', username: 'jane', password: 'password456', role: 'user' },
        { id: 3, name: 'Admin User', username: 'admin', password: 'admin123', role: 'admin' }
      ],
      reviews:[],
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    userRole: (state) => state.user?.role
  },

  actions: {
    login(userData) {
      this.user = userData;
    },
    logout() {
      this.user = null;
    },
    addReview(review) {
        this.reviews.push(review);
    }
  }
});
