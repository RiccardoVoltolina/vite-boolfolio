<script>

import axios from 'axios';

import Projects from '../components/Projects.vue';



export default {


    name: 'HomeView',
    data() {
        return {

            base_url: 'http://localhost:8000',

            projects_url: '/api/projects?page=',

            projects: [],

            currentPage: 1,

        }
    },

    components: {

        Projects,

    },
    mounted() {

        // richiamo la funzione per la mia chiamata

        this.axiosCall()
      
    },

    methods: {

        // al richiamo della funzione, incremento currentPage e rieseguo la chiamata axios

        nextPage: function() {

            this.currentPage++

            this.axiosCall()
        },

        // eseguo la chiamata axios

        axiosCall: function() {
            axios.get(this.base_url + this.projects_url + this.currentPage)
            .then(response => {

                

                this.projects = response.data.result

            })
            .catch(err => {
                console.error(err);
            })
        }

    },
}
</script>

<template>
    <div id="app">



        <div class="container">
            <h1>Progetti:</h1>

            <div aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    <li class="page-item"><a class="page-link" href="#"></a></li>
                    <li class="page-item"><a class="page-link" href="#">{{ projects.current_page }}</a></li>
                    <li class="page-item"><a class="page-link" @click="nextPage" href="#">2</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="row row-cols-lg-3">
                <div class="col" v-for="project in projects.data">
                    <router-link class="text-decoration-none" :to="{ name: 'project', params: { id: project.id } }">
                        <!-- <Projects :thumb="project.thumb" :projectlink="project.projectlink" :githublink="project.githublink"
                            :title="project.title" :type="project.type" :description="project.description"
                            :technologies="project.technologies" /> -->

                        <Projects :project="project" />

                    </router-link>



                    <!-- <div class="my-3 h-100">

            <div class="card">
              <img :src="base_url + '/storage/' + project.thumb" class="card-img-top" alt="...">
              <h2>{{ project.title }}</h2>
              <p>{{ project.description }}</p>
              <small>{{ project.authors }}</small>
              
              <div v-if="project.technologies" v-for="technology in project.technologies">{{ technology.name_tech }}</div>
            </div>
          </div> -->
                </div>


            </div>
        </div>


    </div>
</template>

<style></style>



