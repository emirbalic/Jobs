/*
DELETE THIS FILE!!!
*/
import {evenOrOdd, multiply} from '@/playground'

describe('basic  math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2);
  });

  it('subtracts', () => {
    expect(5-3).toBe(2);
  });

  describe('evenOrOdd', () => {
    describe('when the number is even', () => {
      it('shows it is even', () => {
        expect(evenOrOdd(4)).toBe("even")
      })
    })
    describe('when the number is odd', () => {
      it('shows it is odd', () => {
        expect(evenOrOdd(5)).toBe("odd")
      })
    })
  })

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      expect(multiply(2, 3)).toBe(6)
    })
  })
})
