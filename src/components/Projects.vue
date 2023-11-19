<script>
export default {
  name: 'Projects',
  props: {

    thumb: String,
    title: String,
    type: Object,
    description: String,
    projectlink: String,
    githublink: String,
    technologies: Array,
    authors: String,
  }
}
</script>

<template>
  <div class="my-3 h-100">

    <div class="card">
      <img :src="'http://localhost:8000' + '/storage/' + thumb" class="card-img-top" alt="...">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <small>{{ authors }}</small>
      <a :href="projectlink">Link al progetto</a>
      <a :href="githublink">Link github</a>


      <div v-if="technologies" v-for="technology in technologies">{{ technology.name_tech }}</div>
    </div>
  </div>
</template>