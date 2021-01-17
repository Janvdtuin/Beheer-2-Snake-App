// TODO: remove eslint-disable when class is implemented
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Direction } from '@/models/Direction'
import { TileState } from '@/models/TileState'
import { store } from '@/store/index'
import { Queue } from '@/classes/Queue'
import { Point } from '@/models/Point'

export class GameLogic {
  private width: number
  private height: number

  private snake: Queue<Point>
  private apple: Point

  private emptyBoard () {
    return Array(this.height).fill(TileState.Empty).map(() => Array(this.width).fill(TileState.Empty))
  }

  private addSnake (board: Array<Array<TileState>>) {
    this.snake.forEach(point => {
      board[point.y][point.x] = TileState.Snake
    })
    return board
  }

  private addApple (board: Array<Array<TileState>>) {
    board[this.apple.y][this.apple.x] = TileState.Apple
    return board
  }

  private updateBoard () {
    store.commit('updateBoard', this.addApple(this.addSnake(this.emptyBoard())))
  }

  constructor (width: number, height: number) {
    this.width = width
    this.height = height

    this.snake = new Queue<Point>()
    this.snake.enqueue(new Point(7, 3))
    this.snake.enqueue(new Point(7, 2))
    this.snake.enqueue(new Point(7, 1))
    this.apple = new Point(7, 7)
  }

  public Initialize (): void {
    this.updateBoard()
  }

  public ChangeDirection (direction: Direction): void {

  }
}
