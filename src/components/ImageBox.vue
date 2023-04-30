<template>
  <v-row class="image-box pr-16 pl-16">
    <!-- <v-row> -->
    <v-col class="images"
      v-for="image in images"
      :key="image"
      :cols=columns
    >
      <v-img
        :src=image
      ></v-img>
    </v-col>

    <!-- </v-row> -->
    <v-row class="image-caption text-left">
      <v-col cols="12">
      {{ caption }}
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

export default {
  created() {
    console.log(this.images[0]);
    this.images.forEach((element,index) => {
      this[index] = cloudinaryCore.url(element);
    }, this.images);
  },
  name: "ImageBox",
  props: ['images', 'caption', 'columns'],
  data() {
    return {
      imageCount: this.images.length,
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
  .image-box {
    background-color:white;
  }
</style>
