<template>
  <div class="text-block-container"  v-bind:class="[{'contrast-color' : contrast, 'mistake-color' : mistake, 'success-color' : success, 'margined-element' : !childBlock, 'child-block' : childBlock}]">
    <v-row class="text-block pa-0 margined-element">
      <!-- <v-col cols="1"></v-col> -->
      <v-col cols="12" align="left" class="header-two uppercase text">
        {{ title }}
      </v-col>
      <v-col cols="12" align="left" class="header-four uppercase subtitle subtitle-color" v-bind:class="{'mistake-color' : mistake}">
        {{ subtitle }}
      </v-col>
      <!-- <v-col cols="2"></v-col>
      <v-col cols="1"></v-col> -->
      <v-col cols="12" align="left" class="body-one text-block-text text"><div v-html="text"></div></v-col>
      <!-- <v-col cols="2"></v-col> -->
    </v-row>
  </div>
</template>

<script>
  import cloudinary from 'cloudinary-core';
  const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

  export default {
    name: "TextBlock",
    props: ['title', 'text', 'subtitle', 'contrast', 'mistake', 'childBlock', 'success'],
    data() {
      return {
        img : cloudinaryCore.url(this.image),

      }
    }
  }
</script>

<style scoped lang="scss">
@import "@/assets/styles/mooncalf.scss";

  .text-block {
    width:61.6%;
    margin:auto;
  }
  .text {
    // padding-left:19%;
    // padding-right:19%;
  }

  .text-block-container {
    // line-height: 1.5;
    //width:61.6%;
  }

  .child-block {
    margin-top: -$m3;
    padding-top: 0;
    padding-bottom: $m3;
  }

  .contrast-color {
  background-color: $blue03;
  }

  // .mistake-color {
  //   background-color: $green00;
  // }


</style>
