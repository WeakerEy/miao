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
    for (var j = 0; j < values.length; j++) {
      for (var k = 0; k < values[j].length; k++) {
        map[values[j][k]] = 1
      }
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i] in map) {
        continue
      } else {
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

  pull: function (array, ...vals) {
    var arr = []
    for (var i = 1; i < arguments.length; i++) {
      arr.push(arguments[i])
    }
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (array[i] == arr[j]) {
          array.splice(i, 1)
          i--
        }
      }
    }
    return array
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
    var map = {}
    for (var i = 0; i < array.length; i++) {
      if (array[i] in map) {
        continue
      } else {
        map[array[i]] = 0
        arr.push(array[i])
      }
    }
    return arr
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

  zip: function (...array) {
    var result = []
    var ary = Array.from(arguments)
    var len = 0
    ary.forEach(item => {
      if (item.length > len) {
        len = item.length
      }
    })
    for (var i = 0; i < len; i++) {
      var item = []
      for (var j = 0; j < ary.length; j++) {
        item.push(ary[j][i])
      }
      result.push(item)
    }
    return result
  },

  countBy: function (array, func) {
    var obj = {}
    for (var i = 0; i < array.length; i++) {
      if (typeof func !== "function") {
        var key = array[i][func]
      } else {
        var key = func(array[i])
      }
      if (key in obj) {
        obj[key]++
      } else {
        obj[key] = 1
      }
    }
    return obj
  },

  every: function (st, func) {
    var val
    for (var i = 0; i < st.length; i++) {
      if (typeof func == "string") {
        val = st[i][func]
        if (val in st) {
          val = true
        } else {
          return false
        }
      } else if (Array.isArray(func)) {
        for (var j = 0; j < func.length; j++) {
          if (st[i][func[j]] == func[j + 1]) {
            val = true
          } else {
            return false
          }
          j++
        }
      } else if (typeof func == "function") {
        val = func(st[i])
        if (!val) {
          return false
        }
      } else {
        for (var key in func) {
          if (st[i][key] == func[key]) {
            val = true
          } else {
            return false
          }
        }
      }
    }
    return val
  },

  forEach: function (set, func) {
    for (var key in set) {
      func(set[key], key, set)
    }
    return set
  },

  groupBy: function (st, func) {
    var obj = {}
    for (var i = 0; i < st.length; i++) {
      if (typeof func !== "function") {
        var key = st[i][func]
      } else {
        var key = func(st[i])
      }
      if (key in obj) {
        obj[key].push(st[i])
      } else {
        var ary = []
        ary.push(st[i])
        obj[key] = ary
      }
    }
    return obj
  },

  keyBy: function (set, func) {
    var obj = {}
    for (var i = 0; i < set.length; i++) {
      if (typeof func !== "function") {
        var key = set[i][func]
      } else {
        var key = func(set[i])
      }
      obj[key] = set[i]
    }
    return obj
  },

  map: function (set, func) {
    var result = []
    for (var index in set) {
      if (typeof func != "function") {
        var key = set[index][func] || set[index][func[0]][func[2]]
      } else {
        var key = func(set[index], +index, set)
      }
      result.push(key)
    }
    return result
  },
  a = [{"a":{"b":1}},{"a":{"b":2}}]
  partition: function (set, func) {
    var _true = []
    var _false = []
    var val = 0
    set.forEach(item => {
      if (typeof func == "string") {
        val = item[func]
      } else if (typeof func == "function") {
        val = func(item)
      } else if (Array.isArray(func)) {
        for (var i = 0; i < func.length; i++) {
          if (item[func[i]] == func[i + 1]) {
            val = true
          } else {
            val = false
          }
          i++
        }
      } else {
        for (var key in func) {
          if (item[key] == func[key]) {
            val = true
          } else {
            val = false
            break
          }
        }
      }
      if (val) {
        _true.push(item)
      } else {
        _false.push(item)
      }
    })
    var result = [_true, _false]
    return result
  },

  reduce: function (set, func, start) {
    if (arguments.length == 2) {
      sum = set[0]
    } else {
      sum = start
    }
    if (Array.isArray(set) && arguments.length == 2) {
      for (var i = 1; i < set.length; i++) {
        sum = func(sum, set[i])
      }
    } else {
      for (var i = 0; i < set.length; i++) {
        sum = func(sum, set[i])
      }
    }
    if (typeof set == "object") {
      for (var key in set) {
        func(sum, set[key], key)
      }
    }
    return sum
  },

  reduceRight: function (set, func, start) {
    if (arguments.length == 2) {
      sum = set[0]
    } else {
      sum = start
    }
    if (Array.isArray(set) && arguments.length == 2) {
      for (var i = set.length; i > 0; i--) {
        sum = func(sum, set[i])
      }
    } else {
      for (var i = set.length - 1; i >= 0; i--) {
        sum = func(sum, set[i])
      }
    }
    return sum
  },

  size: function (set) {
    if (typeof set == "string") {
      return set.length
    }
    var result = 0
    for (var key in set) {
      result++
    }
    return result
  },

  isArguments: function (value) {
    var result = Object.prototype.toString.call(value)
    if (result == "[Object String]" && Array.isArray(value)) {
      return true
    } else {
      return false
    }
  },

  isArray: function (value) {
    return val instanceof Array
  },

  isBoolean: function (value) {
    var result = Object.prototype.toString.call(value)
    if (result == '[object Boolean]') {
      return true
    }
    return false
  }

}