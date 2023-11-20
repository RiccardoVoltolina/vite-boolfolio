// createWebHashHistory: per salvare i dati nella cronologia

// createRouter: insieme di componenti e rotte

import { createWebHashHistory, createRouter } from 'vue-router';

const Home = '';

// creiamo la rotta per la pagina home

const routes = [

    { path: '/', component: Home },
]


const router = createRouter({

    history: createWebHashHistory(),
    routes
});

export {router}


