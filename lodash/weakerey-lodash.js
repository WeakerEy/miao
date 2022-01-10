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
    for (var i = 0; i < pairs.length; i += 2) {
      obj[i] = obj[i + 1]
    }
    return obj
  }, head: function () { }, indexOf: function () { }, initial: function () { }, join: function () { }, last: function () { }, lastIndexOf: function () { }, reverse: function () { },
  uniq: function () { }, uniqBy: function () { }, without: function () { },


}