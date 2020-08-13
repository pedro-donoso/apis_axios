<template>
  <div id="comments" class="container">
    <h3>Comments</h3>

<!-- TODO: 6) Recorrer respuesta API  -->
    <div class="comment" v-for="comment in comments" :key="comment">
  <!-- -->  
  <!-- TODO: 7) Renderizar resultados API ordenados -->
    <h5>{{comment.name}}</h5>
      <h6>{{comment.email}}</h6>
    <p>{{comment.body}}</p>
    <!-- --> 
    </div>

  </div>
</template>

<script>
//TODO: 1) Declarar libreria
import axios from "axios";
//

export default {
  name: "Comments",
  data() {
    return {
      //TODO: 2) Definir instancia dónde se guardará respuesta API
      comments: [],
      //
    };
  },

  mounted() {
    //TODO: 3) Ejecutar método y pasar string API
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      //
      //TODO: 4) Definir promesa y obtener datos API
      .then(response => {
        //TODO: 5) Guardar respuesta API en instancia posts
        this.comments = response.data;
      })
    
    //
  },
};
</script>

<style lang="scss">
    .comment{
        border: 1px solid #d9d9d9;
        padding: 20px;
        margin-bottom: 10px;
          background: #e2dddd;
    }
</style>
