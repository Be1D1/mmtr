//1
/*function exercise1(n) {
    if (n < 0) {
        return 'отрицательное число'
    }
    var result = 1

    for (var i = 2; i <= n; i++) {
        result = result * i
    }

    return result
}
var value = prompt('Введите целое число: ')
value = parseInt(value)
if(isNaN(value))
{
    alert('ваше значение не число!')
} 

var result = exercise1(value)
alert('Факториал числа ' + value + ' = ' + result)
location.reload()*/


//2
/*var value = prompt('Введите строку: ')
function exercise2(value) {
    var string = value.split(' ')
    var word = ''

    for (var i = 0; i < string.length; i++) {

        if (string[i].length > word.length) {
            word = string[i]
        }
    }

    return word.length
}
var len = exercise2(value)
alert('Ваша строка: ' + '"' + value + '"' + ' и длина самого длинного слова в строке: ' + len);
location.reload()*/

//3
/*var value = prompt('Введите массив (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]): ')
function exercise3(value) {
    var array = JSON.parse(value)
    var arrayres = [];
    for (var i = 0; i < array.length; i++) {
        var subArray = array[i]

        var result = subArray[0]
        for (var j = 0; j < subArray.length; j++) {
            if (subArray[j] > result) {
                result = subArray[j]
            }
        }

        arrayres.push(result)
    }  
    return arrayres
}

var len = exercise3(value)
alert('массив, состоящий из наибольшего числа каждого предоставленного подмассива: ' + len)
location.reload()*/

//4
/*var string = prompt("Ваша строка: ")
var lenstring = prompt("Длина строки: ")
function exercise4(str, len) {
    if (str.length > len) {
        return str.slice(0, len) + '...'
    }
    return str
}
var lenstr = parseInt(lenstring)

if (isNaN(lenstr)) {
    alert("Еще раз: ")
} else {

    alert(exercise4(string, lenstr))
}*/

//5
/*var string = prompt("Ваша строка: ")
function exercise5(string) {
    var len = string.split(' ')
    var newlen = len.map(words => {
        return words.charAt(0).toUpperCase() + words.slice(1)
    })
    return newlen.join(' ')
}
alert(exercise5(string))
location.reload()*/

//6
/*var arr1 = prompt("Ваш первый массив (пример [1, 2, 3]): ")
var arr2 = prompt("Ваш второй массив (пример [4, 5]): ")
var strint = prompt("Ваше целое число: ")
function exercise6(array1, array2, int) {
    array1 = JSON.parse(array1)
    array2 = JSON.parse(array2)
    int = parseInt(int)

    var result = [...array2]
    for (var i = 0; i < array1.length; i++) {
        result.splice(int + i, 0, array1[i])
    }
    
    return '['+ result +']'
}
alert(exercise6(arr1, arr2, strint))
location.reload()*/

//7
/*var arr = prompt("Ваш массив: ")
function exercise7(arr) {
    try {
        arr = arr.replace(/NaN/g, 'null').replace(/undefined/g, 'null')
        var array = JSON.parse(arr)
        return array.filter(Boolean) 
    } 
    catch 
    {
        alert("Должен быть корректный массив")
    }
}
if (exercise7(arr) != undefined)
alert('[' + exercise7(arr) + ']')
location.reload()*/

//8
/*var arr = prompt("Ваш массив (из двух строк!):").split(',')
function exercise8(arr) {
    var [str1, str2] = arr.map(function(str) {
        return str.trim().toLowerCase()
    });
    for (var char of str2) {
        if (!str1.includes(char)) {
            return false
        }
    }
    return true
}
alert(exercise8(arr))
location.reload()*/

//9
/*var arr = prompt("Ваш массив (пример [1, 2, 3, 4, 5, 6...]):")
var size = prompt("Ваше целое число:")
function exercise9(arr, size) {
    var newarr = []
    var sizeunt = parseInt(size)
    var array = JSON.parse(arr)
    for (var i = 0; i < array.length; i += sizeunt) {
        var elem = array.slice(i, i + sizeunt)
        newarr.push(elem)
    }
    
    return newarr
}
alert(JSON.stringify(exercise9(arr, size)));
location.reload()*/

