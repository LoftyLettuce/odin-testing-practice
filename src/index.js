export function capitalize(s) {
  const firstLetter = s.match(/[A-z]/);
  return firstLetter ? s.replace(firstLetter, firstLetter[0].toUpperCase()) : s;
}
export function reverseString(s) {
  return s.split("").reverse().join("");
}
export const calculator = (function () {
  function plus(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }
  return { plus, sub, mul, div };
})();
function asciiCodeShift(char, n) {
  let r = char;
  if (/[A-Z]/.test(char)) {
    const A = "A".charCodeAt(0);
    r = String.fromCharCode(((char.charCodeAt(0) - A + n) % 26) + A);
  } else if (/[a-z]/.test(char)) {
    const a = "a".charCodeAt(0);
    r = String.fromCharCode(((char.charCodeAt(0) - a + n) % 26) + a);
  }
  return r;
}
export function caesarCipher(s, n) {
  //turn s to array, turn each word to ascii code and apply shift, join
  return s.split("").map((e) => asciiCodeShift(e, n)).join("");
}
export function analyzeArray(arr) {
  return arr.length == 0
    ? { average: 0, min: 0, max: 0, length: 0 }
    : {
        average:
          arr.reduce((total, value) => {
            return total + value;
          }) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
      };
}
