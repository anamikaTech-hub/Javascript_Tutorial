
//----------------Mutator methods ( modify the array)

let array1 = [1,2,3,4,5]
let array2 = [1,2,3,4,5]
let array3 = [1,2,3,4,5]
let array4 = [1,2,3,4,5]
let array5 = [1,2,3,4,5]
let array6 = [1,2,3,4,5]
let array7 = [3,2,7,4,1,9,5]
let array8 = ['apple', 'orange','banana',]
let array9 = [1,2,3,4,5]

//------------LENGTH

console.log(array1.length);//output: 5

//------------PUSH

array1.push(6,7)
console.log(array1);// output: [1,2,3,4,5,6,7]

//------------POP

array2.pop()
console.log(array2);// output: [1,2,3,4]

//-----------SHIFT

array3.shift()
console.log(array3);// output: [2,3,4,5]

//-----------UNSHIFT

array4.unshift(0)
console.log(array4);// output: [0,1,2,3,4,5]


//----------SPLICE

array5.splice(0,2,8,9)
console.log(array5);// output: [8,9,3,4,5]

//-----------REVERSE

array6.reverse()
console.log(array6);// output: [5,4,3,2,1]

//----------SORT

array7.sort((a,b)=>a-b)
console.log(array7);// output: [1,2,3,4,5,7,9]

array8.sort()
console.log(array8);// output: ['apple', 'banana', 'orange']

//-------------FILL

array9.fill(10,1,3)
console.log(array9);// output: [1,10,10,4,5]
