<template>
  <div class="column board">
    <div class="row" v-for="index in height" :key="index">
      <div class="tile" v-for="index in width" :key="index"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    width: { required: true, type: Number },
    height: { required: true, type: Number }
  }
})
export default class Board extends Vue {
  width!: number
  height!: number
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

.tile {
  background-color: #212121;
  height: 50px;
  width: 50px;
  border: solid 1px black;
}

</style>
