/**
 * The maximum value for the x-coordinate in the generated position.
 */
const MAX_POSITION_VALUE = 500

/**
 * Generates a random position with an x-coordinate within the defined range
 * and a fixed y-coordinate.
 *
 * @param {number} top - The y-coordinate value for the position.
 * @param {number} [left=0] - The minimum x-coordinate value (default is 0).
 * @returns {{ x: number, y: number }} The generated position with random x-coordinate and fixed y-coordinate.
 */
export function generateRandomPosition(top: number, left: number = 0) {
  return {
    x: Math.random() * MAX_POSITION_VALUE + left,
    y: top
  }
}
