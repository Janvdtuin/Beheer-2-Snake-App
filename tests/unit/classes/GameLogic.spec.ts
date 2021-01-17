import { GameLogic } from '@/classes/GameLogic'
import { TileState } from '@/models/TileState'
import { store } from '@/store/index'

test('GameLogic.ts', () => {
  const width = 10
  const height = 10
  const gameLogic = new GameLogic(width, height)
  gameLogic.Initialize()

  expect(store.state.board != null).toBe(true)
  expect(store.state.board.length).toBe(height)
  store.state.board.forEach(row => expect(row.length).toBe(width))

  store.state.board.forEach(row => row.forEach(tile => expect(TileState[tile] !== undefined).toBe(true)))
})