//10
/*var size = prompt("Ваше целое число:")
function exercise10(size, arr = []) {
    var sizeunt = parseInt(size)
    if (sizeunt < 1) 
        return '[' + arr.join(', ') + ']'

    arr.push(sizeunt)
    return exercise10(sizeunt - 1, arr)
}
alert(exercise10(size))
location.reload()*/

//11
/*var arr = prompt("Ваш массив строк (пример[1,2,3]): ")
var array = JSON.parse(arr)
function exercise11(array) {
    var len = array.map(function(arrays) {
        return String(arrays).trim().length
    })
    return len
}
alert(exercise11(array))
location.reload()*/

/*var ch = prompt("Ваше число: ")
var elem = parseInt(ch)
function exercise11_2(elem) {
    return elem % 2 === 0
}
alert('Четное ли число: ' + ch + ' - ' + exercise11_2(elem))
location.reload()*/

/*var arr = prompt("Ваша строка: ")
function exercise11_3(arr) {
    var array = arr.split(' ').find(function(char){
        return char.toLowerCase().startsWith("а")  
    })
    if (!array)
        return 'не найдено ничего'
    return 'Первое найденное слова в вашей строке на букву "а" - '+ array
}
alert(exercise11_3(arr))
location.reload()*/

/*var arr = prompt("Ваш массив (пример [1,2..]): ")
var arr = JSON.parse(arr)
function exercise11_4(arr) {
    if (!Array.isArray(arr)) 
        return 'Должен быть корректный массив \nЕще раз'
    
    var array = arr.some(function(char){
        return char > 7
    })
    return 'Результат - '+ array

}
alert(exercise11_4(arr))
location.reload()*/

/*var arr = prompt("Ваш массив (пример [1,2..]): ")
var arr1 = JSON.parse(arr)
function exercise11_5(arr1) {
    if (!Array.isArray(arr1)) 
         return 'Должен быть корректный массив \nЕще раз'
     var array = arr1.every(function(char){
         return char >= 2
     })   
     return 'Результат - '+ array
     
}
alert(exercise11_5(arr1))
location.reload()*/

//12 отдельные папки

//13
/*var arr = prompt("Ваш массив из двух чисел (пример[1,2]):")
function exercise13(arr) {
    var sum = 0
    try{
    var array = JSON.parse(arr)
    if (array.length !== 2) {
        alert('нужно два числа')
         return 'еще раз'
    }
    var startint = Math.min(array[0], array[1])
    var endint = Math.max(array[0], array[1])
    for (var j = startint; j <= endint; j++) {
        sum = sum + j
    }
    }
    catch
    {
        alert('формат нужен [x,y]')
        return 'еще раз'
    }
    return 'Cумма чисел и чисел между ними: '+ sum
}
alert(exercise13(arr))
location.reload()*/

//14
/*var arr1 = prompt("Ваш первый массив (пример [1, 2, 3]): ")
var arr2 = prompt("Ваш второй массив (пример [4, 5]): ")
function exercise14(arr1, arr2) {
    var array1 = JSON.parse(arr1)
    var array2 = JSON.parse(arr2)

    var findarr1 = array1.filter(function(char){
        return !array2.includes(char)
    })
    var findarr2 = array2.filter(function(char){
        return !array1.includes(char)
    })
    var newarr =[...findarr1,...findarr2]
    return newarr
}
alert(exercise14(arr1, arr2))
location.reload()*/

//15
/*var arr = prompt('Ваш массив (пример[1,2,"a"]): ')
var arg = prompt("Что удалить? ").split(',').map(function(res){
    return res.trim()
})
function exercise15(arr, ...arg) {
    var array = JSON.parse(arr)
    var result = array.filter(function(finish){
        return !arg.includes(finish.toString())
    })
    return result
}
alert('Вот: '+ exercise15(arr, ...arg))
location.reload()*/

