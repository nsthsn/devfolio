<template>
  <container class="content-container">
    <row>
    <v-col cols=2>
      <SideBar></SideBar>
    </v-col>
    <v-col cols=10>
      <HomeTile route="Flyover"></HomeTile>
      <HomeTile route="Tangram"></HomeTile>
      <HomeTile route="Jam"></HomeTile>
    </v-col>
  </row>
  </container>
  <!-- <div class="home">
    <Gallery gallery="home" random="false"/>
  </div> -->
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import HomeTile from '@/components/HomeTile.vue'

export default {
  name: 'Home',
  components: {
    SideBar,
    HomeTile
  }
}
</script>
