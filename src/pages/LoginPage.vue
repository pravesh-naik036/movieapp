<template>
    <q-page class="q-pa-md">
      <div class="login-container">
        <h1>Login</h1>
        
        <q-form @submit="handleLogin">
          <q-input 
            filled 
            v-model="username" 
            label="Username" 
            lazy-rules 
            :rules="[val => !!val || 'Username is required']"
          />
          
          <q-input 
            filled 
            v-model="password" 
            label="Password" 
            type="password" 
            lazy-rules 
            :rules="[val => !!val || 'Password is required']"
          />
          
          <q-btn 
            label="Login" 
            type="submit" 
            color="primary" 
            class="full-width q-mt-md" 
          />
        </q-form>
  
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </q-page>
  </template>
  
  <script>
  import { useAuthStore } from 'src/stores/authStores';
  const authStore = useAuthStore();
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
        authStore,
        users:[],
      };
    },
    methods: {
       handleLogin (){

        const user = this.users.find(
          u => u.username === this.username && u.password === this.password
        );
  
        if (!user) {
          this.errorMessage = 'Invalid username or password';
          return;
        }
  
        authStore.login({
          id: user.id,
          name: user.name,
          role: user.role
        });
  
        // Redirect user based on role
        if (user.role === 'admin') {
          this.$router.push('/dashboard');
        } else {
          this.$router.push('/home');
        }
      },
    },
    mounted(){
      this.users= this.authStore.users
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    text-align: center;
  }
  .full-width {
    width: 100%;
  }
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>
  