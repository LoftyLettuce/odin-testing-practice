import {calculator} from "../src/index"

test("calculator is an object", ()=>{
  expect(Object.prototype.toString.call(calculator) === '[object Object]').toBeTruthy();
})
function expression(a, b, r){
  return {a, b, r}
}
test("plus", ()=>{
  const exp = [expression(2, 2, 4), expression(3, 4, 7)];
  exp.every((e)=>{
    expect(calculator.plus(e.a, e.b)).toBe(e.r)
  })
})
test("sub", ()=>{
  const exp = [expression(3, 3, 0), expression(3, 5, -2)];
  exp.every((e)=>{
    expect(calculator.sub(e.a, e.b)).toBe(e.r)
  })
})
test("mul", ()=>{
  const exp = [expression(5, 2, 10), expression(6, 4, 24)];
  exp.every((e)=>{
    expect(calculator.mul(e.a, e.b)).toBe(e.r)
  })
})
test("div", ()=>{
  const exp = [expression(8, 4, 2), expression(10, 3, 3.33)];
  exp.every((e)=>{
    expect(calculator.div(e.a, e.b)).toBe(e.r)
  })
})
