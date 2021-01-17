import { Queue } from '@/classes/Queue'

test('Queue.ts', () => {
  const queue = new Queue()

  queue.enqueue('item1')
  queue.enqueue(2)

  // Total length of the queue now is 2 items.
  expect(queue.size()).toBe(2)
  // First item in the queue is also the first one popped.
  expect(queue.dequeue()).toBe('item1')
})
