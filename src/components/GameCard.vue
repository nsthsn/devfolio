<template>
  <!-- <router-link :to=route> -->
    <div class="game-card-wrapper">
      <div class="game-card" >
        <v-row style="" class="align-center content-wrapper">
          <v-col cols="3" class="">
            <!-- <div class="home-card-image-container"> -->
              <v-img 
                class="game-card-image" 
                :src=img
                :aspect-ratio="1"
                ></v-img>
            <!-- </div> -->
          </v-col>
          <v-col cols="9">
            <v-row class="game-card-text">
              <v-col cols="12" class="header-one font-weight-black">
                {{ title }}
              </v-col>
              <v-col cols="12">
                {{ theme }}
              </v-col>
              <v-col cols="12 caption">
                {{ team }}
              </v-col>
              <v-col cols="12">
                {{ text }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  <!-- </router-link> -->
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
  name: 'GameCard',
  props: ['team', 'image', 'title', 'text'],
}
</script>

<style scoped lang="scss">
@import "../assets/styles/mooncalf.scss";
  .game-card-wrapper {
    width: 100%;
    display: inline-block;
    position: relative;
  }
  .game-card-wrapper::after {
    /* this method exploits padding-top being relative to the containing blocks width */
    /* 16:9 ratio */
    padding-top: 62%;
    display: block;
    content: '';
  }
  .game-card {
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
    .game-card-image-container {
      align-content: right;
    }
    .game-card-image {
      width:100%;
      
    }
    .game-card-text {
      text-align: left;
      //width: 30%;
    }
  }
</style>