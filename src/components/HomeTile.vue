<template>
  <router-link :to=route>
    <div class="home-tile">Home Tile</div>
  </router-link>
</template>

<script>
export default {
  name: 'HomeTile',
  props: ['route'],
}
</script>

<style scoped lang="scss">
  
</style>