<template>
  <div class="note-card-content margined-element" v-bind:class="{ 'contrast-color' : this.contrast}">
    <v-row class="note-card-container pr-16 pl-16 text-left header-two text-center" justify="center">
      <v-col v-if="title" class="uppercase" cols="12">{{ title }}</v-col>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols=columns
      >
        <v-row class="note-card ma-3 text-left" justify="center">
          <v-col class="header-three " v-if="card.title" cols=12>
            {{ card.title }}
          </v-col>
          <v-col class="body-two pt-0" v-if="card.text" cols=12>
            <div v-html="card.text"></div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      columns : this.cardColumns ? this.cardColumns : 12 / this.cards.length // assume good input - im in a hurry! what could possibly go wrong!
    }
  },
  name: 'NoteCard',
  props: ["cards", "title", "cardColumns", "contrast"],
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/mooncalf.scss";
  .note-card-title{

  }
  .note-card-container {
    color: $highEmphasisLight;
    //width: 100%;
    margin: auto;
    width: 84.2%;
  }
  .note-card-content {
    //width: 84.2%;
    margin: auto;
    background-color: $blue01;
  }
  .note-card {
    //background-color:yellow;
    //box-shadow: 10px 10px lightblue;
  }
  ul, li {
    font-family: $bodyFont;
  }
  .contrast-color {
    background-color: $orange01;
  }
</style>