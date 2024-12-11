<template>
  <q-page class="q-pa-md">
    <div>
      <h1>Movie List</h1>
      <q-list bordered separator>
        <q-item v-for="(movie, index) in movies" :key="index" class="q-mb-md">
          <q-item-section>
            <div>
              <h4>{{ movie.title }} ({{ movie.year }})</h4>
              <p><strong>Genre:</strong> {{ movie.genre }}</p>
              <p><strong>Director:</strong> {{ movie.director }}</p>
              <p><strong>Rating:</strong> {{ movie.rating }}</p>
              <p><strong>Cast:</strong> {{ movie.cast.join(', ') }}</p>
              <!-- Detail button to navigate to movie detail page -->
              <q-btn @click="goToMovieDetail(movie)" label="View Details" color="primary" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import movies from "src/data/movies.json";

export default {
  data() {
    return {
      movies
    };
  },
  methods: {
    goToMovieDetail(movie) {
      // Navigate to the movie detail page and pass movie data in the route params
      this.$router.push({ name: 'movie-detail', params: { movieId: movie.id } });
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
h4 {
  margin: 0;
  color: #007bff;
}
p {
  margin: 5px 0;
}
</style>
