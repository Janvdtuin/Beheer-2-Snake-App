import { mount } from '@vue/test-utils'
import Board from '@/views/Board.vue'
import { store } from '@/store'
import { TileState } from '@/models/TileState'

test('Board.vue', () => {
  const height = 10
  const width = 10

  store.commit('updateBoard', Array(height).fill(TileState.Snake).map(() => Array(width).fill(TileState.Snake)))

  const wrapper = mount(Board, {
    global: {
      plugins: [store]
    },
    props: {
      width: width,
      height: height
    }
  })

  expect(wrapper.findAllComponents({ name: 'tile' }).length).toBe(width * height)
})
