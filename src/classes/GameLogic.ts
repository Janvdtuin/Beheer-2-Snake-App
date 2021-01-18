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

  private intervalId: number | undefined

  private direction: Direction

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

  private collidesWithSnake (p: Point) {
    let collides = false
    this.snake.forEach(tile => {
      if (p.x === tile.x && p.y === tile.y) {
        collides = true
      }
    })
    return collides
  }

  private spawnApple (): void {
    const apple = new Point(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height))
    if (this.collidesWithSnake(apple)) {
      return this.spawnApple()
    }
    this.apple = apple
  }

  private Tick () {
    const head = new Point(this.snake.last.x, this.snake.last.y)

    if (this.direction === Direction.Down) {
      if (store.getters.direction !== Direction.Up) {
        this.direction = store.getters.direction
      }
    } else if (this.direction === Direction.Up) {
      if (store.getters.direction !== Direction.Down) {
        this.direction = store.getters.direction
      }
    } else if (this.direction === Direction.Left) {
      if (store.getters.direction !== Direction.Right) {
        this.direction = store.getters.direction
      }
    } else if (this.direction === Direction.Right) {
      if (store.getters.direction !== Direction.Left) {
        this.direction = store.getters.direction
      }
    }

    if (this.direction === Direction.Right) {
      head.x += 1
    } else if (this.direction === Direction.Left) {
      head.x -= 1
    } else if (this.direction === Direction.Up) {
      head.y -= 1
    } else if (this.direction === Direction.Down) {
      head.y += 1
    }

    if (head.x === this.apple.x && head.y === this.apple.y) {
      this.spawnApple()
    } else {
      if ((head.x > this.width - 1 || head.x < 0 || head.y > this.height - 1 || head.y < 0) ||
        this.collidesWithSnake(head)) {
        return this.Initialize()
      }
      this.snake.dequeue()
    }

    this.snake.enqueue(head)

    this.updateBoard()
  }

  constructor (width: number, height: number) {
    this.width = width
    this.height = height

    this.snake = new Queue<Point>()

    this.apple = new Point(0, 0)

    this.direction = Direction.Right
  }

  public Initialize (): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId)
    }

    this.snake = new Queue<Point>()
    this.snake.enqueue(new Point(1, 7))
    this.snake.enqueue(new Point(2, 7))
    this.snake.enqueue(new Point(3, 7))

    this.apple = new Point(7, 7)
    this.updateBoard()

    this.direction = Direction.Right

    this.intervalId = setInterval(this.Tick.bind(this), 333)
  }
}
