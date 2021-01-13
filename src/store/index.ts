import { TileState } from '@/models/TileState'
import { createStore } from 'vuex'

export interface State {
  board: Array<Array<TileState>>;
}

export const store = createStore<State>({
  state: {
    board: []
  },
  mutations: {
    updateBoard (state, board: Array<Array<TileState>>) {
      state.board = board
    }
  },
  getters: {
    board: state => {
      return state.board
    }
  }
})
