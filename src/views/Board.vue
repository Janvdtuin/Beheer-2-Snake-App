<template>
  <div class="column board">
    <div class="row" v-for="row in board" :key="row">
      <tile v-for="tile in row" :key="tile" :tileState="tile"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Tile from '@/components/Tile.vue'
import { TileState } from '@/models/TileState'
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'

@Options({
  components: {
    Tile
  },
  name: 'Board'
})
export default class Board extends Vue {
  store = useStore()

  get board (): TileState[][] {
    return this.store.state.board
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #303030;
}
.column {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
}
.board {
  border: solid 1px black;
}
</style>
