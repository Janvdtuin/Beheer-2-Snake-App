export class Queue<T> {
  private storage: T[] = [];

  enqueue (item: T): void {
    this.storage.push(item)
  }

  dequeue (): T | undefined {
    return this.storage.shift()
  }

  size (): number {
    return this.storage.length
  }

  get last () {
    return this.storage[this.storage.length - 1]
  }

  forEach (callbackfn: (value: T) => void): void {
    this.storage.forEach(callbackfn)
  }
}
