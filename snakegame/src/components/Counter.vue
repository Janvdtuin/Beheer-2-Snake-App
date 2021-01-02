<!-- Simple template example -->
<template>
<button @click="test()">Simple Onclick method</button>
<p>Count : {{ count }}</p>
<button @click="increment()">Increment with Vuex store commit</button>
<button @click="decrement()">Decrement with Vuex</button>
</template>

<script lang="ts">
// import dependencies.
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { TileState } from '@/models/TileState'

export default {
  name: 'Counter',

  setup () {
    // simple function for onclick button.
    function test () {
      console.log(TileState)
    }
    const store = useStore()
    const count = computed(() => store.state.count)

    // increment count variable by committing to the store.
    function increment () {
      store.commit('increment')
    }

    function decrement () {
      store.commit('decrement')
    }
    // returning variables and methods.
    return { count, increment, decrement, test }
  }

}

</script>

<style scoped>

</style>
