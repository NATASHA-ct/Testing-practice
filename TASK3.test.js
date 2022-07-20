const capitalize = require('./TASK3');

test ('capitalize the first letter of a string', () => {
    expect(capitalize('banku')).toBe('Banku');
})