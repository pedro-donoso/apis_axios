<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> Posts </router-link> |
      <router-link to="/Comments"> Comments </router-link> |
      <router-link to="/Todos"> Todos </router-link> |
        <router-link to="/Users"> Users </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  mounted() {
    this.getIndicator();
  },
  methods: {
    ...mapActions(["getIndicator"])
  }
};
</script>
