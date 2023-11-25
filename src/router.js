// createWebHashHistory: per salvare i dati nella cronologia

// createRouter: insieme di componenti e rotte

import { createWebHashHistory, createRouter } from 'vue-router';


import HomeView from "./views/HomeView.vue";

import AboutView from "./views/AboutView.vue";

import BlogView from "./views/BlogView.vue";

import ContactView from "./views/ContactView.vue";




import SingleProjectView from "./views/SingleProjectView.vue"

import NotFound from "./views/NotFound.vue"





// creiamo la rotta per la pagina home

const routes = [

    // ricordarsi di far iniziare il path con /

    { path: '/', component: HomeView },

    { path: '/about', component: AboutView },

    { path: '/blog', component: BlogView },

    { path: '/contacts', component: ContactView },




    {
        path: '/project/:id',

        name: 'project',

        component: SingleProjectView,
    },

    {
        // creo il percorso web per la pagina di errore
        
        path: '/:pathMatch(.*)*',

        name: 'NotFound',

        component: NotFound,
    }
]

// creo la rotta

const router = createRouter({

    history: createWebHashHistory(),

    routes
});

export { router }


