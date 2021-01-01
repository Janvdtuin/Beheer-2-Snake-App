<template>
  <board :height="10" :width="10"></board>
</template>

<script lang='ts'>
import Board from '@/views/Board.vue'

export default {
  components: { Board }
}
</script>
