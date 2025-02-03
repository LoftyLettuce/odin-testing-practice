import {caesarCipher} from "../src/index"

test("abc to def", ()=>{
  expect(caesarCipher('abc', 3)).toBe('def');
})
test("xyz to bcd", ()=>{
  expect(caesarCipher('xyz', 4)).toBe('bcd');
})
test("test case preserve", ()=>{
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})
test("test punctuation preserve", ()=>{
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

