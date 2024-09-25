import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum should return the correct result of two numbers', () => {
  assert.strictEqual(sum(1, 2), 3, 'Expected sum(1, 2) to equal 3');
  assert.strictEqual(sum(-1, 1), 0, 'Expected sum(-1, 1) to equal 0');
  assert.strictEqual(sum(0, 0), 0, 'Expected sum(0, 0) to equal 0');
});
