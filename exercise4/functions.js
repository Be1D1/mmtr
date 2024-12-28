function exercise11_4(arr) {
    if (!Array.isArray(arr)) 
        return 'Должен быть корректный массив \nЕще раз'
    
    var array = arr.some(function(char){
        return char > 7
    })
    return 'Результат - '+ array

}

module.exports = exercise11_4