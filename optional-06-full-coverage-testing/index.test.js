import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test 1: Both positive numbers
test('sum of two positive numbers', () => {
  assert.strictEqual(sum(5, 3), 8);
});

// Test 2: Both numbers are zero
test('sum of zero and zero', () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Test 3: One positive and one zero
test('sum of a positive number and zero', () => {
  assert.strictEqual(sum(7, 0), 7);
});

// Test 4: One negative number
test('sum with one negative number', () => {
  assert.strictEqual(sum(-5, 10), 0);
});

// Test 5: Both numbers negative
test('sum with both numbers negative', () => {
  assert.strictEqual(sum(-4, -2), 0);
});

// Test 6: Non-number inputs
test('sum with non-number inputs (strings)', () => {
  assert.strictEqual(sum('a', 'b'), 0);
});

test('sum with non-number inputs (boolean)', () => {
  assert.strictEqual(sum(true, false), 0);
});

test('sum with non-number inputs (object)', () => {
  assert.strictEqual(sum({}, []), 0);
});

// Test 7: Mixed type inputs
test('sum with a number and a string', () => {
  assert.strictEqual(sum(10, '10'), 0);
});
