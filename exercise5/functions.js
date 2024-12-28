function exercise11_5(arr1) {
    if (!Array.isArray(arr1)) 
         return 'Должен быть корректный массив \nЕще раз'
     var array = arr1.every(function(char){
         return char >= 2
     })   
     return 'Результат - '+ array
     
}

module.exports = exercise11_5