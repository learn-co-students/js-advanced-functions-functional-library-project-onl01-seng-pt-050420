const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const i in collection){
        callback(collection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let array =[]
      for (const i in collection){
        array.push(callback(collection[i]))
      }
      return array
    },

    reduce: function(collection, callback = {}, acc = -2) {
      let b = acc
      for (const i of collection){
        b = callback(b, i, collection)
      }
      return b
    },

    find: function(collection, predicate){
      for (const i in collection) {
              if (predicate(collection[i]) === true) {
                return collection[i]
              }
            }
    },

    filter: function(collection, predicate) {
          const newArr = []
          for (const i in collection) {
            if (predicate(collection[i]) === true) {
              newArr.push(collection[i])
            }
          }
          return newArr
        },

        size: function(collection) {
          return Object.keys(collection).length
        },

        first: function(array, n) {
          const newArr = []
          if (n === undefined) {
            return array[0]
          } else {
            return array.slice(0, n)
          }
        },

        last: function(array, n) {
          const newArr = []
          if (n === undefined) {
            return array[array.length-1]
          } else {
            return array.slice(array.length - n)
          }
        },

        compact: function(array) {
          const newArr = []
          for (const i in array){
            if (array[i]) {
              newArr.push(array[i])
            }
          }
          return newArr
        },

        sortBy: function(arr, iteratee){
          return [...arr].sort(function(a,b) {return iteratee(a) - iteratee(b)})
        },


        flatten: function flatten(array, shallow){
     let newArr = []
     for(var i in array){
       if (shallow === true){
         if(Array.isArray(array[i])) {
             newArr = newArr.concat(array[i])
         } else {
             newArr.push(array[i])
         }
       }
       else {
         if(Array.isArray(array[i])) {
             newArr = newArr.concat(flatten(array[i]))
         } else {
             newArr.push(array[i])
         }
       }
     }
     return newArr
   },


   uniqSorted: function(collection, iteratee) {
    const sorted = [collection[0]]

    for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
        sorted.push(collection[idx])
    }

    return sorted
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
     return Object.keys(obj)
   },

   values: function(obj) {
     return Object.values(obj)
   },


    functions: function(fi) {
      let newArr = []
     for(var i in fi){
       if(typeof fi[i] == "function" ){
       newArr.push(fi[i])
       }
     }
     newArr.sort()
     return newArr
   },


  }
})()

fi.libraryMethod()
