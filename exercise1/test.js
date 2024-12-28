const exercise11 = require('../exercise1/functions')

const assert = require('assert')

describe("exercise11", function() {

    it('действительно ли массив строк ["123", "52", "42"]', () => {
        assert.equal(Array.isArray(exercise11(["123", "52", "42"])), true)
    })

    it('действительно ли массив строк [123, 52, 42]', () => {
        assert.equal(Array.isArray(exercise11([123, 52, 42])), true)
    })
    
    it('действительно ли массив строк [123, 52, 42] будет выводить [3, 2, 2]', () => {
        assert.deepEqual(exercise11([123, 52, 42]), [3, 2, 2])
    })

    it('действительно ли массив строк ["Привет", 52, 42] будет выводить [6, 2, 2]', () => {
        assert.deepEqual(exercise11(["Привет", 52, 42]), [6, 2, 2])
    })

    it('действительно ли массив строк [123, 52, 42] не будет выводить [3, 2, 2]', () => {
        assert.notDeepEqual(exercise11([123, 52, 42]), [2, 2, 2])
    })

    it('действительно ли массив строк ["Привет", 52, 42] не будет выводить [5, 2, 2]', () => {
        assert.notDeepEqual(exercise11(["Привет", 52, 42]), [5, 2, 2])
    })
})
