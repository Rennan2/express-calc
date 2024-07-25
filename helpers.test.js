const { describe } = require("yargs");
const {
    findMean,
    findMedian,
    findMode,

} = require("/helpers");

describe("#findMedian", function () {
    it("find the median of a set", function () {
        expect(findMedian([1,4,6,8])).toEqual(5)

    })
    it("find the median of an odd set", function () {
        expect(findMedian([1,4,6,8,9])).toEqual(6)
    })
})

describe("#findMean", function () {
    it ("find mean of empty array", function () {
        expect(findMode([])).toEqual(0)
    })
    it ("find the mean of a set", function () {
        expect(findMode([1,-2,5,2])).toEqual(1.5)
    })
})

describe("#findMode", function () {
    it("find the mode", function () {
        it("finds the mode", function () {
            expect(findMode([1,1,1,3,3,,4])).toEqual(1);
        })
    })
})