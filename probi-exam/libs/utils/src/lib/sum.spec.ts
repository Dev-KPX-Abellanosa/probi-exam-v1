import {sum} from './sum.js'

describe('addition', () => {
  test('should add 2 and 1', () => {
    expect(sum(2,1)).toBe(3);
  })
})