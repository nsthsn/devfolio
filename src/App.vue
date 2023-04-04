<template>
  <v-app class="body">
    <!-- <NavigationBarTop/> -->
    <v-container class="app-container pt-0">
      <div class="content-container">
        <v-row>
          <v-col cols="3" class="pt-10">
            <SideBar></SideBar>
          </v-col>
          <v-col cols="9" class="pt-0 mt-0">
            <!-- <div class="content-container"> -->
              <router-view/>
            <!-- </div> -->
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components : {
    SideBar
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
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #abb8c3;
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
.app-container {
  margin: 0 auto 0 auto;
  
}
.container {
  // max-width:none !important;
  width: none !important;
}

.content-container {
  width: 61.68vw;
  min-width:960px;
  margin: auto;
  
}

</style>
