export class Queue<T> {
  public storage: T[] = [];

  push (item: T): void {
    this.storage.push(item)
  }

  pop (): T | undefined {
    return this.storage.shift()
  }

  size (): number {
    return this.storage.length
  }
}
