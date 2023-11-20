<template>
  <div>

    <div class="my-3 h-100 d-flex justify-content-center">

      <div class="card text-center">
        <img class="img_300px" :src="`http://localhost:8000/storage/${project.thumb}`" alt="">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <small>{{ project.authors }}</small>
        <a class=" text-decoration-none text-black" :href="projectlink">Link al progetto</a>
        <a class=" text-decoration-none text-black" :href="githublink">Link github</a>


        <div v-if="project.technologies" v-for="technology in project.technologies">{{ technology.name_tech }}</div>
      </div>
    </div>



  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'SingleProjectView',
  data() {
    return {
      project: {}
    }
  },
  mounted() {

    const url = `http://localhost:8000/api/projects/${this.$route.params.id}`;

    axios.get(url)
      .then(resp => {
        console.log(resp.data.result);

        // assegno i dati della chiamata,creata via backend al project di riga 32

        this.project = resp.data.result
      })
      .catch(err => {
        console.log(err.message);
      })

  }



}
</script>

<style>

.img_300px {
  width: 500px;
  aspect-ratio: 1;
}

</style>