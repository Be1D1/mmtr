const exercise11_3 = require('../exercise3/functions')

const assert = require('assert')

describe("exercise11_3", function() {

    it('действительно ли строка', () => {
        assert.equal(typeof (exercise11_3("абв")), 'string')
    })

    it('действительно ли строка', () => {
        assert.equal(typeof (exercise11_3("абв 123")), 'string')
    })

    it('действительно ли слово "абв" первое найденное в строке на букву "а"', () => {
        assert.strictEqual(exercise11_3("абв 123"), 'Первое найденное слова в вашей строке на букву "а" - '+ "абв");
    })

    it('должен возвращать "не найдено ничего", если слово не найдено', () => {
        assert.strictEqual(exercise11_3("бвг 123"), 'не найдено ничего');
    })
})
