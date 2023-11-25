<template>
  <div class="p-5 mb-4 bg-dark text-light">
    <div class="container py-5">
      <h1 class="display-5 fw-bold">Ecco maggiori informazioni per il progetto che hai selezionato</h1>

      <p class="col-md-8 fs-4">scopri di più su di me!</p>
      <router-link class="nav-link" to="/about"> <button class="btn btn-primary btn-lg" type="button">Find out
          more</button>
      </router-link>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-4">

        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0 align-items-center">
            <div class="col-md-4">
              <img :src="`http://localhost:8000/storage/${project.thumb}`" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <div class="mb-2">
                  <div class="card-text">Tipo di progetto:</div>
                  <div class="card-text" v-if="valoreType">{{ valoreType.type }}</div>
                  <div class="card-text" v-else>Nessuna tipologia selezionata</div>

                </div>
                <div class="mb-3">
                  <div class="card-text">Tecnologie utilizzate:</div>
                  <span class="badge bg-secondary card-text me-2" v-if="project.technologies"
                    v-for="technology in project.technologies">{{ technology.name_tech }}</span>
                </div>
                <div class="mb-2">
                  <div class="card-text">Autore/i</div>
                  <p class="card-text">
                  <h5 class="text-body-secondary">{{ project.authors }}</h5>
                  </p>
                </div>
                <div class="mb-2">
                  <div class="card-text">Link del progetto:</div>

                  <a class=" text-decoration-none text-black" :href="project.projectlink"><i
                      class="fa-solid fa-code-branch"></i></a>
                  <a class=" text-decoration-none text-black ms-2" :href="project.githublink"><i
                      class="fa-brands fa-github"></i></a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">

        <h5>Descrizione del progetto:</h5>

        <p>{{ project.description }}</p>
      </div>
    </div>

  </div>
  <div>





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

<style></style>