<template>
  <div>
    <h1 class="fs-3 fw-bold mb-3">Add a New Foster</h1>
  </div>
  <div class="w-md-75">
    <form @submit.prevent="addFoster">
      <div class="row g-3">
        <div class="col-12">
          <label for="name" class="form-label">Name</label>
          <input v-model="name" type="text" class="form-control" id="name" placeholder="Fluffy" />
        </div>
        <div class="col-md-6">
          <label for="dob" class="form-label">Date of Birth</label>
          <input v-model="dob" type="date" class="form-control" id="dob" />
        </div>
        <div class="col-md-6">
          <label for="sex" class="form-label">Sex</label>
          <select v-model="sex" id="sex" class="form-select">
            <option v-for="sex in sexes" :value="sex.value" :key="sex.id">
              {{ sex.value }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="breed" class="form-label">Breed</label>
          <select v-model="breed" id="breed" class="form-select">
            <option v-for="breed in breeds" :value="breed.value" :key="breed.id">
              {{ breed.value }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="patterns" class="form-label">Pattern</label>
          <select v-model="pattern" id="breed" class="form-select">
            <option v-for="pattern in patterns" :value="pattern.value" :key="pattern.id">
              {{ pattern.value }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="primary-color" class="form-label">Primary Color</label>
          <select v-model="primaryColor" id="primary-color" class="form-select">
            <option v-for="color in colors" :value="color.value" :key="color.id">
              {{ color.value }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="secondary-color" class="form-label">Secondary Color</label>
          <select v-model="secondaryColor" id="secondary-color" class="form-select">
            <option v-for="color in colors" :value="color.value" :key="color.id">
              {{ color.value }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="altered-status" class="form-label">Altered Status</label>
          <select v-model="alteredStatus" id="altered-status" class="form-select">
            <option v-for="status in alteredStatuses" :value="status.value" :key="status.id">
              {{ status.value }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="adoption-status" class="form-label">Adoption Status</label>
          <select v-model="adoptionStatus" id="adoption-status" class="form-select">
            <option v-for="status in adoptionStatuses" :value="status.value" :key="status.id">
              {{ status.value }}
            </option>
          </select>
        </div>
      </div>
      <div class="float-end mt-4">
        <button type="submit" class="btn btn-secondary">Add Foster</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { catBreeds, catColors, catPatterns } from '../select_options/cat_options.js'
import { adoptionStatuses, alteredStatuses, sexes } from '../select_options/generic_options.js'

export default {
  name: 'IntakeForm',
  data() {
    return {
      adoptionStatus: '',
      adoptionStatuses: adoptionStatuses,
      alteredStatus: '',
      alteredStatuses: alteredStatuses,
      breed: '',
      breeds: catBreeds,
      colors: catColors,
      dob: '',
      name: '',
      pattern: '',
      patterns: catPatterns,
      primaryColor: '',
      secondaryColor: '',
      sex: '',
      sexes: sexes
    }
  },

  methods: {
    addFoster() {
      const formData = {
        adoption_status: this.adoptionStatus,
        altered_status: this.alteredStatus,
        breed: this.breed,
        date_of_birth: this.dob,
        name: this.name,
        pattern: this.pattern,
        primary_color: this.primaryColor,
        secondary_color: this.secondaryColor,
        sex: this.sex
      }

      axios
        .post('http://localhost:3000/fosters', formData)
        .then((response) => this.saveSuccess(response))
        .catch((error) => this.saveFailed(error))
    },

    saveFailed(error) {
      console.log('Failure: ', error)
    },

    saveSuccess(resp) {
      console.log('Success: ', resp)
      this.$router.replace('/dashboard')
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 992px) {
  .w-md-75 {
    width: 75% !important;
  }
}
</style>
