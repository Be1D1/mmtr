function exercise11_3(arr) {
    var array = arr.split(' ').find(function(char){
        return char.toLowerCase().startsWith("а")  
    })
    if (!array)
        return 'не найдено ничего'
    return 'Первое найденное слова в вашей строке на букву "а" - '+ array
}

module.exports = exercise11_3