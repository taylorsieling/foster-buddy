<template>
  <div class="bg-white p-4">
    <form class="form-signup" @submit.prevent="signup">
      <h1 class="mb-4">Create an Account</h1>
      <div id="error-msg" class="alert alert-danger" v-if="error">{{ error }}</div>
      <div class="form-group fw-bold mb-2">
        <label for="email">EMAIL</label>
        <input v-model="email" type="email" class="form-control" id="email" placeholder="Email Address">
      </div>
      <div class="form-group fw-bold mb-2">
        <label for="password">PASSWORD</label>
        <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
      </div>
      <div class="form-group fw-bold mb-2">
        <label for="password">CONFIRM PASSWORD</label>
        <input v-model="password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="Password">
      </div>
      <div class="d-grid gap-2 my-2">
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>
      <div class="d-flex flex-row justify-content-center mt-4">
        <span class="me-1">Already have an account?</span>
        <span><router-link to="/signup">Sign In</router-link></span>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
      password_confirmation: '',
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
    signup () {
      this.plain.post('/signup', { email: this.email, password: this.password, password_confirmation: this.password_confirmation })
        .then(response => this.signupSuccessful(response))
        .catch(error => this.signupFailed(error))
    },
    signupSuccessful (response) {
      if (!response.data.csrf) {
        this.signupFailed(response)
        return
      }
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/')
    },
    signupFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || 'Something went wrong'
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/')
      }
    }
  }
}
</script>
