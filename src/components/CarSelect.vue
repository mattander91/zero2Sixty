<template>
  <div class="hello">
    <div>
      <label>Select Manufacturer</label>
      <select v-model="make" @change="getModels">
        <option v-for="(make, index) in makes" :key="index">{{make}}</option>
      </select>
      <br>
      <label>Select Model</label>
      <select>
        <option v-for="(model) in models" :key="model">{{model}}</option>
      </select>
      <br>
      <label>Select Vehicle</label>
      <select></select>
      <br>
      <button @click="getHTMLFile">Submit</button>
    </div>
  </div>
</template>

<script>

// const axios = require('axios');
// const helpers = require('../helpers/helpers.js');
const axios = require('axios');

export default {
  data() {
    return {
      models: null,
      make: null,
      makes: null
    }
  },
  methods: {

    getMakes() {
      axios.get('http://localhost:4000/getMakes').then(response => {
        this.makes = response.data.makes;
      });
    },
    
    getModels() {
      axios.post('http://localhost:4000/getModels', {make: this.make}).then(response => {
        this.models = response.data.models;
      });
    },

    getVehicle() {

    }

  },
  computed: {

  },
  mounted:  function() {
    this.getMakes();

  },

  name: 'CarSelect',
  props: ['carData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
