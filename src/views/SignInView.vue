<template>
  <div class="bg-white p-4">
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="mb-4">Sign In</h1>
      <div id="error-msg" class="alert alert-danger" v-if="error">{{ error }}</div>
      <div class="form-group fw-bold mb-2">
        <label for="email">EMAIL</label>
        <input v-model="email" type="email" class="form-control" id="email" placeholder="Email Address">
      </div>
      <div class="form-group fw-bold mb-2">
        <label for="password">PASSWORD</label>
        <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
      </div>
      <div class="d-flex justify-content-end text-secondary">
        <p>Forgot Password</p>
      </div>
      <div class="d-grid gap-2 my-2">
        <button type="submit" class="btn btn-primary">Sign In</button>
      </div>
      <div class="d-flex flex-row justify-content-center mt-4">
        <span class="me-1">Don't have an account?</span>
        <span><router-link to="/signup">Sign up</router-link></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created () {
    this.checkSignedIn()
  },
  updated () {
    this.checkSignedIn()
  },
  methods: {
    signin () {
      console.log(this)
      this.$http.plain.post('/signin', { email: this.email, password: this.password })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error))
    },
    signinSuccessful (response) {
      if (!response.data.csrf) {
        this.signinFailed(response)
        return
      }
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/todos')
    },
    signinFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || ''
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/todos')
      }
    }
  }
}
</script>
