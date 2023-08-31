<template>
  <!-- <router-link :to=route> -->
    <div class="game-card-wrapper">
      <div class="game-card" >
        <v-row style="" class="align-center content-wrapper">
          <v-col cols="6" align-self="" class="">
            <!-- <div class="home-card-image-container"> -->
            <v-row>
              <v-col cols="12">
                <div class="game-video-container">
                  <video ref="videoOne" class="game-video" :src=imageOne autoplay muted loop>
                  </video>
                </div>
                <div class="caption text-left">{{ captionOne }}</div>
              </v-col>
              <v-col cols="12">
                <video ref="videoTwo" class="game-video" :src=imageTwo autoplay muted loop>
                  </video>
                <div class="caption text-left"> {{ captionTwo }}</div>
              </v-col>
            </v-row>

            <!-- </div> -->
          </v-col>
          <v-col cols="6" align-self="start">
            <v-row class="game-card-text">
              <v-col cols="12" class="header-two text-left font-weight-black">
                {{ title }}
              </v-col>
              <v-col cols="12" class="text-left">
                Jam Theme : {{ theme }}
              </v-col>
              <v-col cols="12 caption text-left">
                {{ team }}
              </v-col>
              <v-col cols="12" class="text-left">
                <div v-html="text"></div>
              </v-col>
              <a href="watchURL" target="_blank">
                <v-btn> WATCH IT </v-btn>
              </a>
              <a href="playURL" target="_blank">
                <v-btn> PLAY IT </v-btn>
              </a>
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
  mounted() {
    // this.$('.player').each(function() {
    //   var player = $(this).get(0);
    //   var video = player.querySelector('.viewer');
    //   video['play'];
    // });
    // console.log(this.$refs.videoOne);
    // var myVideo = this.$refs["videoOne"];
    // myVideo.videoOne.play();
  },
  data () {
    return {
      img : cloudinaryCore.url(this.image)
    }
  },
  name: 'GameCard',
  props: ['team', 'image-one','image-two','caption-one', 'caption-two', 'title', 'text', 'theme', 'playURL', 'watchURL'],
}
</script>

<style scoped lang="scss">
@import "../assets/styles/mooncalf.scss";
.game-card {
  background-color: white;
  padding-top: $m2;
  padding-right: $m2;
  padding-bottom: $m2;
  padding-left: $m2;
}
video {
  /* override other styles to make responsive */
  width: 100%    !important;
  height: auto   !important;
  line-height: 0;
  outline: none;
}

</style>