//16
/*function exercise16(arr, agr) {
    return arr.filter(function(object){
        return Object.entries(agr).every(([key, value]) => object[key] === value)
    })
}
const finish = exercise16([{ "apple": 1, "bat": 2}, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2}, { "bat": 2}],
    { "apple": 1, "bat": 2 })

alert(JSON.stringify(finish))*/

//17
/*var string = prompt("Ваша строка: ")
function exercise17(string) {
    return string.replace(/[_\s]+/g, '-')
}
alert(exercise17(string))
location.reload()*/

//18
/*var string = prompt("Ваша строка: ")
var word = prompt("Ваше слово, которое заменить: ")
var switchword = prompt("Ваше слово, на которое заменить: ")
function exercise18(string, word, switchword) {
    var up = word.charAt(0) == word.charAt(0).toUpperCase()
    if(up)
        switchword = switchword.charAt(0).toUpperCase() + switchword.slice(1)
    var newword = string.split(word)
    return newword.join(switchword)
}
alert(exercise18(string, word, switchword))
location.reload()*/

//19
/*var string = prompt("Ваша последовательность букв : ").toLowerCase()
function exercise19(string) {
    var start = Math.min(string.charCodeAt(0), string.charCodeAt(string.length - 1))
    var end = Math.max(string.charCodeAt(0), string.charCodeAt(string.length - 1))
    var arr=[]
    if(parseInt(string))
        return 'давай буквы лучше'
    for (var i = start; i <= end; i++) {
        var сhar = String.fromCharCode(i)
  
        if (!string.includes(сhar)) {
            arr.push(сhar)
        }
    }
    if (arr.length > 0) {
        return 'не хватает: '+ arr.join(', ');
    } else {
        return undefined
    }
}
alert(exercise19(string))
location.reload()*/

//20
/*var arr = prompt("Ваш(и) массив(ы) (пример [[],[],[]]): ", "[[],[],[]]")
function exercise20(arr) {
    var array = JSON.parse(arr)
    var arrays = [].concat(...array)
    var unic = new Set(arrays)
    return Array.from(unic)
}
alert(JSON.stringify(exercise20(arr)))
location.reload()*/

//21
/*var n = prompt('Введите целое число: ')
function exercise21(n) {
    n = parseInt(n)
    if(isNaN(n))
    {
        alert('ваше значение не число!')
    } 
    var sum = 0
    for (var i = 2; i <= n; i++) {
        var chislo = true
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                chislo = false
                break
            }
        }
        if (chislo) {
            sum = sum + i
        }
    }
    return sum
}
alert('Сумма: ' + exercise21(n))
location.reload()*/

//22
/*var arr = prompt('Ваш массив [1,2...]: ')
alert('Условие по умочанию всегда n >= 3')
function exercise22(arr, fun) {
    var array = JSON.parse(arr)
    var index = 0
    while (index < array.length && !fun(array[index])) {
        index=index+1
    }
    return array.slice(index)
}
var func = function(n) {
    return n >= 3
}
alert('Вот что получилось: ' + exercise22(arr, func))
location.reload()*/

//23
/*var arr = prompt("Ваш массив с вложенными (пример[1, [2], [3, [[4]]]]): ")
function exercise23(arr) {
    var array = JSON.parse(arr)
    return array.flat(Infinity)
}
console.log(exercise23(arr))
alert('Результат: '+exercise23(arr) + ' \nНо лучше заглянуть в консоль)')*/

//24
/*function exercise24(arg1)
{
    if(arguments == 1)
        {
        return function(arg2)
        {
            return arg1 + arg2
        }           
    }
    return arg1 + arguments[1]
}
alert('Аргументы: 3 и 5 и сумма будет = '+exercise24(3,5))*/
