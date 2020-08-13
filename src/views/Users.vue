<template>
  <div id="users" class="container">
    <h3>Users</h3>

    <table class="table table__users">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">username</th>
          <th scope="col">email</th>
          <th scope="col">address</th>
          <th scope="col">website</th>
          <th scope="col">company</th>
        </tr>
      </thead>
      <tbody>
      <!-- 6) Mostrar datos en tabla -->
        <tr class="user" v-for="user in users" :key="user">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            {{ user.address.street }}
            {{ user.address.suite }}
            {{ user.address.city }}
          </td>
          <td>{{ user.website }}</td>
          <td>{{ user.company.name }}</td>
        </tr>
           <!-- -->
      </tbody>
    </table>
  </div>
</template>

<script>
//TODO: 1) Declarar libreria
import axios from "axios";
//

export default {
  name: "Users",
  data() {
    return {
      //TODO: 2) Definir instancia dónde se guardará respuesta API
      users: [],
      //
    };
  },

  mounted() {
    //TODO: 3) Ejecutar método y pasar string API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //
      //TODO: 4) Definir promesa y obtener datos API
      .then(response => {
        //TODO: 5) Guardar respuesta API en instancia posts
        this.users = response.data;
      });
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
</style>
