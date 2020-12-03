const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, func) {
      let originalArr = Array.isArray(arr) ? arr : Object.values(arr);
      let newArr = Array.isArray(arr) ? [] : {};

      for (let i=0; i<originalArr.length; i++) {
        newArr[i] = func(originalArr[i])
      }
      return arr;
    },

    map: function(arr, func) {
      let newArr = []
      if (Array.isArray(arr)) {
        for (let i=0; i< arr.length; i++) {
          newArr[i] = func(arr[i])
        }
      } else {
        for (let i in arr) {
          newArr.push(func(arr[i]))
        }
      }
      return newArr
    },

    reduce: function(arr, func, startingPoint) {
      let total = startingPoint || arr[0];
      let startingIndex = startingPoint ? 0 : 1;

      for (let i=startingIndex; i<arr.length; i++) {
        total = func(total, arr[i], arr)
      }
      return total
    },

    find: function (arr, func) {
      for (let i=0; i<arr.length; i++) {
        if (func(arr[i])) {
          return arr[i]
        }
      }
    },

    filter: function(arr, func) {
      let newArr = [];
      for (let i=0; i<arr.length; i++) {
        if (func(arr[i])) {
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    size: function(arr) {
      return Array.isArray(arr) ? arr.length : Object.keys(arr).length
    },

    first: function(arr, endIndex) {
      return endIndex ? arr.slice(0, endIndex) : arr[0]
    },

    last: function(arr, endIndex) {
      return endIndex ? arr.slice(arr.length - endIndex, arr.length) : arr[arr.length - 1]
    },

    compact: function(arr) {
      let newArr = [];
      for (let i=0; i<arr.length; i++) {
        if (arr[i]) {
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    sortBy: function(arr, func) {
      const newArr = arr.map(x => x);
      return newArr.sort((a, b) => func(a) - func(b)
      )
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(arr, bool, newArr=[]) {
      if (!Array.isArray(arr)) {
        newArr.push(arr)
        return
      } else if (bool) {
        arr.forEach(data => Array.isArray(data) ? data.forEach(val => newArr.push(val)) : newArr.push(data))
      } else {
        arr.forEach(data => this.flatten(data, false, newArr))
      }
      return newArr
    },

    uniq: function (arr, bool, func) {
      let newArr = [];
      if (bool) {
        const sorted = [arr[0]]
        for (let i = 1; i < arr.length; i++) {
          if (sorted[i-1] !== arr[i])
            sorted.push(arr[i])
        }
        return sorted
      } else if (!func) {
        for (let i=0; i<arr.length; i++) {
          if (!newArr.includes(arr[i])) newArr.push(arr[i])
        }
      } else {
        let modArr = [];
        for (let i=0; i<arr.length; i++) {
          if (!modArr.includes(func(arr[i]))) {
            newArr.push(arr[i])
            modArr.push(func(arr[i]))
          }
        }
      }
      return newArr
    },

    keys: function(obj) {
      let newArr = [];
      for (let i in obj) {
        newArr.push(i)
      }
      return newArr
    },

    values: function(obj) {
      let newArr = [];
      for (let i in obj) {
        newArr.push(obj[i])
      }
      return newArr
    },

    functions: function(obj) {
      let newArr = []
      for (let key in obj) {
        if (typeof obj[key] === "function"){
          newArr.push(key)
        }
      }

      return newArr
    }
  }
})()

fi.libraryMethod()
