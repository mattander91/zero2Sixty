<template>
  <div>
    <loading v-if="loading"></loading>

    <div class="billboard">
      <div v-if="model1">
        <h2 v-if="model1.fullName">{{model1.fullName}}</h2>
        <p v-if="model1['0-60']"><b>0 - 60:</b> {{model1['0-60']}}s</p>
        <p v-if="model1.quarterMile"><b>Quarter Mile:</b> {{model1.quarterMile}}s</p>
      </div>
      <div v-if="model2">
        <h2 v-if="model2.fullName">{{model2.fullName}}</h2>
        <p v-if="model2['0-60']"><b>0 - 60:</b> {{model2['0-60']}}s</p>
        <p v-if="model2.quarterMile"><b>Quarter Mile:</b> {{model2.quarterMile}}s</p>
      </div>
    </div>

    <div class="car">
      <h2>CAR # 1</h2>
      <div v-if="makes">
        <label>Select Manufacturer</label>
        <select v-model="make1" @change="getModels('1')" >
          <option v-for="make in makes" :key="make">{{make}}</option>
        </select>
      </div>
      <br>
      <div v-if="!loading && make1">
        <label>Select Model</label>
        <select v-model="model1" >
          <option v-for="vehicle in models1" :key="vehicle" :value="vehicle">{{vehicle.fullName}}</option>
        </select>
      </div>
    </div>

    <div class="car">
      <h2>CAR # 2</h2>
      <div v-if="makes">
        <label>Select Manufacturer</label>
        <select v-model="make2" @change="getModels('2')">
          <option v-for="(make, index) in makes" :key="index">{{make}}</option>
        </select>
      </div>
      <br>
      <div v-if="!loading && make2">
        <label>Select Model</label>
        <select v-model="model2" v-if="!loading">
          <option v-for="(vehicle1) in models2" :key="vehicle1" :value="vehicle1">{{vehicle1.fullName}}</option>
        </select>
      </div>
    </div>

  </div>
</template>

<script>


const axios = require('axios');
import Loading from '@/components/Loading.vue'

export default {
  data() {
    return {   
      makes: null,
      make1: null,
      make2: null,
      models1: null,
      models2: null,
      model1: null,
      model2: null,
      loading: false
    }
  },
  methods: {

    getMakes() {
      this.loading = true;      
      axios.get('http://localhost:4000/getMakes').then(response => {
        this.postCall('makes', response.data.makes);
      });
    },
    
    getModels(carNumber) {
      this.loading = true;
      let makesRef = `make${carNumber}`;
      let modelsRef = `models${carNumber}`;
      axios.post('http://localhost:4000/getModels', {make: this[makesRef]}).then(response => {
        this.postCall(modelsRef, response.data.models);
      });
    },

    postCall(prop, r) {
      this[prop] = r;
      this.loading = false;
    }

  },
  computed: {

  },
  mounted: function() {    
    this.getMakes();    
  },

  components: {
    Loading
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

  h2 {
    line-height: 1em;
  }

  select {
    margin: 0.25em;
  }

  .billboard {
    height: 15em;
    width: 22%;
    border: 3px solid #5c5c5c;
    position: absolute;
    top: 32vh;
    right: 6%;
    background-color: #5c5c5c;
    color: white;
    line-height: 0.5em;
    padding: 0.5em;
    text-align: left;
  }

  .car {
    display: inline-block;
    width: 45%;
    border: 3px solid black;
    padding: 1em;
    margin:  1em;
    text-align: left;
    height: 10em;
  }
  


</style>
