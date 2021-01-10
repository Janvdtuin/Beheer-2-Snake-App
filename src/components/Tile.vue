<template>
      <div v-bind:class="classes"></div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import { TileState } from '@/models/TileState'

@Options({
  props: {
    tileState: {
      validator: (tileState: number) => TileState[tileState] !== undefined,
      required: true
    }
  },
  name: 'Tile'
})
export default class Tile extends Vue {
  tileState!: TileState

  get classes () {
    return [
      'tile',
      this.tileState === TileState.Snake ? 'snake'
        : this.tileState === TileState.Apple ? 'apple'
          : 'empty'
    ]
  }
}
</script>

<style scoped>
.tile {
  height: 50px;
  width: 50px;
  border: solid 1px black;
}
.empty {
  background-color: #212121;
}
.apple {
  background-color: #CF6679;
}
.snake {
  background-color: #03DAC5;
}
</style>
