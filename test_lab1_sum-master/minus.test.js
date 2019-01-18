const minus = require('./minus');
//4 - 2 เท่ากับ 2
test('4 - 2 เท่ากับ 2', ()=> {
  expect(minus(4,2)).toBe(2);
});

// 20 - 1 เท่ากับ 19
test('20 - 1 เท่ากับ 19', () => {
  expect(minus(20,1)).toBe(19);
});

// 9 - 5 เท่ากับ ?
test( '9 - 5 เท่ากับ ?',() =>{
  expect(minus(9,5)).toBe(4);
})

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy

//10 - 9 เท่ากับ ?
test('10 - 9 เท่ากับ ?',() => {
  expect(minus(10,9)).toBe(1);
})

//8 - 5 เท่ากับ ?
test('8 - 5 เท่ากับ ?',() => {
  expect(minus(8,5)).toBe(3);
})

//10 - 1 เท่ากับ ?
test('10 - 1 เท่ากับ ?',() => {
  expect(minus(10,1)).toBe(9);
})