import { test } from 'node:test';
import assert from 'node:assert/strict';
import { verses, pickRandomVerse } from './verses.ts';

test('the verse collection is non-empty and well-formed', () => {
  assert.ok(verses.length > 0, 'expected at least one verse');
  for (const v of verses) {
    assert.ok(v.reference.trim().length > 0, 'reference must be non-empty');
    assert.ok(v.text.trim().length > 0, 'text must be non-empty');
  }
});

test('references are unique', () => {
  const refs = new Set(verses.map((v) => v.reference));
  assert.equal(refs.size, verses.length, 'duplicate references found');
});

test('pickRandomVerse returns a valid verse and matching index', () => {
  for (let i = 0; i < 200; i++) {
    const { verse, index } = pickRandomVerse();
    assert.ok(index >= 0 && index < verses.length, 'index in range');
    assert.equal(verse, verses[index], 'verse matches its index');
  }
});

test('pickRandomVerse never repeats the excluded index', () => {
  for (let i = 0; i < 500; i++) {
    const exclude = Math.floor(Math.random() * verses.length);
    const { index } = pickRandomVerse(exclude);
    assert.notEqual(index, exclude, 'must differ from the excluded index');
  }
});
