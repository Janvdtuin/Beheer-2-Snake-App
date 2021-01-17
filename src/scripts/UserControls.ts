import { store } from '@/store'
import { Direction } from '@/models/Direction'
document.addEventListener('keydown', (e) => {
  if (e.key === 'w') {
    store.commit('updateDirection', Direction.Up)
  } else if (e.key === 'd') {
    store.commit('updateDirection', Direction.Right)
  } else if (e.key === 's') {
    store.commit('updateDirection', Direction.Down)
  } else if (e.key === 'a') {
    store.commit('updateDirection', Direction.Left)
  }
})
