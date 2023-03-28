<template>
  <v-app v-bind:class="[{'md-display' : $vuetify.breakpoint.mdAndUp}, {'sm-display' : $vuetify.breakpoint.sm}, {'xs-display' : $vuetify.breakpoint.xs}]">
    <!-- <NavigationBarTop/> -->
    <router-view/>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'App',
  components : {
  },
  data: () => ({
  }),
  methods : {
    mounted() {
      this.$store.commit('loadDetails');
    }
  }
}

</script>

<style lang="scss">
@import "assets/styles/mooncalf.scss";

#app {
  // font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
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
.content-container {
  margin: auto;
  width: 1201px;
  max-width:  1201px;
}
</style>
