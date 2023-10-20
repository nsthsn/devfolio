<template>
  <v-row justify="center" class="image-box pr-16 pl-16">
    <v-col class="images"
      v-for="image in images"
      :key="image"
      :cols=columns
    >
      <v-img
        :src=image
      ></v-img>
    </v-col>
    <v-row v-if="caption" class="image-caption caption text-left pr-4 pl-4">
      <v-col cols="12">
        {{ caption }}
      </v-col>
    </v-row>
  </v-row>
</template>

<script>

export default {
  created() {

  },
  name: "ImageBox",
  props: ['images', 'caption', 'columns', 'outline'],
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
  .image-box {
    width: 84.2%;
    margin: auto;
  }
</style>
