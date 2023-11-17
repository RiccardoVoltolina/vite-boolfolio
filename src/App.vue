<script>

import axios from 'axios';



export default {
  name: 'App',
  data() {
    return {

      projects_api: 'http://localhost:8000/api/projects',

      projects: [],


    }
  },
  mounted() {
    axios

    .get(this.projects_api)

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

    <div v-for="project in projects.data">{{ project.title }}</div>

  </div>
</template>

<style lang=scss scoped></style>



