const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it('里程2公里以内，无等待', function()
    {
       var result = main(1.6,0);
       expect(result).toEqual(6);
    })

    it('里程大于2公里小于8公里，无等待', function()
    {
        var result = main(5.6,0);
        expect(result).toEqual(9);
    })

    it('里程大于8公里，无等待', function()
    {
        var result = main(16.2,0);
        expect(result).toEqual(21);
    })

    it('里程8公里，有等待', function()
    {
        var result = main(16.2,25);
        expect(result).toEqual(27);
    })
});