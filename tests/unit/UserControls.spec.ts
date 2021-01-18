import '@/scripts/UserControls'
import { store } from '@/store'
import { Direction } from '@/models/Direction'

test('UserControls.ts', () => {
  document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'w' }))
  expect(store.state.direction).toBe(Direction.Up)
  document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'a' }))
  expect(store.state.direction).toBe(Direction.Left)
  document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 's' }))
  expect(store.state.direction).toBe(Direction.Down)
  document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'd' }))
  expect(store.state.direction).toBe(Direction.Right)
})
