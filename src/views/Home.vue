<template>
  <div class="home">
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
  name: 'Home',
}
</script>
