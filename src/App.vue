<script>

import axios from 'axios';



export default {
  name: 'App',
  data() {
    return {

      base_url: 'http://localhost:8000',

      projects_url: '/api/projects',



      projects: [],


    }
  },
  mounted() {
    axios

    .get(this.base_url + this.projects_url)

    .then(response=> {

      console.log(response);

      this.projects = response.data.result
    })

    .catch(err => {
      console.error(err);
    })
  }
}
</script>

<template>
  <div id="app">

    <div class="container">
      <div class="card" v-for="project in projects.data">
        <img :src="base_url + '/storage/' + project.thumb  " class="card-img-top" alt="...">
        
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <small>{{ project.authors }}</small>
      </div>
    </div>


  </div>
</template>

<style lang=scss scoped></style>



