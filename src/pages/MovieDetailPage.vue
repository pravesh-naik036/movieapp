<template>
    <q-page class="q-pa-md">
      <div v-if="movie">
        <h1>{{ movie.title }} ({{ movie.year }})</h1>
        <p><strong>Genre:</strong> {{ movie.genre }}</p>
        <p><strong>Director:</strong> {{ movie.director }}</p>
        <p><strong>Rating:</strong> {{ movie.rating }}</p>
        <p><strong>Cast:</strong> {{ movie.cast.join(', ') }}</p>
  
        <!-- Review and Rating Form -->
        <q-form @submit.prevent="submitReview">
          <q-input
            v-model="reviewText"
            label="Your Review"
            filled
            type="textarea"
            rows="5"
          />
          <!-- Rating Input -->
          <q-rating
            v-model="rating"
            color="amber"
            icon="star"
            max="5"
            filled
            size="30px"
          />
         <br/>
         <br/>
          <q-btn label="Submit Review" type="submit" color="primary" />
        </q-form>
  
        <p v-if="reviewSubmitted" class="text-positive">
          Your review has been submitted!
        </p>
  
        <!-- Display Submitted Review and Rating -->
        <!-- <div v-if="reviewSubmitted">
          <h4>Your Review:</h4>
          <p><strong>Rating:</strong> {{ rating }} / 5</p>
          <p><strong>Review:</strong> {{ reviewText }}</p>
        </div>
      </div> -->
      <!-- <div v-else>
        <p>Movie not found.</p>
      </div> -->
      </div>
    </q-page>
  </template>
  
  
  <script>
import movies from "src/data/movies.json";
import { useAuthStore } from 'src/stores/authStores';
const authStore = useAuthStore();

export default {
  data() {
    return {
      reviewText: '',
      rating: 0,  // To store the rating
      reviewSubmitted: false
    };
  },
  computed: {
    // Find the movie by the movieId from the route params
    movie() {
      const movieId = this.$route.params.movieId;
      return movies.find(movie => movie.id === Number(movieId));
    }
  },
  methods: {
    submitReview() {
      if (this.reviewText.trim() !== '' && this.rating > 0) {
        const review = {
          movieId: this.movie.id, // Associate review with the specific movie
          movieTitle: this.movie.title,
          reviewText: this.reviewText,
          rating: this.rating,
        };
         authStore.addReview(review);
        this.reviewSubmitted = true;  // Set the flag to true
        this.reviewText = '';  // Clear the review input field
        this.rating = 0;  // Reset the rating field
        this.$router.push('/home');
      } else {
        alert("Please provide a review and a rating.");
      }
    },
   
  
  }
};
</script>
