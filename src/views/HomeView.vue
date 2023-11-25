<script>

import axios from 'axios';

import Projects from '../components/Projects.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';





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

        Swiper,

        SwiperSlide,


    },

    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },

    mounted() {

        // richiamo la funzione per la mia chiamata

        this.axiosCall()

    },

    methods: {

        // al richiamo della funzione, incremento currentPage e rieseguo la chiamata axios

        nextPage: function () {

            this.currentPage++

            this.axiosCall()
        },

        prevPage: function () {

            this.currentPage--

            this.axiosCall()
        },

        goFirstPage: function () {

            this.currentPage = 1,

                this.axiosCall()
        },

        goLastPage: function () {

            this.currentPage = this.projects.last_page,

                this.axiosCall()
        },

        // eseguo la chiamata axios

        axiosCall: function () {
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
                        <a v-if="projects.current_page !== 1" class="page-link" @click="goFirstPage" href="#"
                            aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    <li v-if="projects.current_page !== 1" class="page-item"><a @click="prevPage" class="page-link"
                            href="#">{{ projects.current_page - 1 }}</a></li>
                    <li class="page-item"><a class="page-link bg-secondary" href="#">{{ projects.current_page }}</a></li>
                    <li v-if="projects.current_page < projects.last_page" class="page-item"><a @click="nextPage"
                            class="page-link" href="#">{{ projects.current_page + 1 }}</a></li>
                    <li class="page-item">

                        <!-- se projects.current_page è minore alle pagine totali non lo faccio vedere  (il dato di last_page lo vedo nella consolle vue) -->

                        <a v-if="projects.current_page < projects.last_page" class="page-link" @click="goLastPage" href="#"
                            aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="row row-cols-lg-3">
                <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                    clickable: true,
                }" :navigation="true" :modules="modules" class="mySwiper">


                    <swiper-slide v-for="(project, index) in projects.data" :key="index" :virtualIndex="index">

                        <!-- al click dell'immagine vado sul progetto singolo -->
                        <router-link class="text-decoration-none pb-5" :to="{ name: 'project', params: { id: project.id } }">

                            <!-- <Projects :project="project" /> -->

                            <div>
                                <h2>{{ project.title }}</h2>
                            </div>
                            <div class="img_container">
                                <img :src="'http://localhost:8000' + '/storage/' + project.thumb" alt="...">
                            </div>

                        </router-link>
                    </swiper-slide>


                </swiper>
                




            </div>
        </div>


    </div>
</template>

<style>
#app {
    height: 100%;
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}


.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper {
    margin-left: auto;
    margin-right: auto;
}
</style>



