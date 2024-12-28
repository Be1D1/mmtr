const exercise11_5 = require('../exercise5/functions')

const assert = require('assert')

describe("exercise11_5", function() {
    it('должен вернуть "Результат - false" для массива [1, 5, 6]', () => {
        assert.equal(exercise11_5([1, 5, 6]), 'Результат - '+ false)
    })

    it('должен вернуть "Результат - true" для массива [2, 5, 10]', () => {
        assert.equal(exercise11_5([2, 5, 10]), 'Результат - '+ true)
    })

    it('должен вернуть сообщение об ошибке для некорректного ввода', () => {
        assert.equal(exercise11_5(12), 'Должен быть корректный массив \nЕще раз')
    })

    it('должен вернуть сообщение об ошибке для некорректного ввода', () => {
        assert.equal(exercise11_5("sdf"), 'Должен быть корректный массив \nЕще раз')
    })

    it('должен выкинуть ReferenceError при вводе неопределенной переменной', () => {
        assert.throws(() => exercise11_5(asd), ReferenceError)
    })
})