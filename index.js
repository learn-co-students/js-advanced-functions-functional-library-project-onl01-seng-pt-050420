const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      const collectionArray = (collection instanceof Array) ? collection : Object.values(collection);
      collectionArray.forEach(value => fn(value))
      return  collection
    },

    map: function(collection, fn) {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }
     return  collection.map(value => fn(value))
    },

    reduce: function(collection = [], fn = () => {}, acc) {
			let c = collection.slice(0);

			if (!acc) {
				acc = c[0];
				c = c.slice(1);
			};

			for (let value of c) {
				acc = fn(acc, value, c);
      };
      
			return acc;
    },
    
    find: function(collection, predicate){
      if (!(collection instanceof Array)){
        collection = Object.values(collection);
      };

      for(const value of collection) {
        if (predicate(value)) return value
      };

      
    },

    filter: function(collection, predicate){
      if (!(collection instanceof Array)){
        collection = Object.values(collection);
      };

      const newArray = [];

      for(const value of collection){
        if (predicate(value)) newArray.push(value);
      };

      return newArray;
    },

    size: function(collection){
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length;
    },

    first: function(collection, n=false){
      return (n) ? collection.slice(0, n) : collection[0];
    },

    last: function(collection, n=false){
      return (n) ? collection.slice(collection.length - n, collection.length) : collection[collection.length - 1]
    },

    compact: function(collection){
      const removeFalsy = new Set([null, false, "", 0, undefined, NaN]);
      return collection.filter(elem => !removeFalsy.has(elem));
    },

    sortBy: function(collection, fn){
      const newArray = [...collection];
      return newArray.sort((a,b) => fn(a) - fn(b));
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection){
      const sorted = [collection[0]];
      for (const value of collection){
        if(sorted[value - 1] !== value){
          sorted.push(value);
        };
      };
      return sorted;
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

    keys: function(obj){
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj){
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
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
