<template>
  <v-row class="d-flex header-two">
    <v-col cols=9>
      <router-link to="/">
        <v-img 
          :src="logo"
          width="300"
          contain
        ></v-img>
      </router-link>
      <v-spacer></v-spacer>
    </v-col>

    <v-col cols="12" class="text-left">
      Generalist in General
    </v-col>
    <!-- <v-col cols="12" class="text-left">
      About
    </v-col>
    <v-col cols="12" class="text-left">
      Contact
    </v-col> -->
    
</v-row>
</template>

<script>
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

export default {
  name: "SideBar",
  data() {
    return {
      logo : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680548615/nathanWalkerPortfolio/NN_bglix1.png')
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    align-content: start;
  }
</style>
