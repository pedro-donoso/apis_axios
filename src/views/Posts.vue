<template>
  <div id="posts" class="container">
    <h3>Posts</h3>

<div class="card__post" v-for="post in posts" :key="post">
  <div class="card__body">
    <h5 class="card__title">{{post.title}}</h5>
    <p class="card__text">{{post.body}}</p>
  </div>
</div>




  </div>
</template>

<script>
//TODO: 1) Declarar libreria
import axios from "axios";
//

export default {
  name: "Inicio",
  data() {
    return {
      //TODO: 2) Definir instancia dónde se guardará respuesta API
      posts: [],
      //
    };
  },

  mounted() {
    //TODO: 3) Ejecutar método y pasar string API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      //
      //TODO: 4) Definir promesa y obtener datos API
      .then(response => {
        //TODO: 5) Guardar respuesta API en instancia posts
        this.posts = response.data;
      });
    //
  },
};
</script>

<style lang="scss">
    .card__post{
        border: 1px solid #d9d9d9;
        padding: 20px;
        margin-bottom: 10px;
        background: #e2dddd;
    }
</style>
