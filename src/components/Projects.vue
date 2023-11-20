<script>
export default {
  name: 'Projects',
  props: {

    project: Object,

    // thumb: String,
    // title: String,
    // type: Object,
    // description: String,
    // projectlink: String,
    // githublink: String,
    // technologies: Array,
    // authors: String,
  },

}
</script>

<template>
  <div class="py-3 h-100">

    <div class="card h-100 text-center">
      <div class="img_container">
        <img :src="'http://localhost:8000' + '/storage/' + project.thumb" alt="...">
      </div>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <small>{{ project.authors }}</small>
      <a class=" text-decoration-none text-black" :href="project.projectlink">Link al progetto</a>
      <a class=" text-decoration-none text-black" :href="project.githublink">Link github</a>


      <div v-if="project.technologies" v-for="technology in project.technologies">{{ technology.name_tech }}</div>
    </div>
  </div>
</template>


<style>

.img_container {
  
  width: 100%;
  height: 300px;


}

.img_container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}


</style>