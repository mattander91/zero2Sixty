<template>
  <div class="hello">
    <div>
      <label>Select Mfg</label>
      <select v-model="make">
        <option v-for="(make, index) in makes" :key="index">{{make}}</option>
      </select>
      <br>
      <label>Select Model</label>
      <select></select>
      <br>
      <!-- <label>Select year</label>
      <select></select>  -->
      <button @click="getHTMLFile">Submit</button>
    </div>
  </div>
</template>

<script>

// const axios = require('axios');

export default {
  data() {
    return {
      model: null,
      make: null,
      makes: ['BMW', 'Ford']
    }
  },
  methods: {
    getHTMLFile() {
      
      const linkData = {
        model: this.model,
        make: this.make
      };
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(linkData)
      };
      console.log('sending: ', linkData);
      fetch('http://localhost:4000/getPage', options)
      .then(response => {
        console.log('resss: ', response);
        return response.text()
      })
      .then(data => {
        console.log('data: ', data);
      }).catch(err => {
        console.log(err);
      })

    }

  },
  computed: {

  },
  mounted: () => {

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
