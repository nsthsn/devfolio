<template>
  <v-row class="align-start content-wrapper video-container pr-12 pl-12">
    <!-- <v-row class="align-center content-wrapper"> -->
      <v-col cols="6">
        <div class="game-video-container">
          <video :src=imageOne autoplay muted loop>
          </video>
        </div>
        <div class="caption text-left" v-html="captionOne"></div>
      </v-col>
      <v-col cols="6">
        <video :src=imageTwo autoplay muted loop>
          </video>
          <div class="caption text-left" v-html="captionTwo"></div>
        <!-- <div class="caption text-left"> {{ captionTwo }}</div> -->
      </v-col>
    <!-- </v-row> -->
  </v-row>
</template>

<script>
// import cloudinary from 'cloudinary-core';
// const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

export default {
  created() {
    // console.log(this.images[0]);
    // this.images.forEach((element,index) => {
    //   this[index] = cloudinaryCore.url(element);
    // }, this.images);
  },
  name: "VideoBox",
  props: ['image-one','image-two','caption-one', 'caption-two'],
  data() {
    return {
      // imageCount: this.images.length,
      // this is blindly trusting the data passed in
      // columns: 12 / this.images.length,
      cloudinaryImages: {

      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mooncalf.scss";
  video {
    /* override other styles to make responsive */
    width: 100%    !important;
    height: auto   !important;
  }
  .video-container {
    background-color:white;
  }
</style>
