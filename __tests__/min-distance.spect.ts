import {describe, expect, test} from '@jest/globals';
import { minimalDistance } from '../min-distance';

describe('sum module', () => {
  test('a -> b should return 1 operation', () => {
    const distance = minimalDistance('a', 'b');
    expect(distance).toBe(1);
  });

  test('wordone -> wordtwo should be 3 operations', () => {
    const distance = minimalDistance('wordone', 'wordtwo');
    expect(distance).toBe(3);
  });

  test('aaaa -> bb should be 4 operations', () => {
    const distance = minimalDistance('aaaa', 'bb');
    expect(distance).toBe(4);
  });

  test('a -> "" should be 1 operations', () => {
    const distance = minimalDistance('a', '');
    expect(distance).toBe(1);
  });

  test('abc -> "" should be 3 operations', () => {
    const distance = minimalDistance('abc', '');
    expect(distance).toBe(3);
  });

  test('abc -> "la-b-la" should be 5 operations', () => {
    const distance = minimalDistance('abc', 'la-b-la');
    expect(distance).toBe(5);
  });

  test('"" -> abcd', () => {
    const distance = minimalDistance('', 'abcd');
    expect(distance).toBe(4);
  });

  test('"" -> *=e-=2!@', () => {
    const distance = minimalDistance('', '*=e-=2!@');
    expect(distance).toBe(8);
  });
});