<template>
  <div class="content-column">
    <slot />
  </div>
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
  name: "ContentColumn",
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
.content-column {
  width: 100%;
  background-color:white;
}
</style>
