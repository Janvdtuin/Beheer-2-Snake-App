<template>
      <div class="tile" :key="index">

      </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import { TileState } from '@/models/TileState'

@Options({
  props: {
    posX: { required: true, type: Number },
    posY: { required: true, type: Number },
    TileState: { required: true, type: TileState }
  }
})

export default class Tile extends Vue {
  width!: number
  height!: number
}
console.log("reee")
</script>

<style>
</style>
