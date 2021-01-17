<template>
  <board :height="10" :width="10"></board>
</template>

<script lang='ts'>
import Board from '@/views/Board.vue'
import { store } from '@/store/index'

export default {
  components: { Board },
  provide: { store }
}
</script>
