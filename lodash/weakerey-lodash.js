var weakerey = {
  chunk: function (array, size = 1) {
    var arr = []
    var result = []
    for (var i = 0; i < array.length; i++) {
      arr.push(array[i])
      if (arr.length == size) {
        result.push(arr)
        arr = []
      }
    }
    if (arr.length != 0) {
      result.push(arr)
    }
    return result
  },

  compact: function (array) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        arr.push(array[i])
      }
    }
    return arr
  },

  difference: function (array, ...values) {
    var arr = []
    values = arguments[1, arguments.length - 1]
    for (var i = 0; i < array.length; i++) {
      var flag = true
      for (var j = 0; j < values.length; j++) {
        if (array[i] === values[j]) {
          flag = false
        }
      }
      if (flag) {
        arr.push(array[i])
      }
    }
    return arr
  },

  drop: function (array, n = 1) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      if (n <= 0) {
        arr.push(array[i])
      }
      n--
    }
    return arr
  },

  dropRight: function (array, n = 1) {
    var arr = []
    for (var i = 0; i < array.length - n; i++) {
      arr.push(array[i])
    }
    return arr
  },
  
  dropRightWhile: function () {

  }, 
  dropWhile: function () {

  },
  fill: function () {
    
  }, findIndex: function () { }, findLastIndex: function () { },
}