<template>
  <div>

    <div class=" h-100 d-flex justify-content-center bg-body-secondary">

      <div class="card text-center my-5">
        <img class="img_300px" :src="`http://localhost:8000/storage/${project.thumb}`" alt="">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <small>{{ project.authors }}</small>
        <a class=" text-decoration-none text-black" :href="project.projectlink">Link al progetto</a>
        <a class=" text-decoration-none text-black" :href="project.githublink">Link github</a>


        <div v-if="project.technologies" v-for="technology in project.technologies">{{ technology.name_tech }}</div>
        <div v-if="valoreType.type">{{ valoreType.type }} </div>

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

      project: {},

      // gli assegno il valore di type
      valoreType: '',
    }
  },

  mounted() {

    // creo una variabile che mi porta al percorso del singolo progetto

    const url = `http://localhost:8000/api/projects/${this.$route.params.id}`;

    axios.get(url)

      .then(resp => {
        console.log(resp.data.result);

        if (resp.data.success) {

          this.project = resp.data.result

          // gli assegno il valore di type prendendolo da project


          this.valoreType = this.project.type

          console.log(valoreType);

        } else {

          this.$router.push({ name: 'NotFound' });

        }

        // assegno i dati della chiamata,creata via backend al project di riga 32

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