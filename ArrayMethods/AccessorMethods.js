//--------------Accessor Methods (Do not modify the array)

let array = [1,2,3,4,5]
let array1 = [6,7]
let array2 = [1,5,2,3,5,3,3,6]
let array3 = ['H','e','l','l','o']

//------------CONCAT

let conCat = array.concat(array1)
console.log(conCat);// output: [1,2,3,4,5,6,7]

//------------INCLUDES

console.log(array.includes(9));// output: false

//-----------INDEXOF

console.log(array.indexOf(4));// output: 3

//----------LASTINDEXOF

console.log(array2.lastIndexOf(3));// output: 6

//-----------JOIN

console.log(array3.join(''));// output: Hello


//--------------SLICE

console.log(array.slice(1,4));// output: [2,3,4]

//--------------FILTER

let great = array.filter(x=>x>3)
console.log(great);// output: [4,5]


//--------------MAP

let double = array.map(x=>x*2)
console.log(double);// output: [2,4,6,8,10]


//--------------FOREACH

array.forEach(x=>console.log(x+2))// output: 3 4 5 6 7

//--------------EVERY

console.log(array.every(x=>x>3));// output: false

//-----------------SOME

console.log(array.some(x=>x>3));// output: true

//---------------FIND

let findGreater = array.find(x=>x>3)
console.log(findGreater);// output: 4

//---------------FINDINDEX

console.log(array.findIndex(x=>x>3));// output: 3

//----------------REDUCE

let sum = array.reduce((acc,curr)=> acc+curr,0);
console.log(sum);// output: 15

//------------------REDUCERIGHT

let sumValue = array.reduceRight((acc,curr)=> acc+curr,0);
console.log(sumValue);// output: 15



