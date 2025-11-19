const invert = require ('./invert.js');

test("should invert simple key values", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
})

test("should invert mixed types", () =>{
    expect(invert({ name: 'John', age: 30 })).toEqual({ 'John': 'name', '30': 'age' });
})

test("should return empty object when given an empty object", () => {
    expect(invert({})).toEqual({});
})

test("should invert single key-value pair", () =>{
    expect(invert({ a: 1 })).toEqual({ '1': 'a' });
})