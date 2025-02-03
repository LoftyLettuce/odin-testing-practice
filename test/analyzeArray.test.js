import {analyzeArray} from "../src/index"
test("return an object", ()=>{
  expect(Object.prototype.toString.call(analyzeArray([1,2,3,4,5])) == '[object Object]').toBeTruthy();
})
test("have average", ()=>{
  const expectedArray = [[1,8,3,4,2,6], [1,2,3,4,5]];
  const r = [4, 3];
  expectedArray.forEach((e, i) =>{
    expect(analyzeArray(e).average).toBe(r[i]);
  })
})
test("have min", ()=>{
  const expectedArray = [[1,8,3,4,2,6], [1,2,3,4,5]];
  const r = [1, 1];
  expectedArray.forEach((e, i) =>{
    expect(analyzeArray(e).min).toBe(r[i]);
  })
})
test("have max", ()=>{
  const expectedArray = [[1,8,3,4,2,6], [1,2,3,4,5]];
  const r = [8, 5];
  expectedArray.forEach((e, i) =>{
    expect(analyzeArray(e).max).toBe(r[i]);
  })
})
test("have length", ()=>{
  const expectedArray = [[1,8,3,4,2,6], [1,2,3,4,5]];
  const r = [6, 5];
  expectedArray.forEach((e, i) =>{
    expect(analyzeArray(e).length).toBe(r[i]);
  })
})
test("work on empty array", ()=>{
  expect(analyzeArray([])).toEqual({average: 0, min: 0, max: 0, length: 0});
})