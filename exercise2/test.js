const exercise11_2 = require('../exercise2/functions')

const assert = require('assert')

describe("exercise11_2", function() {

    it('действительно ли массив', () => {
        assert.equal(typeof (exercise11_2(3)), 'boolean')
    })

    it('6 действительно ли четное число', () => {
        assert.equal(exercise11_2(6), true)
    })

    it('9 действительно ли нечетное число', () => {
        assert.equal(exercise11_2(9), false)
    })

    it('4 действительно ли четное число', () => {
        assert.equal(exercise11_2(4), true)
    })

    it('5 действительно ли нечетное число', () => {
        assert.equal(exercise11_2(5), false)
    })

})
