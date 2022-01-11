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
    var map = {}
    for (var k = 0; k < values.length; k++) {
      for (var l = 0; l < values[k].length; l++) {
        map[values[k][l]] = 0
      }
    }
    for (var i = 0; i < array.length; i++) {
      var flag = true
      for (var item in map) {
        if (array[i] === item) {
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

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  findIndex: function (array, predicate = identity, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == predicate) {
        return i
      }
      for (var item in array[i]) {
        if (item.value == predicate) {
          return i
        }
      }
    }
  },

  findLastIndex: function () {

  },

  flatten: function (array) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          arr.push(array[i][j])
        }
      } else {
        arr.push(array[i])
      }
    }
    return arr
  },

  flattenDeep: function (array) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        var item = this.flattenDeep(array[i])
        for (var j = 0; j < item.length; j++) {
          arr.push(item[j])
        }
      } else {
        arr.push(array[i])
      }
    }
    return arr
  },

  flattenDepth: function (array, depth = 1) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          arr.push(array[i][j])
        }
      } else {
        arr.push(array[i])
      }
    }
    depth--
    if (depth > 0) {
      arr = this.flattenDepth(arr, depth)
    }
    return arr
  },

  fromPairs: function (pairs) {
    var obj = {}
    for (var i = 0; i < pairs.length; i++) {
      for (var j = 0; j < pairs[i].length; j += 2) {
        obj[pairs[i][j]] = pairs[i][j + 1]
      }
    }
    return obj
  },

  head: function (array) {
    return array[0]
  },

  indexOf: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },

  initial: function (array) {
    array.length = array.length - 1
    return array
  },

  join: function (array, separator = ",") {
    var str = ""
    for (var i = 0; i < array.length; i++) {
      if (i == array.length - 1) {
        str = str + array[i]
      } else {
        str = str + array[i] + separator
      }
    }
    return str
  },

  last: function (array) {
    return array[array.length - 1]
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },

  pull: function () {

  },

  reverse: function (array) {
    var mid = Math.floor(array.length / 2)
    var len = array.length
    var start = 1
    for (var i = 0; i < mid; i++) {
      var flag = array[i]
      array[i] = array[len - start]
      array[len - start] = flag
      start++
    }
    return array
  },

  uniq: function (array) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      var flag = true
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          flag = false
        }
      }
      if (flag) {
        arr.push(array[i])
      }
    }
    return arr
  },

  uniqBy: function () {

  },

  without: function (array, values) {
    var obj = {}
    var arr = []
    for (var j = 1; j < arguments.length; j++) {
      obj[arguments[j]] = 0
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i] in obj) {
        continue
      } else {
        arr.push(array[i])
      }
    }
    return arr
  },


}