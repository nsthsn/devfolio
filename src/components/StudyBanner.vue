<template>
  <v-row class="study-banner pt-14 pb-7">
    <v-col cols="3" class="pa-0">
      <v-img 
        class="banner-image"
        :src=img
        :aspect-ratio="4/5"
      ></v-img>
    </v-col>
    <v-col cols="9" class="text-container">
      <v-row >
        <v-col cols="12" align="left" class="h2">
          {{ title }}
        </v-col>
        <v-col cols="12" align="left" class="body-one">
          <div v-html="text">
            {{ text }}
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import cloudinary from 'cloudinary-core';
  const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

  export default {
    name: "StudyBanner",
    props: ['image', 'title', 'text'],
    data() {
      return {
        img : cloudinaryCore.url(this.image)
      }
    }
  }
</script>

<style scoped lang="scss">
@import "@/assets/styles/mooncalf.scss";

  .study-banner {
    background-color: $backgroundColor;
    
    .text-container{
      padding-left: $m1;
      color: white;
      background-color: rgb(59, 58, 116);
    }
    .banner-image {

    }
  }
</style>
