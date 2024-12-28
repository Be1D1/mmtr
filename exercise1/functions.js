function exercise11(array) {
    var len = array.map(function(arrays) {
        return String(arrays).trim().length
    })
    return len
}
module.exports = exercise11