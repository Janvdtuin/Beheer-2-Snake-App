<template>
  <div class="column board">
    <div class="row" v-for="indexY in height" :key="indexY">
      <tile v-for="indexX in width" refs="tile" :key="indexX" :posX="indexX" :posY="indexY" :TileState="TileState.Apple"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Tile from '@/views/Tile.vue'
import { TileState } from '@/models/TileState'
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    width: { required: true, type: Number },
    height: { required: true, type: Number }
  }
})
export default class Board extends Vue {
  name = 'Board'
  width!: number
  height!: number
  components = { Tile }

  data () {
    return {
      TileState
    }
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
tile {
  background-color: #212121;
  height: 50px;
  width: 50px;
  border: solid 1px black;
}
</style>
