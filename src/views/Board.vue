<template>
  <div class="column board">
    <div class="row" v-for="indexY in height" :key="indexY">
      <tile v-for="indexX in width" :key="indexX" :tileState="tileState(indexX, indexY)"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Tile from '@/components/Tile.vue'
import { TileState } from '@/models/TileState'
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    width: { required: true, type: Number },
    height: { required: true, type: Number }
  },
  components: {
    Tile
  },
  name: 'Board'
})
export default class Board extends Vue {
  width!: number
  height!: number

  tileState (indexX: number, indexY: number) {
    // TODO: return correct TileState from store based on index
    if (indexX === 8 && indexY < 7 && indexY > 1) return TileState.Snake
    if (indexX === 8 && indexY === 8) return TileState.Apple
    return TileState.Empty
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
