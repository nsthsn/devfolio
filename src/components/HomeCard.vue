<template>
  <router-link :to=route>
    <div class="home-card-wrapper">
      <div class="home-card" >
        <v-row style="" class="align-center content-wrapper">
          <v-col cols="3" class="">
            <!-- <div class="home-card-image-container"> -->
              <v-img 
                class="home-card-image" 
                :src=img
                :aspect-ratio="1"
                ></v-img>
            <!-- </div> -->
          </v-col>
          <!-- <v-col cols="1"></v-col> -->
          <v-col cols="8" >
            <v-row class="home-card-text">
              <v-col cols="12" class="header-one font-weight-black">
                {{ title }}
              </v-col>
              <v-col cols="12">
                <v-chip
                  class="ma-2"
                  v-for="keyword in keywords"
                  :key="keyword"
                > {{ keyword }} </v-chip>
                <!-- {{ keywords }} -->
              </v-col>
              <v-col cols="12">
                {{ text }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  </router-link>
</template>

<script>
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

export default {
  data () {
    return {
      img : cloudinaryCore.url(this.image)
    }
  },
  name: 'HomeCard',
  props: ['route', 'image', 'title', 'text', 'keywords'],
}
</script>

<style scoped lang="scss">
@import "../assets/styles/mooncalf.scss";
  .home-card-wrapper {
    width: 100%;
    display: inline-block;
    position: relative;
  }
  .home-card-wrapper::after {
    /* this method exploits padding-top being relative to the containing blocks width */
    /* 16:9 ratio */
    padding-top: 38%;
    display: block;
    content: '';
  }
  .home-card {
    margin: 0 0 $m1 0;
    outline: solid;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    /* fill parent */
    background-color: white;
    /* let's see it! */
    color: rgba(0,0,0,86%);
    
    .content-wrapper {
      height:100%; 
      width:90%; 
      margin:auto;
    }
    //height: 38vh;
    .home-card-image-container {
      align-content: right;
    }
    .home-card-image {
      width:100%;
      
    }
    .home-card-text {
      text-align: left;
      //width: 30%;
    }
  }
</style>