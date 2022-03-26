<template>
  <div class="home">
    <p class="large">Select make, model, year</p>
    <CarSelect :carData="carData"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CarSelect from '@/components/CarSelect.vue'
import '@/assets/styles/main.css'

export default {

  data: function() {
    return {
      carData: null
    } 
  },
  
  methods: {

  },
  computed: {

  },
  components: {
    CarSelect
  },
  // mounted: function() {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'text/html',
  //       'Accept': 'text/html'
  //     }
  //   }
  //   fetch('http://localhost:4000/getPage', options)
  //   .then(response => {
  //     console.log('resss: ', response);
  //     return response.text()
  //   })
  //   .then(data => {
  //     // this.carData = data;
  //     console.log('data: ', data);
  //   }).catch(err => {
  //     console.log(err);
  //     //handle that errrrr
  //   })
  // },
  name: 'Home',
}
</script>
