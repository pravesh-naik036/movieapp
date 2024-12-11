<template>
  <q-page class="q-pa-md">
    <div>
      <h1>All Reviews</h1>

      <q-list bordered separator>
        <q-item v-for="(review, index) in reviews" :key="index" class="q-mb-md">
          <q-item-section>
            <div>
              <h4>{{ review.movieTitle }} (Rating: {{ review.rating }} / 5)</h4>
              <!-- <q-rating 
                :value="review.rating" 
                color="amber" 
                icon="star" 
                max="5" 
                disable 
                size="30px" 
              /> -->
              <p>
                <strong>Review:</strong> {{ review.reviewText }} 
              </p>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { useAuthStore } from 'src/stores/authStores';
const authStore = useAuthStore();
export default {
  computed: {
    reviews() {
      
      return authStore.reviews;
    }
  }
};
</script>

<style scoped>
.q-mb-md {
  margin-bottom: 15px;
}
</style>
