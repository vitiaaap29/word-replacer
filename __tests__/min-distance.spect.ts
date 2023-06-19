import {describe, expect, test} from '@jest/globals';
import { minimalDistance } from '../min-distance';

describe('Min distance', () => {
  test('a -> b should return 1 operation', () => {
    const { countOperations, resultWord } = minimalDistance('a', 'b');
    expect(countOperations).toBe(1);
    expect(resultWord).toEqual('b');
  });

  test('wordone -> wordtwo should be 3 operations', () => {
    const { countOperations, resultWord } = minimalDistance('wordone', 'wordtwo');
    expect(countOperations).toBe(3);
    expect(resultWord).toEqual('wordtwo');
  });

  test.skip('aaaa -> bb should be 4 operations', () => {
    const { countOperations, resultWord } = minimalDistance('aaaa', 'bb');
    expect(countOperations).toBe(4);
    expect(resultWord).toEqual('bb');
  });

  test.skip('a -> "" should be 1 operations', () => {
    const { countOperations, resultWord } = minimalDistance('a', '');
    expect(countOperations).toBe(1);
    expect(resultWord).toEqual('');
  });

  test.skip('abc -> "" should be 3 operations', () => {
    const { countOperations, resultWord } = minimalDistance('abc', '');
    expect(countOperations).toBe(3);
    expect(resultWord).toEqual('');
  });

  test.skip('abc -> "la-b-la" should be 5 operations', () => {
    const { countOperations, resultWord } = minimalDistance('abc', 'la-b-la');
    expect(countOperations).toBe(5);
    expect(resultWord).toEqual('la-b-la');
  });

  test.skip('"" -> abcd', () => {
    const { countOperations, resultWord } = minimalDistance('', 'abcd');
    expect(countOperations).toBe(4);
    expect(resultWord).toEqual('abcd');
  });

  test('"" -> *=e-=2!@', () => {
    const { countOperations, resultWord } = minimalDistance('', '*=e-=2!@');
    expect(countOperations).toBe(8);
    expect(resultWord).toEqual('*=e-=2!@');
  });
});