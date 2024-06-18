import { describe, it, expect } from 'vitest';
import { calculatorAgeTwice } from '../src/twiceAsOld.js';

describe('calculatorAgeTwice', () => {
    it('should correctly calculate when the father will be twice as old as he is now.'), () => {
        expect(calculatorAgeTwice(36, 7)).toBe(22)
    }
})
it('should correctly calculate the years that have passed since the father was twice his age', () => {
    expect(calculatorAgeTwice(55, 30)).toBe(5)
})
it('should return 0 when the father is currently twice as old as the father', () => {
    expect(calculatorAgeTwice(42, 21)).toBe(0)
});
it('should correctly calculate when the father will be twice as old as he is now', () => {
    expect(calculatorAgeTwice(22, 1)).toBe(20);
});

it('should calculate correctly when the child is 0 years old and the father is 29 years old', () => {
    expect(calculatorAgeTwice(29, 0)).toBe(29);
});
