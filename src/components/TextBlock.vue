<template>
  <v-row class="text-block pa-0">
    <v-col cols="12" align="left" class="h3 pa-0 title">
      {{ title }}
    </v-col>
    <v-col cols="12" align="left" class="pa-0">
      {{ text }}
    </v-col>
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
  .text-block {

  }
</style>
