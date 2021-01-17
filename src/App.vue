<template>
  <board></board>
</template>

<script lang='ts'>
import Board from '@/views/Board.vue'
import { store } from '@/store/index'

export default {
  components: { Board },
  provide: { store }
}
</script>
