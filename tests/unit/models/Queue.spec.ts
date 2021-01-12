import { mount } from '@vue/test-utils'
import { Queue } from '@/models/Queue'

test('Queue.ts', () => {
  const queue = new Queue()

  queue.push('item1')
  queue.push(2)

  // Total length of the queue now is 2 items.
  expect(queue.size()).toBe(2)
  // First item in the queue is also the first one popped.
  expect(queue.pop()).toBe('item1')
})
