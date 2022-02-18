const hola = {one: 1, two: 2, three: 3}
const arr = [1, 2, 4]

function myEach(collection, callback){

  let model = arrayCreator(collection)

  for(let i of model){
    callback(i)
  }
  return collection
}

function myMap(collection, callback){
  const newArray =[]
  let model = arrayCreator(collection)

  for(let i of model){
    newArray.push(callback(i))
  }

  return newArray
}

function myReduce(collection, callback, acc){

  let model = arrayCreator(collection)

  if (acc == null){
    acc = model[0]
    for(let i=1; i < model.length; i++){
      acc = callback(acc, model[i], model)
    }
  }else{
    for(let item of model){
      acc = callback(acc, item, model)
    }
  }
  
  return acc
}

function myFind(collection, predicate){
  let model = arrayCreator(collection)

  for(let item of model){
    if(predicate(item) === true){
      return item
    }
  }
  return undefined
}

function myFilter(collection, predicate){
  let model = arrayCreator(collection)
  const newArray = []

  for( let item of model){
    if(predicate(item) === true ){
      newArray.push(item)
    }
  }

  return newArray
}

function mySize(collection){
  let model = arrayCreator(collection)
  return model.length
}

function myFirst(array, n){
  if( n == null ){
    return array[0]
  }
  const newArray = []
  for(let i=0; i < n; i++){
    newArray.push(array[i])
  }
  return newArray
}

function myLast(array, n){
  if(n == null){
    return array[array.length-1]
  }

  const newArray = []
  for(let i=array.length-1; i >= array.length-n; i--){
    newArray.unshift(array[i])
  }
  return newArray

}

function myKeys(object){
  const newArray = []
    for (let i of Object.keys(object)){
      newArray.push(i)
    }
    return newArray
}

function myValues(object){
  const newArray = []
  for (let i of Object.values(object)){
    newArray.push(i)
  }
  return newArray
}

function mySortBy(array, callback){
  const newArray = []
  const copyArray = []
  const finalArray = []
  for(let item of array){
    const objAux = {
      one: item,
      two: callback(item)
    }
    newArray.push(objAux)
    copyArray.push(objAux.two)
  }

  if(typeof copyArray[0] === 'string'){
    copyArray.sort((a, b)=> {
      if(a<b){
        return -1
      }
      if(a>b){
        return 1
      }
      return 0
    })
  }
  copyArray.sort((a,b)=> a-b)
  
  for(let item of copyArray){
    let copy = newArray.find( elem => elem.two === item)
    finalArray.push(copy.one)
  }
  return finalArray
}

function arrayCreator(collection){

  let model = collection
  if (Array.isArray(collection) === false){
    const arrayLike = []
    for (let i of Object.values(collection)){
      arrayLike.push(i)
    }
    model = arrayLike
  }
  return model
}

function testCallBack(item){
  return Math.sin(item)
}