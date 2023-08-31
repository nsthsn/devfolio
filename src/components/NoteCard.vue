<template>
  <v-row class="note-card-container pr-16 pl-16 text-left">
    <v-col
      v-for="card in cards"
      :key="card.title"
      :cols=columns
    >
    <v-row class="note-card ma-2">
      <v-col v-if="card.title" cols=12>
        {{ card.title }}
      </v-col>
      <v-col v-if="card.text" cols=12>
        <div v-html="card.text"></div>
        <!-- {{ card.text }} -->
      </v-col>
    </v-row>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data () {
    return {
      columns : 12 / this.cards.length // assume good input - im in a hurry! what could possibly go wrong!
    }
  },
  name: 'NoteCard',
  props: ["cards"],
}
</script>

<style scoped lang="scss">
@import "../assets/styles/mooncalf.scss";
  .note-card-container {
    background-color:white;
  }
  .note-card {
    background-color:yellow;
    box-shadow: 10px 10px lightblue;
  }
</style>