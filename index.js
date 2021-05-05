const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
  
    each: function(collection, callback) {
      const newCollection = (function() { 
        if (Array.isArray(collection)){
          for (let i = 0; newCollection.length; i++){
            callback(newCollection[i], i, collection)
          } 
        }else if(typeof(collection) === "object"){
          for(let i = 0; i < Object.keys(collection).length; i++){
            console.log (collection[i])
              callback(collection[Object.keys(collection)[i]], Object.keys(collection)[i], i)
            }
        }
      //   } else if(typeof(collection) ==="object"){
      //     for (const key in collection) {
      //       callback(collection[key], key, collection)
      //     }
      //   }
     }) 
      return collection
    }
}

  
})();

fi.libraryMethod()
