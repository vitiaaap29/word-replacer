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
});