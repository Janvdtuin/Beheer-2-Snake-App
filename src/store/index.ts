import { Direction } from '@/models/Direction'
import { TileState } from '@/models/TileState'
import { createStore } from 'vuex'

export interface State {
  board: Array<Array<TileState>>;
  direction: Direction;
}

export const store = createStore<State>({
  state: {
    board: [],
    direction: Direction.Right
  },
  mutations: {
    updateBoard (state, board: Array<Array<TileState>>) {
      state.board = board
    },
    updateDirection (state, direction: Direction) {
      state.direction = direction
    }
  },
  getters: {
    board: state => {
      return state.board
    },
    direction: state => {
      return state.direction
    }
  }
})
