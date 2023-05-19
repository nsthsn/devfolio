<template>
  <v-row class="video-player pr-16 pl-16">
    <!-- <v-row> -->
    <v-col class="images"
      v-for="video in videos"
      :key="video"
      :cols=columns
    >
      <!-- <v-img
        :src=video
      ></v-img> -->
      <!-- <video
        id="players"
        autoplay
        class="cld-video-player"
        :data-cld-public-id=video
        >
      </video> -->
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/MavEpJETfgI?autoplay=1&showinfo=0&loop=1&list=PLvNxGp1V1dOwpDBl7L3AJIlkKYdNDKUEs&rel=0" frameborder="0" allowfullscreen></iframe>
      <!-- <AdvancedVideo
        :cldVid="video"
      ></AdvancedVideo> -->
    </v-col>
    <v-row class="image-caption caption text-left pr-4 pl-4">
      <v-col cols="12">
      {{ caption }}
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import cloudinary from 'cloudinary-core';
const cld = new cloudinary.Cloudinary({cloud_name:'mooncalf'});
// var players = cloudinary.videoPlayer('players', {cloud_name: "mooncalf"});

// import { AdvancedVideo } from 'cloudinary-video-player';
// import { Cloudinary } from "cloudinary-core/url-gen";

export default {
  created() {
    console.log(this.videos[0]);
    this.videos.forEach((element,index) => {
      //this[index] = cloudinaryCore.url(element);
      this[index] = cld.video(element);
    }, this.videos);
  },
  name: "ImageBox",
  components: {
    // AdvancedVideo,
  },
  props: ['videos', 'caption', 'columns', 'outline'],
  data() {
    return {
      imageCount: this.videos.length,
      // this is blindly trusting the data passed in
      // columns: 12 / this.images.length,
      // p : players,
      cloudinaryImages: {

      },
      // player : players,
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mooncalf.scss";
  .video-player {
    background-color:white;
  }
</style>
