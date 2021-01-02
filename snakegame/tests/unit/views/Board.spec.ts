import { mount } from '@vue/test-utils'
import Board from '@/views/Board.vue'

test('Board.vue', () => {
  const width = 10
  const height = 10

  const wrapper = mount(Board, {
    props: {
      width: width,
      height: height
    }
  })

  expect(wrapper.findAll('.tile').length).toBe(width * height)
})
