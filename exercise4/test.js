const exercise11_4 = require('../exercise4/functions')

const assert = require('assert')

describe("exercise11_4", function() {

    it('должен вернуть "Результат - false" для массива [1, 5, 6]', () => {
        assert.equal(exercise11_4([1, 5, 6]), 'Результат - ' + false)
    })

    it('должен вернуть "Результат - true" для массива [1, 5, 10]', () => {
        assert.equal(exercise11_4([1, 5, 10]), 'Результат - ' + true)
    })

    it('должен вернуть сообщение об ошибке для некорректного ввода', () => {
        assert.equal(exercise11_4(1), 'Должен быть корректный массив \nЕще раз')
    })

    it('должен вернуть сообщение об ошибке для некорректного ввода', () => {
        assert.equal(exercise11_4("sdf"), 'Должен быть корректный массив \nЕще раз')
    })
    it('должен выкинуть ReferenceError при вводе неопределенной переменной', () => {
        assert.throws(() => exercise11_4(sdf), ReferenceError)
    })
})