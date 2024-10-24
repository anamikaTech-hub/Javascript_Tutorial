//------------------SHALLOW COPY--------------//

let person = {
    name:'Anamika',
    age:21,
    place: 'Malappuram'
}
////---------- in normal case
// let details = person
// details.name = 'John Doe'
// console.log(person.name);// output: 'John Doe'

////----------Using spread operator

let details = {...person};
details.name = 'Rose';
console.log(person.name);// output: 'Anamika'

////---------Using assign operator

let details1 = Object.assign({},person);
details1.name = 'Jennie';
console.log(details1.name);// output: Jennie
console.log(person.name);// output: Anamika


////-------------------DEEP COPY----------------////

let obj = {
    name:'Anamika',
    age:21,
    address:{
        district: 'Malappuram',
        state: 'Kerala'
    }
}

let obj1 = JSON.parse(JSON.stringify(obj));
obj1.name = 'Lisa'
console.log(obj1.name);// output: Lisa
console.log(obj.name);// output: Anamika




