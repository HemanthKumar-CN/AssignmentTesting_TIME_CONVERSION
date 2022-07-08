const msToTime = require('./Time')

describe('miliSeconds to time', () => {
    test('5200 ms', () => {
        expect(msToTime(5200)).toBe("5 seconds 200 milliseconds ")
    });
    test('520 ms', () => {
        expect(msToTime(520)).toBe("520 milliseconds ")
    });
    test('200000 ms', () => {
        expect(msToTime(200000)).toBe("3 minutes 20 seconds 0 milliseconds ")
    });
});