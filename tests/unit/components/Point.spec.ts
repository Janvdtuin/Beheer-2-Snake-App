import { Point } from '@/models/Point'

test('Point.ts', () => {
  const point = new Point(-18, 9001)

  // Reading.
  expect(point.x).toBe(-18)
  expect(point.y).toBe(9001)

  // Changing coordinate.
  point.y = 2
  expect(point.y).toBe(2)
})
