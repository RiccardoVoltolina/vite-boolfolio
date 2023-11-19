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

      .then(response => {

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
      <h1>Progetti:</h1>
      <div class="row row-cols-lg-3">
        <div class="col" v-for="project in projects.data">
          <div class="my-3 h-100">

            <div class="card">
              <img :src="base_url + '/storage/' + project.thumb" class="card-img-top" alt="...">
              <h2>{{ project.title }}</h2>
              <p>{{ project.description }}</p>
              <small>{{ project.authors }}</small>
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<style lang=scss scoped></style>



