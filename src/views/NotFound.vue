

<script>
export default {
    name: 'NotFound'
}
</script>

<template>
    <div class="p-5 mb-4 bg-dark text-light">
        <div class="container py-5">
            <h1 class="display-5 fw-bold">Tantissimi progetti ti aspettano</h1>
            <p class="col-md-8 fs-4">Torna alla home per scoprirli tutti!</p>
            <router-link to="/"><button type="button" class="btn btn-primary mt-3">Home</button></router-link>
        </div>
    </div>
    <div>
        <div style="min-height: 50vh;" class="container d-flex align-items-center justify-content-center">
            <h1 class="text-center">404, la pagina non è stata trovata! 😩 </h1>
        </div>
    </div>
</template>

<style></style>