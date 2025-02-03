import {reverseString} from "../src/index"

test('reverse words', ()=>{
  const expected = ['cd', 'ab'];
  const results = ['dc', 'ba'];
  expected.every((e, i)=>{
    expect(reverseString(e)).toBe(results[i]);
  })
})
test('reverse long word with symbols', ()=>{
  expect(reverseString('432whatever')).toBe('revetahw234');
})
test('reverse empty string', ()=>{
  const expected = expect(reverseString(''));
  return expected.toBeDefined() || expected.toBe('');
})