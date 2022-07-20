const calculate = require('./TASK4');

describe('calculator', () => {
    test('the sum of two numbers', () => {
        expect(calculate.add(5, 6)).toEqual(11);
    });

    test('multiply two numbers', () => {
        expect(calculate.multiply(5, 6)).toEqual(30);
    });

    test('the difference of two numbers', () => {
        expect(calculate.substract(5, 6)).toEqual(-1);
    });

    test('the division of two numbers', () => {
        expect(calculate.divide(4, 2)).toEqual(2);
    });
})