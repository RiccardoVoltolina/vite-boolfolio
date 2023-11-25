

<script>
export default {
    name: 'AboutView'
}
</script>

<template>
    <div class="p-5 mb-4 bg-dark text-light">
        <div class="container py-5">
            <h1 class="display-5 fw-bold">Vuoi contattarmi?</h1>

            <p class="col-md-8 fs-4">Vai nella sezione contacts!</p>
            <router-link to="/contacts"><button type="button" class="btn btn-primary mt-3">Contacts</button></router-link>
        </div>
    </div>
    <div class="container py-4">
        <h1>CHI SONO?</h1>
        <div class="row align-items-center">
            <div class="col-4">
                <div class="immagine_profilo"></div>
            </div>
            <div class="col-8">
                <p>Mi chiamo Riccardo Voltolina, sono un ex barista che è sempre stato innamorato della tecnologia, così ho
                    deciso di lasciare il mio lavoro, per iniziare a seguire quelle che sono le mie passioni! <br>
                    In questo portfolio,troverai tantissimi progetti su cui mi sono cimentato nel corso dei mesi. <br>
                    Grazie a boolean, ho avuto modo di imparere diversi linguaggi di programmazione e frameworks, come
                    javascript, vue.js, laravel, php e tanti altri! <br>
                    Se sei curioso di vedere qualche progetto? Torna alla pagina home, lì ho selezionato tutti quelli che
                    reputo essere stati i migliori! <router-link to="/"><button type="button"
                            class="btn btn-primary mt-3">Home</button></router-link>



                </p>
            </div>
        </div>

    </div>
</template>

<style>
.immagine_profilo {
    width: 100%;
    height: 300px;
    background-color: red;
}
</style>