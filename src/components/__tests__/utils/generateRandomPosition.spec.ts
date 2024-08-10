import { describe, it, expect } from 'vitest'
import { generateRandomPosition } from '@/utils/flow-position'

describe('generateRandomPosition', () => {
  it('should return an object with x and y properties', () => {
    const result = generateRandomPosition(100)
    expect(result).toHaveProperty('x')
    expect(result).toHaveProperty('y')
  })

  it('should generate x within the range [left, left + MAX_POSITION_VALUE]', () => {
    const left = 50
    const result = generateRandomPosition(100, left)
    expect(result.x).toBeGreaterThanOrEqual(left)
    expect(result.x).toBeLessThanOrEqual(left + 500)
  })

  it('should use 0 as default value for left', () => {
    const result = generateRandomPosition(100)
    expect(result.x).toBeGreaterThanOrEqual(0)
    expect(result.x).toBeLessThanOrEqual(500)
  })

  it('should set y to the value of top', () => {
    const top = 150
    const result = generateRandomPosition(top)
    expect(result.y).toBe(top)
  })

  it('should generate random x values', () => {
    const result1 = generateRandomPosition(100)
    const result2 = generateRandomPosition(100)
    expect(result1.x).not.toBe(result2.x)
  })
})
