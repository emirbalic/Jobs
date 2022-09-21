<template>
  <div>
    <h1 class="text-6xl font-bold">JobResultsView</h1>
    <button @click="gohome()">go to home</button>
  </div>

</template>
<script>
  
  export default {
    name: 'JobResultsView',
    methods: {
      gohome() {
        this.$router.push({name: 'home'})
      }
    }
  }
  </script>