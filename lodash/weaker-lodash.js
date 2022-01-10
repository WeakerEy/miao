var weakerey = {
  chunk: function (array, size) {
    var arr = []
    arr.length = size
    var start = 0
    for (var i = 0; i < array.length; i++) {
      arr[start] = array[i]
      start++
    }
  }
}