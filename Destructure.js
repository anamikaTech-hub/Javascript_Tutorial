///---------------ARRAY DESTRUCTURING --------------///
let arr = [1,2,3,4,5]
 let [num1,num2,num3,num4,num5] = arr
 
 console.log(num4);

 ///--------------OBJECT DESTRUCTURING--------------////

let person = {
    name:'Anamika',
    age:21,
    address:{
        district:'Malappuram',
        state:'Kerala'
    }
}

const {name:n,age,address:{district,state}} = person
console.log(age);
console.log(n);
console.log(district);




 