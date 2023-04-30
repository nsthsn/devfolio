<template>
  <v-row class="text-block pr-12 pl-12">
    <v-col cols="12" align="left" class="h3 title">
      {{ title }}
    </v-col>
    <v-col cols="12" align="left" class="body-one text-block-text"><div v-html="text"></div></v-col>
  </v-row>
</template>

<script>
  import cloudinary from 'cloudinary-core';
  const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

  export default {
    name: "TextBlock",
    props: ['title', 'text'],
    data() {
      return {
        img : cloudinaryCore.url(this.image)
      }
    }
  }
</script>

<style scoped lang="scss">
@import "@/assets/styles/mooncalf.scss";
  .title {
    text-transform: uppercase;
  }
  .text-block {
    background-color: white;

  }
  .text-block-text {
    line-height: 1.5;
  }
</style>
