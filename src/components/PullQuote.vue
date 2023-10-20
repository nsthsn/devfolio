<template>
  <v-row class="pull-quote header-two">
    <v-col cols="12">
      <hr/>
      “{{ text }}”
      <hr/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PullQuote",
  props: ['text'],
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mooncalf.scss";
  .pull-quote {
    font-family: $serifFont;
    // background-color: white;
    color: red;

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 2px solid #ccc;
      margin: 1em 0;
      padding: 0;
      width:38%;
      margin-left: auto;
      margin-right:auto;
    } 
  }
</style>
