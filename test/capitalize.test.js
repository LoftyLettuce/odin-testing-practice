import {capitalize} from "../src/index"

test('Turn a to A', ()=>{
  expect(capitalize('a')).toBe('A');
})
test('Turn b to B', ()=>{
  expect(capitalize('b')).toBe('B');
})
test('Capitalize a long word', ()=>{
  expect(capitalize('capitalize')).toBe('Capitalize');
})
test('Capitalize a long word with symbol in front of it', ()=>{
  expect(capitalize('32--=capitalize')).toBe('32--=Capitalize');
})
test('Capitalize an empty string', ()=>{
  expect(capitalize('')).toBe('');
})
test('Capitalize bunch of symbols', ()=>{
  expect(capitalize('23 432 -++')).toBe('23 432 -++');
})