import { mount } from '@vue/test-utils'
import Tile from '@/components/Tile.vue'
import { TileState } from '@/models/TileState'

test('Tile.vue', () => {
  const emptyWrapper = mount(Tile, {
    props: {
      tileState: TileState.Empty
    }
  })

  expect(emptyWrapper.find('.empty').exists()).toBe(true)

  const appleWrapper = mount(Tile, {
    props: {
      tileState: TileState.Apple
    }
  })

  expect(appleWrapper.find('.apple').exists()).toBe(true)

  const snakeWrapper = mount(Tile, {
    props: {
      tileState: TileState.Snake
    }
  })

  expect(snakeWrapper.find('.snake').exists()).toBe(true)
})
