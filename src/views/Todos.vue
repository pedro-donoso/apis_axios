<template>
  <div id="todos" class="container">
    <div class="row">
      <h3>{{ titulo }}</h3>
    </div>
    <div class="row">
      <label class="space">
        <input type="radio" value="todo" v-model="filtro_completo" />Todo
      </label>
      <label class="space">
        <input type="radio" value="true" v-model="filtro_completo" />Completo
      </label>
      <label class="space">
        <input type="radio" value="false" v-model="filtro_completo" />Incompleto
      </label>
    </div>
    <div class="row table-responsive">
      <table class="table table-striped table-hover table bordered">
        <thead>
          <tr>
            <th v-for="item in items" :key="item">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in filter" :key="data">
            <td>{{ data.userId }}</td>
            <td>{{ data.id }}</td>
            <td>{{ data.title }}</td>
            <td>{{ data.completed }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//TODO: 1) Declarar libreria
import axios from "axios";
//

export default {
  name: "Todos",

  data() {
    return {
      titulo: "Lista y filtro",
      items: ["ID de usuario", "id", "titulo", "completado"],
      lista: [],
      error: [],
      filtro_completo: "todo",

      //TODO: 2) Definir instancia dónde se guardará respuesta API
      todos: [],
      //
    };
  },

  created: function() {
    this.leerApi();
  },

  methods: {
    leerApi() {
      axios
        .get("http://jsonplaceholder.typicode.com/todos")
        .then(response => {
          console.log(response)
          this.lista = response.data;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
  },

  computed: {
    filter: function() {
      let data = this.lista;
      let filterradio = this.filtro_completo;

      if (filterradio === "todo") {
        return data;
      } else {
        return data.filter(function(x) {
          return String(x.completed) === filterradio;
        });
      }
    },
  },

  mounted() {
    //TODO: 3) Ejecutar método y pasar string API
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      //
      //TODO: 4) Definir promesa y obtener datos API
      .then(response => {
        //TODO: 5) Guardar respuesta API en instancia posts
        console.log(response)
        this.todos = response.data;
      })
      .catch(e=> console.log(e))
    //
  },
};
</script>

<style lang="scss">
.table__users {
  border: 1px solid #d9d9d9;
  padding: 20px;
  margin-bottom: 10px;
  background: #e2dddd;
}

.space {
  margin-right: 20px;
}
</style>
