const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      let newCollection = collection instanceof Array ? collection.slice() : Object.values(collection)
      newCollection.forEach(function(value, index){
        cb(newCollection[index])
      })
      return collection
    },

    map: function(collection, cb) {
      let newCollection = collection instanceof Array ? collection.slice() : Object.values(collection)
      let returnArr = []
      newCollection.forEach(function(value, index){
        returnArr.push(cb(newCollection[index]))
      })
      return returnArr
    },

    reduce: function(c = [], cb = () => {}, memo) {
      let collection = c.slice()
      if (!memo){
        memo = collection[0]
        collection = collection.slice(1)
      }
      collection.forEach(function(value, index){
        memo = cb(memo, collection[index], collection)
      })
      return memo
    },

    find: function(collection, predicate) {
      let newCollection = collection instanceof Array ? collection.slice() : Object.values(collection)

      for (let x = 0; x < newCollection.length; x++)
       if (predicate(newCollection[x])) return collection[x]
      return undefined
    },

    filter: function(collection, predicate){
      let newCollection = collection instanceof Array ? collection.slice() : Object.values(collection)
      let returnArr = []
      for (let x = 0; x < newCollection.length; x++)
       if (predicate(newCollection[x])) returnArr.push(newCollection[x])
      return returnArr
    },

    size: function(collection){
      let newCollection = collection instanceof Array ? collection.slice() : Object.values(collection)
      return newCollection.length
    },

    first: function(array, n = 0){
      if (n === 0 || n === 1)
       return array[0]
      return array.slice(0, n)
    },

    last: function(array, n = 0){
      if (n === 0)
       return array[array.length - 1]
      return array.slice(array.length - n, array.length)
    },

    compact: function(array){
      let returnArr = []
      array.forEach(x => {
        if (x)
         returnArr.push(x)
      })
      return returnArr
    },

    sortBy: function(array, cb){
      let arrayCopy = [...array]
      return arrayCopy.sort(function(a, b){
        return cb(a) - cb(b)
      })
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
          return collection.flat(1)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

}

})()

fi.libraryMethod()