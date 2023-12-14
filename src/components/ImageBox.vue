<template>
  <div style="width: 100%;" v-bind:class="[{'contrast-color' : contrast, 'mistake-color' : mistake, 'success-color' : success, 'margined-element' : !childBlock, 'child-block' : childBlock}]">
    <v-row justify="center" class="margined-element image-box pr-16 pl-16"  >
      <v-col cols="12" align="left" class="header-two uppercase text title-color">
          {{ title }}
      </v-col>
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
  </div>
</template>

<script>

export default {
  created() {

  },
  name: "ImageBox",
  props: ['images', 'caption', 'columns', 'outline', 'title', 'contrast', 'mistake', 'childBlock', 'success'],
  data() {
    return {
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
